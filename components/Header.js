import Image from 'next/image'
import React, { useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-scroll'
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

import Logo from '../images/Logo.png'
import DE_Icon from '../images/flags/de.png';
import EN_Icon from '../images/flags/en.png';

function Header() {
    
    const [toggle, setToggle] = useState(false);
    const {t, i18n} = useTranslation();

    const toggleModal = () => {
        setToggle(!toggle);
     }

     const changeLanguage = (ln) => {
      return() => {
        i18n.changeLanguage(ln);
      }
    }
 

  return (
    <div className='font-dm'>
        <nav className='fixed w-full p-2 z-50 ' style={{backgroundColor: '#FCF8E8'}}>
              <div className='flex items-center justify-between'>
                 <div className='p-4 cursor-pointer drop-shadow-md'>
                    <Link activeClass="active" to="home" smooth="true"> <Image
                       priority
                       src={Logo}
                       height={60}
                       width={130}
                       alt="Portfolio Logo"
                      /></Link>
                 </div>
                 <div className='hidden md:flex space-x-14 text-xl' style={{color: '#DF7861'}}>
                     <Link activeClass="active" to="about" smooth="true" className='cursor-pointer hover:tracking-widest transition-all'>
                        {t('Header_1')}
                     </Link>
                     
                     <Link activeClass="active" to="skills" smooth="true" className='cursor-pointer hover:tracking-widest transition-all'>
                       {t('Header_2')}
                     </Link>
                     <Link activeClass="active" to="projects" smooth="true" className='cursor-pointer hover:tracking-widest transition-all'>
                        {t('Header_3')}
                     </Link>
                     <Link activeClass="active" to="contact" smooth="true" className='cursor-pointer hover:tracking-widest transition-all'>
                        {t('Header_4')}
                     </Link>
                 </div>
                 <div className='hidden md:block p-3 px-6 pt-2 text-lg' style={{color: '#fff'}}>

                  <div className='flex'>
             
                  <a href="https://drive.google.com/file/d/1o7uDB0SgTMPXLo42ziU8RbmTVDyCX085/view?usp=sharing" 
                  target='_blank' rel='noopener noreferrer'>
                    <button
                    className='px-8 py-2 rounded-full tracking-widest hover:scale-110 transition-all 
                     drop-shadow-md
                    ' style={{backgroundColor: '#DF7861'}}>
                        {t('Header_5')}
                    </button>
                    </a>
                        
                        <div className='ml-2 mt-3 cursor-pointer hover:scale-110 transition-all'>
                           <Image src={DE_Icon} onClick={changeLanguage('de')}  alt='Uebersetzen der Seite auf Deutsch'/>
                        </div>
                        <div className='ml-2 mt-3 cursor-pointer hover:scale-110 transition-all'>
                           <Image src={EN_Icon} onClick={changeLanguage('en')} alt='Uebersetzen der Seite auf Englisch'/>
                        </div>
                   </div>

                 </div>
                 {/* Mobile Menu */}
                 {
                    !toggle && (
                        <button id='menu-btn'
                        className='block hamburger md:hidden focus:outline-none'>
                           <HiMenuAlt3
                            style={{color: '#DF7861'}}
                            onClick={toggleModal}
                            className='text-3xl cursor-pointer'
                           />
                        </button>
                    )}
                    {toggle && (
                     <button id='menu-btn'
                        className='block hamburger md:hidden focus:outline-none'>
                           <AiOutlineClose
                            style={{color: '#DF7861'}}
                            onClick={toggleModal}
                            className='text-3xl cursor-pointer'
                           />
                        </button>
                    )}
                 
              </div>
              {
                    toggle && (
                      <div>
                          <div className='absolute flex flex-col items-center  self-end 
              py-8 mt-15 space-y-6 text-xl  sm:w-auto 
              sm:self-center left-6 right-6 drop-shadow-xl transition-all' style={{backgroundColor: '#FCF8E8',color: '#DF7861'}}>
                     <Link activeClass="active" to="about" smooth="true" className='cursor-pointer hover:tracking-widest transition-all'>
                     {t('Header_1')}
                     </Link>
                     <Link activeClass="active" to="skills" smooth="true" className='cursor-pointer hover:tracking-widest transition-all'>
                     {t('Header_2')}
                     </Link>
                     <Link activeClass="active" to="projects" smooth="true" className='cursor-pointer hover:tracking-widest transition-all'>
                     {t('Header_3')}
                     </Link>
                     <Link activeClass="active" to="contact" smooth="true" className='cursor-pointer hover:tracking-widest transition-all'>
                     {t('Header_4')}
                     </Link>
                        <div className='block p-3 px-6 pt-2 cursor-pointer'>
                        <a href="https://drive.google.com/file/d/1o7uDB0SgTMPXLo42ziU8RbmTVDyCX085/view?usp=sharing" 
                  target='_blank' rel='noopener noreferrer'>    
                        <button
                      className='px-8 py-2 rounded-full tracking-widest ' style={{backgroundColor: '#DF7861', color: '#fff'}}>
                          {t('Header_5')}
                    </button></a>
                    <div className='flex ml-2'>
                    <div className='ml-2 mt-3'>
                           <Image src={DE_Icon} onClick={changeLanguage('de')}/>
                        </div>
                        <div className='ml-2 mt-3'>
                           <Image src={EN_Icon} onClick={changeLanguage('en')}/>
                        </div>
                     </div>  
                        </div>
                          </div>
                      </div>
                    )}
        </nav>
    </div>
  )
}

export default Header