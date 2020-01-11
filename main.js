let Heures = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
let afficheHeures = function (Heures) {
    let htmlHeures = ""
    Heures.forEach(tranchesHeures => {
        htmlHeures += "<tr> <td>" + tranchesHeures + "</td> </tr>"
    });
    return htmlHeures
}

let Jours = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
let AfficheJours = function (Jours) {
    let htmlJours = "<th>Heures</th>"
    Jours.forEach(nomJours => {
        htmlJours += "<th>" + nomJours + "</th>"
    });
    return htmlJours
}
$("#Heures").html(afficheHeures(Heures))
$("#Jours").html(AfficheJours(Jours))