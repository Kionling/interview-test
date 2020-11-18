var vowelChecker = function(S){
    var result = "";
    for(var i = 0; i<S.length; i++){
        if(S[i] !== "a" && S[i] !== "e" && S[i] !== "i" && S[i] !== "o" && S[i] !== "u" ){
            result += S[i]
        }
    }
    console.log(result)
    return result
    
}

vowelChecker("maybe")