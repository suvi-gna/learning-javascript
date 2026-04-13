var a=10;
var a=29;
console.log(a);



let c=32;
c=64;
console.log(c);


const b=44;
console.log(b);


//pattern
for(let i=0;i<5;i++)
{
    for(let j=0;j<=i;j++)
    {
            console.log("*");
    }
    console.log(" ");
}

// *
// * *
// * * *
// * * * *
// * * * * *

let k=10;
let l="10";
if(k===l)
{
    console.log(-1);
}
else{
    console.log(1);
}
if(a==b)
{
    console.log(-1);
}
else{
    console.log(1);
}



//Arrays

let user=[10,"hello",false,3.47,null,'bye'];

for(let i=0;i< user.length;i++)
{
    console.log(typeof user[i]);
}

//Array2

let userr=[10,20,30,40];

//userr.push("hi");  adds in last
//userr.pop();       removes last element
//userr.shift();     removes first element
//userr.unshift("suvi");  adds in first index




console.log(userr);



const obj=
{
    id:1,
    name:"guest",
    myData:[10,"hi","bye tata"]
}
console.log(obj);


obj.loc="hyd"

console.log(obj.loc);
console.log(obj.myData);
const user1=
[{
    id:1,
    name:"A",
    loc:"hyd"
},
{
    id:2,
    name:"B",
    loc:"vij",
},
]



console.log(user1[0]);
console.log(user1[1].name);


// for of --arrays
// for in --objects
for (const key in user1) {
    if (!Object.hasOwn(user1, key)) continue;
    
    const element = user1[key];
    console.log(element);
    
}
