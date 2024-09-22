
import { useCustomBioHook } from "../Contaxt/DataHouse";


const About = () => {
  const {hrsName,myFAge} =  useCustomBioHook();
  return (
    <div>Hellow {hrsName } and i am {myFAge} years old</div>
  )
}

export default About