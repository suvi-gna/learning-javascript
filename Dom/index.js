//DOM in JS
//console.lod(document);
//console.log(document.body);


let obj=document.getElementById("suvi");
obj.innerText="<b> hello </b>"
obj.innerHTML="<b>bye</b>"



let para=document.getElementsByClassName("para");
let box=document.getElementsByClassName("box");
console.log(para);
console.log(box);

//it prints automatically vthut console.log
box[1].innerHTML="bye bye";
para[0].innerHTML="hellooooo";