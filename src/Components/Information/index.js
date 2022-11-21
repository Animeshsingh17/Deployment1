import React from "react";
import Component1 from "../Component1";

function Information() {
    // const [name,setName]=useState("Animesh");
    const handleSubmit = ()=>{
console.log("Hi Submit")
    }
    return(
    <div>
    <div style={{ display: "flex", alignitems: "center" }}>
      <h1>First name</h1>
      <input label="fname"  placeholder="Animesh Singh"/>
    </div>
    <div>
      <h1>Last Name</h1>
      <input label="lname" />
    </div>
    <div>
      <Component1 name="Form" />
    </div>
    <button onClick={handleSubmit}>Submit</button>
    
    <p>Hello Form is Submitted </p>
  </div>)
}

export default Information;
