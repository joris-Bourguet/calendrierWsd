let Mois = ["1" , "1" , "1" , "1" , "1" , "1" , "1" , "1"]

let afficheMois = function(Mois) {
    let htmlMois = ""
    Mois.forEach(nomMois => {
        htmlMois += "<td>" + nomMois + "</td>"
    });
    return htmlMois
}
$("#Mois").html(afficheMois(Mois))