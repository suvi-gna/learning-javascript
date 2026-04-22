
const validateForm= (event)=>
{
   
    event.preventDefault()

    let username=event.target.username.value
    let userpass=event.target.userpass.value

    let msg=document.getElementById("msg")

    if(username === "" && userpass === "")
    {
        msg.innerText="please enter username & userpass"
        username.style.bordercolor="red";
        userpass.style.bordercolor="red"
    }
    else if(username==="")
    {
    
        msg.innerText="plese enter your name"
        username.style.bordercolor="red"
        userpass.style.bordercolor="red"
    }
    else if(userpass === "" )
    {
        msg.innerText="please enter your password"
        username.style.bordercolor="red"
        userpass.style.bordercolor="red"
    }
    else if(username !== "" && userpass !== "")
    {
                msg.innerText="succ"
                username.style.bordercolor="blue"
                userpass.style.bordercolor="blue"
    }

}