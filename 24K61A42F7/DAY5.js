console.log("Kusnuth")
//console.log(Kusnuth)
console.log(45)
console.log(false)
// let var const
const  a=10;
console.log(a)
//a=20;
{
    const b=20;
    console.log(20);
}
//console.log(b);
{
    var c=30;
    console.log(c)
}
console.log(c)
let d=40
console.log(d)
d="kusnuth"
console.log(d)
d=20
console.log(d)
d=5.7
console.log(d)
d=true
console.log(d)
var e=5.7
console.log(e)
e="kusnuth"
console.log(e)
e=5.7
console.log(e)
e=false
console.log(e)
let i=0;
do{
    console.log(i);
    i++
}while(i<=5)
    console.log("===========do while loop condition==============")
    let j=5;
    do{
        console.log(j);
        j++
    }while(j<=5)
        console.log("=======Array======")
        //array declaration 
        let arr=[10,"kusnuth",true,45.0,22,("🎁")];
        console.log(arr);
        for(let x of arr){
            console.log(x);
        }
        console.log("========objectt=========")
        let obj={
            "key":"value",
            "name":"kusnuth",
            "age":20,
            "city":"NDD"
        }
        for(let x in obj){
            console.log(x);
            console.log(obj[x]);
            console.log(x+":"+obj[x]);
        }
        var arrobj=[{"name":"kusnuth","age":26 },{"name":"choti","age":20}]
        for(let x of arrobj){
            console.log(x)
        }