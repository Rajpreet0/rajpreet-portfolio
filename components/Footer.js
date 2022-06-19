import Image from 'next/image'
import React from 'react'
import Logo from '../images/Logo.png'
import {FiArrowUp} from 'react-icons/fi'
import Link from 'next/link'
import {animateScroll as scroll} from 'react-scroll';

function Footer(props) {
 
    const scrollToTop = () => {
        scroll.scrollToTop();
    }


  return (
    <div className='font-dm'>
      <footer style={{backgroundColor: '#DF7861'}}>
       <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>  
        <div className='flex flex-col-reverse mt-8 items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-center'>
               <div>
                 <Image src={Logo} width={100} height={50}  alt="Logo für Portfolio"/>
               </div>
        </div>
           <div className='flex flex-col space-y-3'> 
            <Link href={props.navigation_footer_link}><a className='text-white text-xl tracking-widest underline text-center'>{props.navigation_footer}</a></Link>
            <h3 className='text-white uppercase tracking-wider text-center'>Made with ❤️ by <span className='cursor-pointer hover:underline'><a href='https://www.honet.page'>Honet</a></span></h3>
           </div>
        <div className='flex flex-col justify-between'>
               <FiArrowUp className='bg-white rounded-lg m-2 p-2 cursor-pointer' style={{width: 35, height: 35}}
               onClick={() => scrollToTop()}/>
        </div>
       </div> 
      </footer>
    </div>
  )
}

export default Footer