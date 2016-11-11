const teoria = require('teoria');
const helpers = require('./helpers');
const _ = require('lodash');

const subs = {
    splitters: {
        fiveOne: {
            fiveOneToTwoFiveOne: function(chordArr, location){
                console.log('ii7_V7')
                let five = chordArr[location];
                chordArr[location] = [teoria.note(helpers.noteName(five.name)).interval('P5').chord('m7'), five];
                chordArr[location][0].root.duration.value /= 2;
                chordArr[location][1].root.duration.value /= 2;
                return _.flattenDeep(chordArr);
            },
            fiveOneToDominantTwoFiveOne: function(chordArr, location){
                console.log('II7_V7')
                let five = chordArr[location];
                chordArr[location] = [teoria.note(helpers.noteName(five.name)).interval('P5').chord('7'), five];
                chordArr[location][0].root.duration.value /= 2;
                chordArr[location][1].root.duration.value /= 2;
                return _.flattenDeep(chordArr);
            },
            fiveOneToSixFiveOne: function(chordArr, location){
                console.log('bVI7_V7')
                let five = chordArr[location];
                chordArr[location] = [teoria.note(helpers.noteName(five.name)).interval('m2').chord('7'), five];
                chordArr[location][0].root.duration.value /= 2;
                chordArr[location][1].root.duration.value /= 2;
                return _.flattenDeep(chordArr);
            }
        },
        approach: {
            approachByDomM7: function(chordArr, location){
                console.log('approach by VII7')
                let beforeTarget = chordArr[location-1];
                let target = chordArr[location];
                chordArr[location-1] = [beforeTarget, teoria.note(helpers.noteName(target.name)).interval('M7').chord('7')];
                chordArr[location-1][0].root.duration.value /= 2;
                chordArr[location-1][1].root.duration.value /= 2;
                return _.flattenDeep(chordArr);
            },
            approachByDomM2: function(chordArr, location){
                console.log('approach by II7')
                let beforeTarget = chordArr[location-1];
                let target = chordArr[location];
                chordArr[location-1] = [beforeTarget, teoria.note(helpers.noteName(target.name)).interval('M2').chord('7')];
                chordArr[location-1][0].root.duration.value /= 2;
                chordArr[location-1][1].root.duration.value /= 2;
                return _.flattenDeep(chordArr);
            }
        // },
        // extensions: {
        //     addSharp5: function(chordArr, location){

        //     }
        }
    },
    replacers: {
        fiveOne: {
            tritoneSub: function(chordArr, location){
                console.log('tritone sub');
                let five = chordArr[location];
                chordArr[location] = teoria.note(helpers.noteName(five.name)).interval('d5').chord('7');
                return chordArr;
            },
            minorThirdSub: function(chordArr, location){
                console.log('V7 -> bVII7 or bIII7');
                let five = chordArr[location];
                (Math.floor(Math.random()+1)) ?
                chordArr[location] = teoria.note(helpers.noteName(five.name)).interval('m3').chord('7') :
                chordArr[location] = teoria.note(helpers.noteName(five.name)).interval('M6').chord('7');
                return chordArr;
            },
            addb9: function(chordArr, location){
                console.log('b9')
                chordArr[location] = teoria.note(helpers.noteName(chordArr[location])).chord('7b9');
                return chordArr;
            },
            dim7sub: function(chordArr, location){
                console.log('G7 -> Abo7')
                chordArr[location] = teoria.note(helpers.noteName(chordArr[location])).interval('M3').chord('o7');
            }
        },
        minorChord: {
            minorToHalfDim: function(chordArr, location){
                console.log('m -> m7b5');
                let minChord = chordArr[location];
                chordArr[location] = teoria.note(helpers.noteName(minChord.name)).chord('ø');
                return chordArr;
            },
            minorTob6Maj: function(chordArr, location){
                console.log('minor moved down M3');
                let minChord = chordArr[location];
                chordArr[location] = teoria.note(helpers.noteName(minChord.name)).interval('m6').chord('maj7');
                return chordArr;
            },
            minorToRelativeMajor: function(chordArr, location){
                console.log('minor to relative major');
                let minChord = chordArr[location];
                chordArr[location] = teoria.note(helpers.noteName(minChord.name)).interval('m3').chord('maj7');
                return chordArr;
            }
        },
        majorChord: {
            majorToRelativeMinor: function(chordArr, location){
                console.log('major to relative minor');
                chordArr[location] = teoria.note(helpers.noteName(chordArr[location].name)).interval('M3').chord('m7');
                return chordArr;
            },
            maj7ToTonicDimo7: function(chordArr, location){
                console.log('maj7 -> o7');
                chordArr[location] = teoria.note(helpers.noteName(chordArr[location].name)).chord('o7');
                return chordArr;
            }
        },
        addExtensions: {
            addb9: function(chordArr, location){
                console.log('7 -> 7b9');
                chordArr[location] = teoria.note(helpers.noteName(chordArr[location])).chord('7b9');
            }
        }
    }
}




module.exports = subs;