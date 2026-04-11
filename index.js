//var a=10;
//var a=29;
//console.log(a);



//let c=32;
//c=64;
//console.log(c);


//const b=44;
//console.log(b);


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

let a=10;
let b="10";
if(a===b)
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