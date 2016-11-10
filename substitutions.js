const teoria = require('teoria');

const subs = {
    fiveOneToTwoFiveOne: function(chordArr, location){
        let five = chordArr[location];
        if (five.name[1] === '#' || five.name[1] === 'b'){
            chordArr[location] = [teoria.note(five.name.substring(0, 2)).interval('P5').chord('m7'), five];
        } else {
            chordArr[location] = [teoria.note(five.name[0]).interval('P5').chord('m7'), five];
        }
        chordArr[location][0].root.duration.value = 2;
        chordArr[location][1].root.duration.value = 2;
        console.log(chordArr[0][0].root)
        console.log(chordArr[0][1].root)
        console.log(chordArr[1].root)
        return chordArr.reduce(function(a, b) {
            return a.concat(b);
        });
    }
}



module.exports = subs;