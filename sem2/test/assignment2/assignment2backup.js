function drawTable(){
    var dynamicTable = document.getElementById("dynamic-table");

    var dynamicTableColumns = document.getElementById("table-columns-input").value; // Width should be the amount of columns
    var dynamicTableRows = document.getElementById("table-rows-input").value; //Length should be the amount of rows

    var dynamicTableOutput = '<table class="table table-bordered ml-auto mr-auto width-980">';

    for (var i = 1; i <= dynamicTableRows; i++){
        dynamicTableOutput +="<tr>";
        for (var x = 1; x <= dynamicTableColumns; x++){
            dynamicTableOutput +="<td>" + i + "," + x + "</td>";
        }
        dynamicTableOutput += "</tr>"
    }
    dynamicTable.innerHTML = dynamicTableOutput + "</table>";
}


var drawTableButton = document.getElementById("draw-table-button");

if(drawTableButton.addEventListener){
    drawTableButton.addEventListener("click", drawTable, false);
}
else if (drawTableButton.attachEvent){
    drawTableButton.attachEvent("onclick", drawTable);
}