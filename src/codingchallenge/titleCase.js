function titleCase(str) {
    var word = str.toLowerCase().split(" ");
    //console.log(word)
    for(var i=0; i<word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].slice(1)
    }
    return word.join(" ");
}

titleCase("i wanna be good at what i start learning")

//Sol. 2
function titleCase(str) {
    var word = str.toLowerCase().split(" "); 
    //array of words in lowerCase
    return word.map( eachWord => {
        return eachWord[0].toUpperCase() + eachWord.slice(1)
    }).join(" ")
}

titleCase("i wanna be good at what i start learning")