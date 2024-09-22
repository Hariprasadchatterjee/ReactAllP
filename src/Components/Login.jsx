// import { useRef } from "react"

const LoginForm = ({elementRef,label}) => {

  return (
   <>
   <label >{label}</label>
   <input type="text" ref={elementRef}   className="border-2 border-black"  />
   
   </>
  )
}

export default LoginForm