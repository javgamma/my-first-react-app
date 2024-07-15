import React from 'react'

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner,cssClass}) => {


    const backgroundColor = 
    cssClass === "green" ? "bg-[#4ca698] text-white"
    :cssClass === "gray" ? "bg-[#ededed]"
    :"bg-[#d9bc66]"
    
  
    return (
        <div className={`w-96 h-56 rounded-xl p-6 shadow-lg mx-auto ${backgroundColor}`}>
        <div className="flex justify-between items-start">
           <div className="text-2xl font-bold">{bank}</div>
           <img className="w-22 h-16" src={type === 'visa' ? 'https://static.vecteezy.com/system/resources/previews/020/975/570/non_2x/visa-logo-visa-icon-transparent-free-png.png':'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png'} alt={type} />
        </div>
        <div className="mt-8 text-xl tracking-wider">{number}</div>
        <div className="mt-4 flex justify-between items-center">
           <div>
              <div className="text-xs uppercase">Card Holder</div>
              <div>{owner}</div>
           </div>
           <div>
              <div className="text-xs uppercase">Expires</div>
              <div>{`${expirationMonth}/${expirationYear}`}</div>
           </div>
        </div>
     </div>
  )
}

export default CreditCard
