const teoria = require('teoria');

const subs = {
    fiveOneToTwoFiveOne: function(chordArr, location){
        let five = chordArr[location];
        chordArr[location] = [teoria.note(five.name[0]).interval('P5').chord('m7'), five];
        // console.log(chordArr)
        return chordArr.reduce(function(a, b) {
            return a.concat(b);
        });
    }
}



module.exports = subs;