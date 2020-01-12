$(document).ready(function () {
    //Creer les cellules du tableau
    let cellulePlanning = function () {
        // Tableau des heures
        let Heures = ["8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h"]

        //Ecrire dans les celules (tbody)
        let htmlLigne = $("#Heures").html()
        for (let j = 0; j < 11; j++) {
            htmlLigne += "<tr>"
            for (let index = 0; index < 8; index++) {
                if (index == 0) {
                    htmlLigne += "<td>" + Heures[j] + "</td>"
                } else {
                    htmlLigne += "<td></td>"
                }
            }
            htmlLigne += "</tr>"
        }
        return htmlLigne
    }
    // Creation des jours (thead)
    let Jours = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
    // Afficher les jours et la jj/mm du jours
    let AfficheJours = function (Jours) {
        let htmlJours = "<th>Heures</th>"
        let dateAjd = new Date('August 30, 1975 23:15:30')
        let dateDuJours = new Date()
        Jours.forEach((nomJours, index) => {
            dateDuJours.setDate(dateAjd.getDay() + index)
            htmlJours += "<th>" + nomJours + " " + dateDuJours.getDate() + "/" + (dateDuJours.getMonth() + 1) + " </th>"
        });
        return htmlJours
    }
    // $("#Heures").html(afficheHeures(Heures))
    $("#Jours").html(AfficheJours(Jours))
    $("#Heures").html(cellulePlanning())
});