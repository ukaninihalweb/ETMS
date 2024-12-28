import React, { useState } from "react";

const Signup= ({setScreen}) => {
    const [input, setInput] = useState({
        name : "",
        email : "",
        password : ""
    });

    const handleSubmit = () => {
        localStorage.setItem("user", JSON.stringify(input));
    };
    console.log(input)
    return(
        <>
            <div style={{height:"50vh"}}>
                
                <label htmlFor="">FirstName:</label>
                <input name="name" value={input.name} onChange={(e) => setInput({...input, [e.target.name] : e.target.value})} type="text" placeholder="Enter Your Name "/><br /> <br />
                <label htmlFor="">Email:</label>
                <input name="email" value={input.email} onChange={(e) => setInput({...input, [e.target.name] : e.target.value})} type="email" placeholder="Enter Your Email "/><br /> <br />
                <label htmlFor="">Password:</label>
                <input name="password" value={input.password} onChange={(e) => setInput({...input, [e.target.name] : e.target.value})} type="password" placeholder="Enter Your Password"/><br /> <br />
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={()=>setScreen("login")}>Sign in</button>
            </div>
        </>
    )
}
export default Signup