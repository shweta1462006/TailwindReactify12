import React from 'react'
import ClothsData from "./third45"


function Nav() {
  const datafilter = () => 
    { ClothsData.filter(ClothsData => ClothsData === dresses || kids || men); 
      console.log(datafilter) }
  return (
    <div>
       <div className='  mt-10 h-20  w-100 relative flex items-center justify-around list-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500   bg-gray-100'>
        <p className='text-white text-[50px]' >Our Collections</p>
        </div>
    </div>
  )
}

export default Nav;
      {/* {Object.entries(Datacategories).map(([keys, item]) => ( */}
        // <div class="m-4" key={keys}>
        //   <div class="mt-6  grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">

        //     {item.map((item) => (
        //       <div key={item.id} 
        //       > 
        //       <div class="group relative w-full rounded-md ">
        //           <img src={item.url} class="aspect-square w-full rounded-md h  bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-90"  /></div>
        //                  {/* <div class="mt-4 flex justify-between "> */}

        //          <h3 class="text-sm text-blue-700">
        //           <a href="#">
        //             <span aria-hidden="true" class="absolute inset-0"></span>
        //             {item.title}
        //           </a>
        //         </h3>
        //         <p class="mt-1 text-sm text-gray-500">{item.dress_name}</p>
        //         <p class="text-sm font-medium text-gray-900">${item.price}</p>
        //       </div>
        //               // </div>

        //     ))}
        //   </div>
          
      //  </div>
      {/* ))} */}
