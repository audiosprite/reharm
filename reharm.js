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
const buildChordArr = function(chordStrArr){
    let chordArr = [];
    chordStrArr.forEach(chord => chordArr.push(teoria.chord(chord)));
    return chordArr;
}
// console.log(buildChordArr(chordArr));
// console.log(subs.fiveOneToTwoFiveOne(buildChordArr(chordArr)))

const identifyOpps = function(chordArr){
    let opportunities = {};
    for (var i = 0; i < chordArr.length-1; i++){
        if (chordArr[i] === teoria.note(helpers.noteName(chordArr[i+1])).interval('P5').chord('7').name){
            console.log('identified 251')
            if (!opportunities.fiveOneToTwoFiveOne) opportunities.fiveOneToTwoFiveOne = [];
            opportunities.fiveOneToTwoFiveOne.push(i);
        }
    }
    return opportunities;
}

const makeSubs = function(chordArr){
    let opportunities = identifyOpps(chordArr);
    let location = opportunities[helpers.randomProp(opportunities)];
    if (Object.keys(opportunities).length) return subs.fiveOne[helpers.randomProp(subs.fiveOne)](buildChordArr(chordArr), location);
    return buildChordArr(chordArr);
}

console.log(JSON.stringify(makeSubs(fiveOne), null, 0));
// console.log(identifyOpps(fiveOne));