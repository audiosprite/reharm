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
            }
        }
    },
    replacers: {
        fiveOne: {
            tritoneSub: function(chordArr, location){
                let five = chordArr[location];
                chordArr[location] = teoria.note(helpers.noteName(five.name)).interval('d5').chord('7');
                return chordArr;
            },
            minorThirdSub: function(chordArr, location){
                let five = chordArr[location];
                (Math.floor(Math.random()+1)) ?
                chordArr[location] = teoria.note(helpers.noteName(five.name)).interval('m3').chord('7') :
                chordArr[location] = teoria.note(helpers.noteName(five.name)).interval('M6').chord('7');
                return chordArr;
            }
            // addExtensions: function(chordArr, location){
            //     return chordArr;
            // }
            // minorThirdSub:
        },
        minorChord: {
            minorToHalfDim: function(chordArr, location){
                let minChord = chordArr[location];
                chordArr[location] = teoria.note(helpers.noteName(minChord.name)).chord('ø');
                return chordArr;
            }
        }
    }
}




module.exports = subs;