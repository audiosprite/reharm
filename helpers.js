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

module.exports = {
    noteName,
    makeChords,
    splitChordName
}