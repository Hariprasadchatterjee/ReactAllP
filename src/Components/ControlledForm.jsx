import { useState } from "react";
import { useId } from "react"

const ControlledForm = () => {
  const uniqueId=useId();
  const [intVal,setIntVal]=useState({
    fname:"",
    password:"",
    
  });
 
  
  const handleFormData=(e)=>{
    const {value,name} =e.target;
    setIntVal( (prev)=>({...prev,[name]:value}))

  }
  const handleForm=(e)=>{
    e.preventDefault();
    console.log(intVal);

    setIntVal({ fname:"",
        password:"",} )
    
  }
  return (
   <>
   <form action="" onSubmit={handleForm}>
   <label htmlFor={uniqueId}>Harsha</label>
   <input type="text"  id={uniqueId} name="fname" className="border-2 border-black" value={intVal.fname} onChange={(e)=>handleFormData(e)}/>

   <label htmlFor={`${uniqueId}_password`}>Password</label>
   <input name="password" type="text"  id={`${uniqueId}_password`} className="border-2 border-green-500" value={intVal.password} onChange={(e)=>handleFormData(e)}/>
   <button>Submit</button>
   </form>
   </>
  )
}

export default ControlledForm