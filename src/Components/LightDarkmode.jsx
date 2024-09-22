
import { useCustomBioHook } from "../Contaxt/DataHouse"


const LightDarkmode = () => {

  const {handleBall,isChecked}=useCustomBioHook();
  
  return (
    <div className={`flex items-center justify-center h-screen ${isChecked?"bg-[#f0f0f0]":"bg-[#000]"}`}>
        <div onClick={handleBall} className="parent w-[10rem] h-[3rem] rounded-3xl border-0 bg-slate-600   border-solid border-black shadow-2xl relative ">
          <span className={`absolute ball h-[2.2rem] w-[2.2rem] rounded-full bg-green-500 top-[0.4rem] left-[0.4rem] justify-center flex items-center text-white font-bold p-2 cursor-pointer ${isChecked?"translate-x-[7rem]":"translate-x-[0rem]"} transition-all duration-500`}>{isChecked?"On":"Off"}</span>
          
        </div>
    </div>
  )
}

export default LightDarkmode