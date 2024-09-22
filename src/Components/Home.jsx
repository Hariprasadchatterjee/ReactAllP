import { useCustomBioHook } from "../Contaxt/DataHouse";

const Home = () => {
  const {miName,myAge} =  useCustomBioHook();
  return (
    <div>Hellow {miName } and i am {myAge} years old</div>
  )
}

export default Home