let Mois = ["rgkroj" , " bjeif"]
let afficheMois = function (Mois) {
    let htmlMois = ""
    Mois.forEach(nomMois => {
        htmlMois += nomMois
    });
    return htmlMois
}

let Heures = ["Heures :", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
let afficheHeures = function (Heures) {
    let htmlHeures = ""
    Heures.forEach(tranchesHeures => {
        htmlHeures += "<td>" + tranchesHeures + "</td>"
    });
    return htmlHeures
}

let Jours = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
let AfficheJours = function (Jours) {
    let htmlJours = ""
    Jours.forEach(nomJours => {
        htmlJours += "<th>" + nomJours + "</th>"
    });
    return htmlJours
}
$("#Heures").html(afficheHeures(Heures))
$("#Jours").html(AfficheJours(Jours))