// const PolySynth = require("tone").PolySynth;
// const synth = new PolySynth();

const _ = require('lodash');

const teoria = require('teoria');
const tonal = require('tonal'); // for MIDI

const subs = require('./substitutions');
const helpers = require('./helpers');

/*

take array of chords. what properties must chords have ?
    - root
    - quality
    - duration
must identify target chords - for now assume last chord is target
identify substitution opportunities
-create function for each sub type (tt sub, V-I ii-V-I etc)
pick one sub opp and output new chord progression
auralize it onClick. jquery or react ?

*/

const fiveOne = ['Em7', 'G7', 'Cmaj7'];

// builds chord array of chord objects from chord string array
const buildChordArr = function(chordStrArr){
    let chordArr = [];
    chordStrArr.forEach(chord => chordArr.push(teoria.chord(chord)));
    return chordArr;
}

// identify opportunities to substitute chords
const identifyOpps = function(chordArr){
    let opportunities = {};
    console.log(chordArr);
    for (var i = 0; i < chordArr.length-1; i++){
        // if (chordArr[i] === teoria.note(helpers.noteName(chordArr[i+1])).interval('P5').chord('7').name){
        if(
            (helpers.fivesOf(chordArr[i+1]).indexOf(chordArr[i]) !== -1) &&
            (!chordArr[i-1] || helpers.fivesOf(chordArr[i]).indexOf(chordArr[i-1]) === -1)
            ){
                if (!opportunities.fiveOne) opportunities.fiveOne = [];
                opportunities.fiveOne.push(i);
        }
        if(
             helpers.splitChordName(chordArr[i])[1][0] === 'm'
        ){
            if (!opportunities.minorChord) opportunities.minorChord = [];
                opportunities.minorChord.push(i);
        }
    }
    console.log(opportunities);
    return opportunities;
}

// make chord substitutions
const makeSubs = function(chordArr){
    let opportunities = identifyOpps(chordArr);
    let change = helpers.randomProp(opportunities);
    let locations = opportunities[change];
    let location = locations[Math.floor(Math.random() * locations.length)];
    if (Object.keys(opportunities).length) {
        if (subs.replacers.hasOwnProperty(change.toString())){
            return subs.replacers[change][helpers.randomProp(subs.replacers[change])](buildChordArr(chordArr), location);
        } else {
            return subs.splitters[change][helpers.randomProp(subs.splitters[change])](buildChordArr(chordArr), location);
        }
    }
    return buildChordArr(chordArr);
}

// return array of chord names from chord objs
const chordNames = function(objsArr){
    let rawArr = [];
    objsArr.forEach(chordObj => rawArr.push(chordObj.name));
    return rawArr;
}

// console.log(JSON.stringify(makeSubs(fiveOne), null, 0));
console.log(makeSubs(fiveOne));
// console.log(helpers.fivesOf('C7'));