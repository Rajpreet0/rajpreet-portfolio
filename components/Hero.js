import Image from 'next/image';
import React from 'react'
import ArtProfile from '../images/hero-profile-pic.png';
import Typewriter from 'typewriter-effect';
import {IoIosArrowDown} from 'react-icons/io';
import {GoMail} from 'react-icons/go';
import {BsTelephone} from 'react-icons/bs';
import {Link} from 'react-scroll'
import { useTranslation } from 'react-i18next';


function Hero() {
 
  const {t, i18n} = useTranslation();

  return (
    <>
        <section id='home' className='font-dm'>
          
       <div className=' flex  flex-col items-center w-full min-h-screen justify-center md:flex-row '>
          <div className='mt-32 md:w-1/3'>
            <h2 className='uppercase text-2xl tracking-widest md:text-3xl'> {t('Hero_titel')}</h2>
            <div className='text-3xl font-bold tracking-wider md:text-5xl md:uppercase'>
             <Typewriter
               options={{
                 strings: ['Rajpreet Singh'],
                 autoStart: true,
                 loop: true,
                 pauseFor: 50000
               }}
             />
            </div>
            <h3 className='uppercase tracking-widest text-xl mt-4 md:text-2xl'>
              <span style={{color: '#df7861'}}>{t('Hero_subtitel_one')}</span> & <span style={{color: '#93b4a0'}}>{t('Hero_subtitel_two')}</span></h3>
            <p className='mt-4 text-lg md:text-xl'>{t('Hero_description_one')} <br/> {t('Hero_description_two')}<br/> {t('Hero_description_three')}</p>
            <div className='flex mt-12 space-x-12'>
             <div className='border-2 p-2 rounded-full hover:scale-110 transition-all cursor-pointer' style={{borderColor: '#df7861'}}> 
               <a href='mailto:rajpreet.singh@gmx.de'><GoMail style={{width: 30, height: 30, color: '#df7861'}} /></a>
             </div>
             <div  className='border-2 p-2 rounded-full hover:scale-110 transition-all cursor-pointer' style={{borderColor: '#93b4a0'}}>
               <a href='tel:017647601638'><BsTelephone style={{width: 30, height: 30, color: '#93b4a0'}} /></a>
             </div>
            </div>
          </div>
          <div className='mt-20 md:drop-shadow-xl hover:scale-110 transition-all cursor-pointer md:'>
            <Image
            src={ArtProfile}
            alt='Profilbild von Rajpreet'
            width={350}
            height={350}/>
          </div>
          
          </div>
          
        
        <div className='w-full flex justify-center'>
         <Link activeClass="active" to="about" smooth="true"><IoIosArrowDown style={{width: 50, height: 50, cursor: 'pointer'}}/></Link>
        </div>
        </section>
      </>
  )
}

export default Hero
