import React, { useEffect, useState } from "react";


const Login = ({setScreen}) => {
    const [input, setInput] = useState({
        email : "",
        password : "",
    });
    
    const handleLogin = () => {
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggeduser.email && input.password === loggeduser.password){
            setScreen("Home")
            localStorage.setItem("login" , true);
        }else{
            alert("email or password must wrong");
        }
    };
    
    
        const noLogin = () => {
    
            if(input.email !== localStorage.getItem("user")){
                alert("You need to Signup first");
            };
        }

    return(
        <>
        <div style={{height:"50vh"}}>
            <h1 style={{textAlign:"center"}}>Login here</h1>

            <form onSubmit={handleLogin} style={{display:'flex' , flexDirection:'column' , alignItems :"center" , justifyContent : "center"}}>

                <label htmlFor="">Email :</label>
                <input name="email" type="email" value={input.email} onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}/> <br /> <br />
                <label htmlFor="">Password:</label>
                <input name="password" type="password" value={input.password} onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}/> <br /> <br />

                <button onClick={noLogin}>Log in</button>
                <p>haven't an account ? <p onClick={()=>setScreen("signup")}>Signup</p></p>
            </form>
        </div>
        </>
    )
}
export default Login;