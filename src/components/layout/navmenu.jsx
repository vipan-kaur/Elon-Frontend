import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link } from 'react-router-dom';

const Navmenu = ({toggleMenu}) => {
  return (
    <>
    
    <div className='md:hidden flex z-20 text-black h-full w-full overflow-y-auto relative bg-gray-200'>

    <div className='flex p-4 w-full absolute bg-gray-200 '  onClick={toggleMenu}>
               <ul className='flex flex-col w-full ml-0 items-center gap-5 px-2 '>
                   <Link to="/login"> <li className='items-center w-full pt-4 text-lg pb-4 border-b border-gray-500'><PermIdentityIcon className="text-gray-600"/> Sign In/Register <span className='absolute right-6'><KeyboardArrowRightIcon/></span></li></Link>
                    <li className=' w-full p-2 '>MEN <span className='absolute right-6'><KeyboardArrowRightIcon/></span></li>
                    <li className=' w-full p-2  '>WOMEN <span className='absolute right-6'><KeyboardArrowRightIcon/></span></li>
                    <li className=' w-full p-2 '>KIDS & BABY <span className='absolute right-6'><KeyboardArrowRightIcon/></span></li>
                    <li className=' w-full p-2  '>HOME <span className='absolute right-6'><KeyboardArrowRightIcon/></span></li>
                    <li className='w-full  p-2 border-b border-gray-500'>DISCOVER <span className='absolute right-6'><KeyboardArrowRightIcon/></span></li>
                    
                    <li className='w-full px-2'>Wishlist</li>
                    <li className='w-full px-2 '>Stories</li>
                </ul>
    </div>
    </div>
    </>
  )
}

export default Navmenu