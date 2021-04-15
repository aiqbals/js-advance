function translatePlgLatin(str) {
    //check
    let tst = str.split("");
    for(let e of tst) {
        if(e==='a' || e==='e'|| e==='i' || e==='o'|| e==='u')
        let cons = tst.splice(e,1)
        tst = tst.concat(cons) + 'ay'
        break
    }
    return  tst
}
translatePlgLatin("consonant");