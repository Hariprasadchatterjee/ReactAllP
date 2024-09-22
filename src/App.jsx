// import ControlledForm from "./Components/ControlledForm"

// import Uncontrolled from "./Components/Uncontrolled"
// import ForwardRej from "./Components/ForwardRej"
import About from "./Components/About";
import Home from "./Components/Home"
import InputData from "./Components/InputData";
import LightDarkmode from "./Components/LightDarkmode";
import Show from "./Components/Show";
import  BioProvider  from "./Contaxt/DataHouse"

export const App=()=>{
  
  return (

      <BioProvider>
      <Home/>
      <About/>
      <InputData/>
      <Show/>
      <LightDarkmode/>
      </BioProvider>
   
) ;   
  
};









