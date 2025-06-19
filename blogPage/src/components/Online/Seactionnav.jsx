import React from 'react'

function nav() {
  return (
    <div>
      <div className=' mt-10 h-20  w-100 relative flex items-center justify-around list-none hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500   bg-gray-100'>
        <li class="hover:bg-pink-500 hover:text-white px-4 py-2 cursor-pointer"><a>Women</a></li>
        <li class="hover:bg-pink-500 hover:text-white px-4 py-2 cursor-pointer"><a>Men</a></li>
        <li class="hover:bg-pink-500 hover:text-white px-4 py-2 cursor-pointer"><a>Girl</a></li>
        <li class="hover:bg-pink-500 hover:text-white px-4 py-2 cursor-pointer"><a>Boy</a></li>
        <li class="hover:bg-pink-500 hover:text-white px-4 py-2 cursor-pointer"><a>Footwear</a></li></div>

    </div>
  )
}

export default nav;
