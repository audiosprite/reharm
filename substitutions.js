const teoria = require('teoria');
const helpers = require('./helpers');

const subs = {
    fiveOne: {
        fiveOneToTwoFiveOne: function(chordArr, location){
            let five = chordArr[location];
            chordArr[location] = [teoria.note(helpers.noteName(five.name)).interval('P5').chord('m7'), five];
            chordArr[location][0].root.duration.value /= 2;
            chordArr[location][1].root.duration.value /= 2;
            return chordArr.reduce(function(a, b) {
                return a.concat(b);
            });
        },
        tritoneSub: function(chordArr, location){
            let five = chordArr[location];
            chordArr[location] = teoria.note(helpers.noteName(five.name)).interval('d5').chord('7');
            chordArr[location].root.duration.value = five.root.duration.value;
            return chordArr;
        }
    }
}




module.exports = subs;