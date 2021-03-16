// add students to database with name, age and grades
// make an average of the grades inputed
// delete the last student in the list on button click

var gpaTable = [];


function generateTable() {

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var math = document.getElementById('math').value;
    var english = document.getElementById('english').value;
    var history = document.getElementById('history').value;
    var coding = document.getElementById('coding').value; 
    var tBody = document.getElementsByClassName("tbody")[0];
    var frm = document.getElementById("submit-form")[0];

    if (name == "" || age == "" || math == "" || english == "" || history == "" || coding == "") {
        console.log("neev Values");
    } else {
            var row = document.createElement("tr");
        
            var cell = document.createElement("td");
            var cellText = document.createTextNode(name);
            cell.appendChild(cellText);
            row.appendChild(cell);
        
        
            var cell = document.createElement("td");
            var cellText = document.createTextNode(age);
            cell.appendChild(cellText);
            row.appendChild(cell);
        
        
            var cell = document.createElement("td");
            var cellText = document.createTextNode(math);
            cell.appendChild(cellText);
            row.appendChild(cell);
        
        
            var cell = document.createElement("td");
            var cellText = document.createTextNode(english);
            cell.appendChild(cellText);
            row.appendChild(cell);
        
        
            var cell = document.createElement("td");
            var cellText = document.createTextNode(history);
            cell.appendChild(cellText);
            row.appendChild(cell);
        
        
            var cell = document.createElement("td");
            var cellText = document.createTextNode(coding);
            cell.appendChild(cellText);
            row.appendChild(cell);
        
        
            var cell = document.createElement("td");
            var gpa = (Number(math) + Number(english) + Number(history) + Number(coding)) / 4;
            
            var cellText = document.createTextNode(gpa);
    
            cell.appendChild(cellText);
            row.appendChild(cell);
            

            tBody.appendChild(row);
        }

    document.getElementById('submit-form').reset();
}


function orderRows() {
    var table, i, x, y;
    table = document.getElementById("table");
    var switching = true;
        while(switching) {
            switching = false;
            var rows = table.rows;

            for(i = 1; i < (rows.length - 1); i++) {
                var shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[6].innerHTML;
                y = rows[i + 1].getElementsByTagName("TD")[6].innerHTML;
                if (x > y) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
              }
        }
}



function deleteRow() {
    var table = document.getElementById("table");
    var rowCount = table.rows.length;
    if(rowCount == 1) {
        alert("Nothing to delete")
    } else {
        table.deleteRow(rowCount - 1);
    }
    
}