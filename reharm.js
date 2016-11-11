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

const fiveOne = ['E7', 'G7', 'Cmaj7'];

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
            if (!opportunities.fiveOneToTwoFiveOne) opportunities.fiveOneToTwoFiveOne = [];
            opportunities.fiveOneToTwoFiveOne.push(i);
        }
    }
    console.log(opportunities);
    return opportunities;
}

// make chord substitutions
const makeSubs = function(chordArr){
    let opportunities = identifyOpps(chordArr);
    let locations = opportunities[helpers.randomProp(opportunities)];
    let location = locations[Math.floor(Math.random() * locations.length)];
    if (Object.keys(opportunities).length) {
        return subs.splitters.fiveOne[helpers.randomProp(subs.splitters.fiveOne)](buildChordArr(chordArr), location);
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