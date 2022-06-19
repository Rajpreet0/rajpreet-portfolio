import Image from 'next/image';
import React from 'react';
import AboutProfile from '../images/about-profile.png';
import { useTranslation } from 'react-i18next';


function About() {
 
  const {t, i18n} = useTranslation();


  return (
    <div className='font-dm '> 
      <section id='about'>
        <div className='flex p-4 flex-col items-center justify-center min-h-screen w-full md:flex-row'>
            <div className='md:w-1/4'>
                 <h1 className='text-5xl uppercase tracking-wider font-bold ' style={{color: '#95b39e'}}>{t('About_titel')}</h1>
                 <h2 className='mt-2 uppercase text-xl tracking-widest' style={{color: '#df7861'}}>{t('About_subtitel')}</h2>
                 <p className='mt-2 text-lg'>
                    {t('About_Description_One')}
                 </p>
                 <p className='mt-4 text-lg'>
                   {t('About_Description_Two')}
                 </p>

              </div>
              <div className='mt-12 md:pl-20'>
                <Image
                src={AboutProfile}
                alt='Bild von Rajpreet Singh im Anzug'
                width={400}
                height={550}
                className='rounded-md'/>
              </div>
        </div>
      </section>
    </div>
  )
}

export default About

