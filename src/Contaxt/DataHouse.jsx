
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

// 1st step
export const BioContext = createContext();

// 2nd step

 const BioProvider=({children})=>{
  const [showData,setShowData] =useState(null)

  const miName="Hari"
  
  const myAge=30
  const myFAge=32

  const [isChecked,setIsChecked]=useState(false)
  const handleBall=()=>{
    setIsChecked((prev)=>(prev==false ? true : false));
  }

  return <BioContext.Provider value={{miName,myAge,hrsName,myFAge,setShowData,showData,handleBall,isChecked}}>
    {children}
  </BioContext.Provider>
}

export const useCustomBioHook=()=>{
  return useContext(BioContext)
}
export default BioProvider;