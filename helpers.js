module.exports = {
    noteName: function(str){
        return (str[1] === '#' || str[1] === 'b') ? str.substring(0,2) : str[0];
    }
}