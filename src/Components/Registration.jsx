


const BankingForm = ({elementRef,label}) => {
  return (
   <>
      <label >{label}</label>
   <input type="text" ref={elementRef}   name="fname" className="border-2 border-black"  />
   </>
  )
}

export default BankingForm