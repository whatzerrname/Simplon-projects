
<!DOCTYPE>
<html>
    <head>
        <meta charset="utf-8" />
        <title>On avance avec le javasript</title>
    </head>
    <body>
        <div id="content_js">
        </div>

        <p>HELLO</p>
    </body>
</html>


<script>
    // Je vais avoir besoin de savoir quoi ?
    //Calc de Remi


    // All of these vars are numbers. I need to associate these to an array with the names
    var name_month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //I start at Sunday because in JS Sunday is the first day of the week
    var name_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // I created a function to do the calculation but I could have done it this way ...
    // var nm_days_in_month = new Date(today.getFullYear(), today.getMonth()+1, -1).getDate()+1;
    function getNmDays(date){
        //I created the date of the last days by going to the previous day of the first day of next month and I show the number of the day with getDate()+1 (getDate starts at 0 so I must add 1 to have the correct value)
        return new Date(date.getFullYear(), date.getMonth()+1, -1).getDate()+1;
    }

    function get_calendar(year = -1, month = -1, day = -1){ //
        // Today's DATE
        //If no DATE is passed in, by default we put today's DATE
        var today;
        if(year == -1 || month == -1 || day == -1){
            today = new Date(); // Sends me today's DATE
        } else {
            today = new Date(year, month, day);
        }

        // Today's MONTH
        var actual_month = today.getMonth();
        // Today's YEAR
        var actual_year = today.getFullYear();
        // Today's DAY
        var actual_day = today.getDate();

        // I need to know which DAYS are the first DAYS of the MONTH
        var first_day_in_month = new Date(actual_year, actual_month, "1");
        //    //I have the DATE but I need the number of the DAY
        var name_first_day_in_month = first_day_in_month.getDay();

        // We take the number of DAYS in the MONTH
        var nm_days_in_month = getNmDays(today);

        // I have all of my vars I need to loop
        // But I don't know where I will put my calendar yet..

        var content_calendar;

        // We will start by creating a table.
        //The \n lets us break the line in the code to be more lisible
        content_calendar = "<table id='calendrier'>\n";
        // I need a line
        content_calendar += "<tr>\n";

        // The first line permets me to show the current MONTH
        content_calendar += '<th colspan="7">';
        //If the current month is January, I have to tell the script that December is finished and to start a new YEAR
        if(actual_month == 0) {
            content_calendar += '<a href="#" onclick="javascript:get_calendar('+(actual_year-1)+', 11, '+actual_day+')"> << </a>';
        }else{
            content_calendar += '<a href="#" onclick="javascript:get_calendar('+actual_year+', '+(actual_month-1)+', '+actual_day+')"> << </a>';
        }

        content_calendar += name_month[actual_month] + " " +actual_year;

        //If the current month is December, I have to tell the script that is changes to January and to add a YEAR
        if(actual_month == 11) {
            content_calendar += '<a href="#" onclick="javascript:get_calendar('+(actual_year+1)+', 0, '+actual_day+')"> >> </a>';
        }else{
            content_calendar += '<a href="#" onclick="javascript:get_calendar('+actual_year+', '+(actual_month+1)+', '+actual_day+')"> >> </a>';
        }

        content_calendar += "</th>\n";

        //I close my line
        content_calendar += "</tr>\n";

        // I add the line with the DAYS of the WEEK

        // I need a line
        content_calendar += "<tr>\n";

        // First loop :
        for (var day in name_week){
            content_calendar += "<th class='jsemaine'>"+name_week[day]+"</th>\n";
        }

        //I close my line
        content_calendar += "</tr>\n";

        // I need a line
        content_calendar += "<tr>\n";

        //I add empty cases in the first line to coincide the first DAY with the correct DAYS of the WEEK
        for(var i = 0 ; i < name_first_day_in_month; i++){
            //The &nbsp; is to add a space in HTML so it is not empty..
            content_calendar += "<td>&nbsp;</td>\n";
        }


        // Now, the first DAY of the MONTH will be useful
        // for var i going from 0 up to the number of DAYS of the MONTH plus the number of DAYS before the first in which I add a case

        var now = new Date();

        for(var i = 1; i <= nm_days_in_month  ; i++){
            // I must test if the DAY that I show is today's DATE
            // I must test the DAY, MONTH and YEAR otherwise I should have had red at each MONTH
            if(i == now.getDate() && actual_month == now.getMonth() && actual_year == now.getFullYear()){
                content_calendar += "<td class='now'>"+i+"</td>\n";
            } else {
                content_calendar += "<td>"+i+"</td>\n";
            }
            // I need to jump lines..
            // If a week is complete, i+nombre de jour du mois précédent (name_first_day_in_month) est un multiple de 7 cela veux dire que la semaine est terminé et donc qu'il faut aller à la ligne
            if((i+name_first_day_in_month)%7 == 0){
                content_calendar += "</tr>\n<tr>\n";
            }
        }
        // I close my line
        content_calendar += "</tr>\n";

        // I must integrate my calendar in my HTML :
        document.getElementById("content_js").innerHTML = content_calendar;
    }

    //I call my function to show the calendar
    get_calendar()
    0
</script>
