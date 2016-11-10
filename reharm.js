// const PolySynth = require("Tone").PolySynth;
// const synth = new PolySynth();

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

const fiveOne = ['G7', 'C'];

// builds chord array of chord objects from chord string array
const buildChordArr = function(chordArrStr){
    let chordArr = [];
    chordArrStr.forEach(chord => chordArr.push(teoria.chord(chord)));
    return chordArr;
}
// console.log(buildChordArr(chordArr));
// console.log(subs.fiveOneToTwoFiveOne(buildChordArr(chordArr)))

const identifyOpps = function(chordArr){
    let opportunities = {};
    for (var i = 0; i < chordArr.length-1; i++){
        if (chordArr[i] === teoria.note(helpers.noteName(chordArr[i+1])).interval('P5').chord('7').name){
            if (!opportunities.fiveOneToTwoFiveOne) opportunities.fiveOneToTwoFiveOne = [];
            opportunities.fiveOneToTwoFiveOne.push(i);
        }
    }
    return opportunities;
}

const makeSubs = function(chordArr, opportunities){
    // console.log(chordArr)
    let location;
    for (var prop in opportunities){
        location = opportunities[prop];
    }
    return subs.fiveOneToTwoFiveOne(buildChordArr(chordArr), location);
}

console.log(JSON.stringify(makeSubs(fiveOne, identifyOpps(fiveOne)), null, 0));
// console.log(idenfityOpps(fiveOne));