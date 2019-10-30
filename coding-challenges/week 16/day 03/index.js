function atomCount (str) {
    var symbol = "", count = "", ch ="";
    var atoms = {};

    for(var i=0; i <  str.length; i++) {
        ch = str.charAt(i);
        if( ch >= "A" && ch <= "Z") {
            if(symbol !== "") {
                if(count == "") {count = "1"}
                atoms[symbol] = (atoms[symbol] || 0) + parseInt(count);
            }
            symbol = ch ; 
            count = "";
        }
        else if(ch >= "a" && ch <= "z") {
            symbol += ch;
        }
        else if(ch >= "0" && ch <= "9") {
            count += ch;
        }
        else {
            console.log("Invalid Character");
            break;
        }
    }
    if(count == "") { count = "1"};
    atoms[symbol] = (atoms[symbol] || 0) + parseInt(count);

    console.log(atoms);

}

atomCount("Fe2H3OH");