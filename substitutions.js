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
                chordArr[location].root.duration.value = five.root.duration.value;
                return chordArr;
            }
            // addExtensions: function(chordArr, location){
            //     return chordArr;
            // }
            // minorThirdSub:
        }
    }
}




module.exports = subs;