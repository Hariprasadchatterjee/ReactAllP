import { useRef } from "react"
import Uncontrolled from "./Login"
import BankingForm from "./Registration"



const ForwardRej = () => {
  const name=useRef(null)
  const password=useRef(null)
  const name2=useRef(null)
  const password2=useRef(null)
  const email=useRef(null)

   const handleForm=(e)=>{
    e.preventDefault();
    console.log(name.current.value);
    console.log(password.current.value);
    console.log(name2.current.value);
    console.log(password2.current.value);
    console.log(email.current.value);
   }
  return (
    <form action="" onSubmit={handleForm}>
   <Uncontrolled label="username"  elementRef={name} />
   <Uncontrolled label="password"  elementRef={password}/>

   <BankingForm label="username"  elementRef={name2}/>
   <BankingForm label="password"  elementRef={password2}/>
   <BankingForm label="email"  elementRef={email}/>
   <button>Submit</button>
   </form>
   
  )
}


export default ForwardRej