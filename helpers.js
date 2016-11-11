const teoria = require('teoria');


const noteName = function(str){
    return (str[1] === '#' || str[1] === 'b') ? str.substring(0,2) : str[0];
};

const makeChords = function(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = teoria.note(noteName(splitChordName(arr[i])[0])).chord(splitChordName(arr[i])[1]);
    }
    return arr;
}

const splitChordName = function(str){
    return (str[1] === '#' || str[1] === 'b') ? [str.substring(0,2), str.substring(2)] : [str[0], str.substring(1)];
}

const randomProp = function(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

const fivesOf = function(chordName){
    let fives = [
        teoria.note(noteName(chordName)).interval('P5').chord('7').name,
        teoria.note(noteName(chordName)).interval('m2').chord('7').name,
        teoria.note(noteName(chordName)).interval('m3').chord('7').name,
        teoria.note(noteName(chordName)).interval('M6').chord('7').name
    ];
    return fives;
}

module.exports = {
    noteName,
    makeChords,
    splitChordName,
    randomProp,
    fivesOf
}