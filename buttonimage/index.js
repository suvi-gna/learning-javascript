
let isShow=true;
const showImage = () =>
{
    let display=document.getElementById("display");
    if(isShow)
    {
        display.src="https://images.unsplash.com/photo-1530092285049-1c42085fd395?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D";
        isShow=false;
    }
    else
    {
        display.src="https://media1.tenor.com/m/Io0g8LOf8nMAAAAC/dog-awkward.gif";
        isShow=true;
    }
};