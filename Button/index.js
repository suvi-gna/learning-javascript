//events

const myFun = () =>
{
    //console.log("see u");
    let display=document.getElementById("display");
    //display.innerHTML="bye";
    
    display.innerHTML= display.innerHTML === "Hello...."? "bye" :"Hello...."
    if(display.innerHTML == "Hello....")
    {
            display.style.color="green";
    }
    else
    {
        display.style.color="red";
    }
    
};
