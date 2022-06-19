import Image from 'next/image'
import React from 'react'
import ReactLogo from '../images/icon/React.png';
import Next from '../images/icon/next-js.svg';
import JavaScript from '../images/icon/js-logo.png';
import Css from '../images/icon/css-logo.png';
import MongoDB from '../images/icon/mongodb-logo.png';
import Nodejs from '../images/icon/nodejs-logo.png';
import { useTranslation } from 'react-i18next';


function Skills() {
   const {t, i18n} = useTranslation();
  return (
    <div className='mt-8 min-h-screen'>
       <section id='skills'>
           <h1 className=' text-center text-5xl font-bold uppercase tracking-wider' style={{color: '#95b39e'}}>{t('Skills_titel')}</h1>
           <div className='p-5 flex flex-col items-center justify-center min-h-screen  md:flex-row md:justify-around '>
             <div  className='cursor-pointer text-center hover:scale-110 hover:font-bold transition-all mt-4' >
                <Image 
                 src={ReactLogo}
                 alt='React Logo'
                 width={80}
                 height={75}/>
                <p className='text-xl tracking-wide'>React/React-Native</p>
             </div>

             <div className='cursor-pointer text-center hover:scale-110 hover:font-bold transition-all mt-4'>
                <Image 
                 src={Next}
                 alt='Next.js Logo'
                 width={80}
                 height={75}/>
                <p className='text-xl  tracking-wide'>Next.js</p>
             </div>
  
             <div className='cursor-pointer text-center 
             hover:scale-110 hover:font-bold 
             transition-all mt-4'>
               <Image 
                src={JavaScript}
                alt='JavaScript Logo'
                width={80}
                height={75}/>
               <p className='text-xl  tracking-wide'>JavaScript</p>
            </div>

            <div className='cursor-pointer text-center hover:scale-110  hover:font-bold transition-all mt-4'>
               <Image 
                src={Css}
                alt='CSS Logo'
                width={80}
                height={75}/>
               <p className='text-xl  tracking-wide'>CSS</p>
            </div>

            <div className='cursor-pointer text-center hover:scale-110 hover:font-bold transition-all mt-4'>
               <Image 
                src={MongoDB}
                alt='MongoDB Logo'
                width={80}
                height={75}/>
               <p className='text-xl  tracking-wide'>MongoDB</p>
            </div>

            <div className='cursor-pointer text-center hover:scale-110 hover:font-bold transition-all mt-4'>
               <Image 
                src={Nodejs}
                alt='Nodejs Logo'
                width={110}
                height={75}/>
               <p className='text-xl  tracking-wide'>Node</p>
            </div>               

           </div>
       </section>
    </div>
  )
}

export default Skills