import { useState } from "react"
import { useCustomBioHook } from "../Contaxt/DataHouse"


const InputData = () => {
  const [userData,setUserData]=useState({
    name:"",
    password:"",
  })
  const {setShowData} =useCustomBioHook()

  const handleUserData=(e)=>{
    const {name,value}=e.target;
    setUserData( (prev)=>({...prev,[name]:value}))
  }

  const handleFormData=(e)=>{
    e.preventDefault()
    setShowData(userData);
    
  }
  

  return (
    <>
    <form onSubmit={handleFormData}>
    <label htmlFor="">UserName</label>
    <input type="text" name="name" id=""  value={userData.name} onChange={(e)=>handleUserData(e)}/>
    <label htmlFor="">Password</label>
    <input type="text" name="password" id=""  value={userData.password} onChange={(e)=>handleUserData(e)}/>
    <button>Submit</button>
    </form>
     
    </>

  )
}

export default InputData