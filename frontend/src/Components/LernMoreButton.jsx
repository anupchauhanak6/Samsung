import React from 'react'

function LernMoreButton(props) {
  return (
    <div>
        <button className="cursor-pointer relative text-white font-semibold after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:left-0 after:bottom-[calc(var(--spacing)*-0.61)] after:transition-all after:duration-300 hover:after:w-full underline decoration-1 underline-offset-8 hover:no-underline">
            {props.Name}
          </button>
    </div>
  )
}

export default LernMoreButton