document.getElementById("heading1").innerHTML="DOM IS AWESOME";
let p = document.getElementById("paragraph1");
p.innerHTML="DOM is easy to learn";
function addRow()
{
    let table=document.getElementById("table1");
    let newrow=table.insertRow();
    let cell1=newrow.insertCell(0);
    let cell2=newrow.insertCell(1);
    let cell3=newrow.insertCell(2);
    cell1.innerHTML="choti";
    cell2.innerHTML=5;
    cell3.innerHTML="CSM";
}
addRow();
console.log(document)
