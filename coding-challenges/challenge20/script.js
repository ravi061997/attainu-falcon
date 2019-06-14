function Pangram(string){
    this.string = string.toLowerCase();
}

Pangram.prototype.isPangram = function() {

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
 
    var sentence = this.string;

    
    for (var i = 0; i < sentence.length; i++) {

        var num = alphabet.indexOf(sentence[i]);

        if (sentence[i] == alphabet[num]) {
            alphabet = alphabet.replace(sentence[i], '') 
        } 

    }

    if (alphabet.length == 0) {
        return true;    
    }
    else {
        return false;
    }
}
console.log(Pangram(" The quick brown fox jumps"));
