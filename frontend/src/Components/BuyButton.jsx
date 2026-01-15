import React from 'react'

function BuyButton(props) {
  return (
    <div>
      <button className={`cursor-pointer text-[1.39vh] p-[1.1022167487684729vh_2.8167487684729062vh_1.2246305418719212vh_2.8167487684729062vh] rounded-full font-bold bg-transparent text-[#000] hover:bg-[#000] hover:text-[#fff] transition border-[0.5px] border-[#000] ${props.className || ''}`}>
          {props.Name}
      </button>
    </div>
  )
}

export default BuyButton