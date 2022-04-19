function drawTable(){
    var dynamicTable = document.getElementById("dynamic-table");
    dynamicTable.classList.add('table','table-bordered','ml-auto','mr-auto','width-980','center','overflow-auto')
    var dynamicTableColumns = document.getElementById("table-columns-input").value; // Width should be the amount of columns
    var dynamicTableRows = document.getElementById("table-rows-input").value; //Length should be the amount of rows
    
    
    var dynamicTableOutput = document.createElement('table');
    
    for (let currentRow = 1; currentRow <= dynamicTableRows; currentRow++){
        let tr = document.createElement('tr');

        for(let currentColumn = 1; currentColumn <= dynamicTableColumns; currentColumn++){
            var td = document.createElement('td');

            td.innerHTML = `${currentRow},${currentColumn}`;

            tr.appendChild(td);
        }

        dynamicTableOutput.appendChild(tr);
    }

    dynamicTable.innerHTML = "";

    dynamicTable.appendChild(dynamicTableOutput);
}



var drawTableButton = document.getElementById("draw-table-button");

if(drawTableButton.addEventListener){
    drawTableButton.addEventListener("click", drawTable, false);
}
else if (drawTableButton.attachEvent){
    drawTableButton.attachEvent("onclick", drawTable);
}