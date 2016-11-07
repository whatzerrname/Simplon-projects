// Je vais avoir besoin de savoir quoi ?


// Toutes ces variables sont des nombres j'ai donc besoin de les associés à un tableau avec les noms 
var name_month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
//je commence a dimanche car en javascript le dimanche est le premier jour de la semaine
var name_week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

// Maintenant c'est là qu'on rigole avec le nombre de jours dans le mois 
// j'ai créé une fonction pour faire le calcul mais j'aurais pu faire comme ça 
// var nbn_jours_in_month = new Date(today.getFullYear(), today.getMonth()+1, -1).getDate()+1;
function getNbJours(date){
    //je créé la date du dernier jours en allant vers la veille du premier jour du mois suivant et j'affiche le numéro du jour avec getDate()+1 (getDate commence a 0 donc il faut rajouter 1 pour avoir la bonne valeur)
    return new Date(date.getFullYear(), date.getMonth()+1, -1).getDate()+1;
}

function get_calendrier(year = -1, month = -1, day = -1){ //
    // le jour d'aujourd'hui
    //si aucune date n'est passé en par défaut on met la date d'aujourd'hui
    var today;
    if(year == -1 || month == -1 || day == -1){
        today = new Date(); // me renvoi le jour d'aujourd'hui
    } else {
        today = new Date(year, month, day);
    }
    
    // le mois en cours
    var actual_month = today.getMonth();
    // l'année en cours 
    var actual_year = today.getFullYear();
    // le jours d'ajourd'hui 
    var actual_day = today.getDate();

    // j'ai également besoin de savoir quel jours est le premier du mois 
    var first_day_in_month = new Date(actual_year, actual_month, "1");
    //la j'ai la date mais je veux le numero du jour
    var name_first_day_in_month = first_day_in_month.getDay();
    
    // on récupère le nombre de jours dans le mois
    var nbn_jours_in_month = getNbJours(today);
    
    // j'ai toutes mes variables de travail je vais pouvoir bouclé
    // sauf que je n'ai pas encore où je vais mettre mon calendrier
    
    var content_calendrier;
    
    // commençons par le commencement a savoir la création du tableau 
    //le \n permet de faire un saut de ligne dans le code pour qu'il soit plus lisible mais il ne sera pas visible dans le rendu final
    content_calendrier = "<table id='calendrier'>\n";
    // j'ai besoin d'une ligne
    content_calendrier += "<tr>\n";
    
    // la première ligne me permettra d'afficher le mois en cours
    content_calendrier += '<th colspan="7">';
    //si le mois actuel est janvier je dois dire au script qu'il passe à décembre et qu'il retire une année
    if(actual_month == 0) {
        content_calendrier += '<a href="#" onclick="javascript:get_calendrier('+(actual_year-1)+', 11, '+actual_day+')"> << </a>';
    }else{
        content_calendrier += '<a href="#" onclick="javascript:get_calendrier('+actual_year+', '+(actual_month-1)+', '+actual_day+')"> << </a>';
    }
    
    content_calendrier += name_month[actual_month] + " " +actual_year;
    
    //si le mois actuel est décembre je dois dire au script qu'il passe à janvier et qu'il ajoute une année
    if(actual_month == 11) {
        content_calendrier += '<a href="#" onclick="javascript:get_calendrier('+(actual_year+1)+', 0, '+actual_day+')"> >> </a>';
    }else{
        content_calendrier += '<a href="#" onclick="javascript:get_calendrier('+actual_year+', '+(actual_month+1)+', '+actual_day+')"> >> </a>';
    }
    
    content_calendrier += "</th>\n";
    
    //je ferme ma ligne
    content_calendrier += "</tr>\n";
    
    // je rajoute la ligne avec les jours de semaine 
    
     // j'ai besoin d'une ligne
    content_calendrier += "<tr>\n";
    
    // Première boucle :
    for (var jour in name_week){
        content_calendrier += "<th class='jsemaine'>"+name_week[jour]+"</th>\n";
    }
    
    //je ferme ma ligne
    content_calendrier += "</tr>\n";
    
     // j'ai besoin d'une ligne
    content_calendrier += "<tr>\n";
    
    //je rajoute des case vide sur la première ligne pour faire coincider le premier jour avec le bon jours de la semaine
    for(var i = 0 ; i < name_first_day_in_month; i++){
        //le &nbsp; n'est pas nécéssaire il s'agit juste du code html pour un espace histoire que la case ne soit pas vide
        content_calendrier += "<td>&nbsp;</td>\n";
    }
        
    
    //a ce moment, le premier jour du mois va être util
    // pour une variable i allant de 0 jusqu'au nombre de jours du mois plus le nombre de jours avant le premier alors je rajoute une case
    
    var maintenant = new Date();
    
    for(var i = 1; i <= nbn_jours_in_month  ; i++){
        // il faut que je teste si le jour que j'affiche est le jour d'aujourd'hui 
        // je dois tester le jour, le mois et l'année sinon j'aurais du rouge à chaque mois
        if(i == maintenant.getDate() && actual_month == maintenant.getMonth() && actual_year == maintenant.getFullYear()){
            content_calendrier += "<td class='now'>"+i+"</td>\n";
        } else {
            content_calendrier += "<td>"+i+"</td>\n";   
        }
        //j'ai besoin de faire des sauts de lignes
        //si une semaine est complète donc i+nombre de jour du mois précédent (name_first_day_in_month) est un multiple de 7 cela veux dire que la semaine est terminé et donc qu'il faut aller à la ligne
        if((i+name_first_day_in_month)%7 == 0){
            content_calendrier += "</tr>\n<tr>\n";
        }
    }
    //je ferme ma ligne
    content_calendrier += "</tr>\n";
    
    //il faut bien que j'integre mon calendrier dans mon html donc :
    document.getElementById("content_js").innerHTML = content_calendrier;
}

//j'appel ma fonction pour afficher le calendrier
get_calendrier()
0
