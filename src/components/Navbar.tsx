import React from 'react'
import {VscCoffee} from "react-icons/vsc"
const Navbar = () => {
  return (
    <div>
      <div className='bg-black'>
        <div>
            <VscCoffee className='px-10 bg-black'/>
            <p>Coffetto</p>
            {/*left side */}
        </div>
        <div>
            {/*right side */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
