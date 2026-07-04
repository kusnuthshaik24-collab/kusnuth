var prices=[200,300,150,400];
let total=0;
for (let i=0;i<=3;i++)
    total +=prices[i];
if (total >1000)
    Discount=total*0.10;
let finalamount=total-Discount;
console.log("Total: ",total);
console.log("Discount: ",Discount);
console.log("Final Amount: ",finalamount);