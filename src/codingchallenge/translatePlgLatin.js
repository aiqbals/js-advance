function translatePlgLatin(str) {
    //check
    
    //var firstVal = str.match(/[aeiou]/);
    //console.log(firstVal)
    //var firstvalPos = str.indexOf(firstVal);
    var firstvalPos = findFirstVowelPos(str);

    if(firstvalPos > 0) {
        return str.slice(firstvalPos) + str.slice(0, firstvalPos) + 'ay'
    }
    return str + 'way';
}
translatePlgLatin("consonant");

// our fn to find the index, not using regX
function findFirstVowelPos(str) {
    //check
    for(let i=0; i<str.length; i++) {
        if('aeiou'.indexOf(str[i]) !== -1) {
            return i;
        }
    }
}