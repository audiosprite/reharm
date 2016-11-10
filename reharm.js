// const PolySynth = require("Tone").PolySynth;
// const synth = new PolySynth();

const teoria = require('teoria');
const tonal = require('tonal'); // for MIDI

const subs = require('./substitutions');

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

var bbmaj = teoria.chord('Bbmaj7');
// Default voicing:
bbmaj.voicing();  // #-> ['P1', 'M3', 'P5', 'M7'];
// console.log(bbmaj.dominant('7'));    // #-> ['bb', 'd', 'f', 'a'];

const fiveOne = ['G7', 'C'];
// console.log(chordArr, chordArr.length-2);

// builds chord array of chord objects from chord string array
const buildChordArr = function(chordArrStr){
    let chordArr = [];
    chordArrStr.forEach(chord => chordArr.push(teoria.chord(chord)));
    return chordArr;
}
// console.log(buildChordArr(chordArr));
// console.log(subs.fiveOneToTwoFiveOne(buildChordArr(chordArr)))

const idenfityOpps = function(chordArr){

}

const makeSubs = function(chordArr, locations){
    // console.log(chordArr)
    return subs.fiveOneToTwoFiveOne(buildChordArr(chordArr), 0);
}

console.log(makeSubs(fiveOne, 1));