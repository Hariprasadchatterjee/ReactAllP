import { useCustomBioHook } from "../Contaxt/DataHouse"


const Show = () => {
  const {showData} =useCustomBioHook()
  
    if(showData) return <div>My Profile name {showData.name}</div>
    
     return <h1>Error Data is not there!!</h1>
}

export default Show