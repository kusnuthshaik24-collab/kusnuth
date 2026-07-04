let arr=[12,23,56,78,89,65]
for(let i=0;i<=5;i++){
    if(arr[i]%2==0){
        console.log(arr[i]+ " is even");
    }
    else{
        console.log(arr[i]+ " is odd");
    }
}

console.log("Total numbers:", arr.length);
arr.push(50);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(80);
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.indexOf(23));
console.log(arr.includes(56));
console.log(arr.join(", "));
arr.reverse();
console.log(arr);
arr.sort((a, b) => a - b);
console.log(arr);
let newArray = arr.slice(1, 4);
console.log(newArray);
arr.splice(2, 1, 25);
console.log(arr);