
const validateForm= (event)=>
{
   
    event.preventDefault()

    let username=event.target.username.value
    let userpass=event.target.userpass.value

    let msg=document.getElementById("msg")

    if(username === "" && userpass === "")
    {
        msg.innerText="please enter username & userpass"
    }
    else if(username==="")
    {
    
        msg.innerText="plese enter your name"
    }
    else if(userpass === "" )
    {
        msg.innerText="please enter your password"
    }
    else if(username !== "" && userpass !== "")
    {
                msg.innerText="succ"
    }

}