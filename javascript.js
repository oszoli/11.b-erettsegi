function osszeg() {
    var sub1 = parseInt(document.getElementById("elso").value);
    var sub2 = parseInt(document.getElementById("masodik").value);
    var sub3 = parseInt(document.getElementById("harmadik").value);
    var sub4= parseInt(document.getElementById("negyedik").value);

    if(sub1>10 || sub2>10 || sub3>10 || sub4>10) {
        alert("Kérem a maximum pontszámnál (10) ne adjon meg többet!")
    }
    else {
        var osszeg = sub1 + sub2 + sub3 + sub4;
        document.getElementById("osszeg").innerHTML = osszeg+" pont";
    }
}
function jegy() {
    var sub1 = parseInt(document.getElementById("elso").value);
    var sub2 = parseInt(document.getElementById("masodik").value);
    var sub3 = parseInt(document.getElementById("harmadik").value);
    var sub4= parseInt(document.getElementById("negyedik").value);

    if(sub1>10 || sub2>10 || sub3>10 || sub4>10) {
        alert("Kérem a maximum pontszámnál (10) ne adjon meg többet!")
    }
    else {
        var osszeg = sub1 + sub2 + sub3 + sub4;
        if (osszeg>30) {
            document.getElementById("jegy").innerHTML = "Jeles - 5"
        }
        else if ( osszeg>24) {
            document.getElementById("jegy").innerHTML = "Jó - 4"
        }
        else if ( osszeg>18) {
            document.getElementById("jegy").innerHTML = "Közepes - 3"
        }
        else if ( osszeg>12) {
            document.getElementById("jegy").innerHTML = "Elégséges - 2"
        }
       else if (osszeg<12) {
           document.getElementById("jegy").innerHTML = "Elégtelen - 1"
       }
    }
}