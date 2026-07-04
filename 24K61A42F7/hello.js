
function getGrade(marks){
if(marks>=90)
return 'A';
else if(75<=marks&&marks<=89)
return 'B';
else if(50<=marks&&marks<=74)
return 'c';
else
return 'Fail';
}
let marks=82;
let grade=getGrade(marks);
console.log("Marks:",marks);
console.log("Grade:",grade);




