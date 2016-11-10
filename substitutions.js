const teoria = require('teoria');
const helpers = require('./helpers');

const subs = {
    fiveOneToTwoFiveOne: function(chordArr, location){
        let five = chordArr[location];
        chordArr[location] = [teoria.note(helpers.noteName(five.name)).interval('P5').chord('m7'), five];
        chordArr[location][0].root.duration.value /= 2;
        chordArr[location][1].root.duration.value /= 2;
        return chordArr.reduce(function(a, b) {
            return a.concat(b);
        });
    }
}




module.exports = subs;