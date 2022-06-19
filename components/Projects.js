import React from 'react';
import { useTranslation } from 'react-i18next';

function Projects() {
  const {t, i18n} = useTranslation();
  return (
  <div className='font-dm'>  
   <section className='min-h-screen text-center' id='projects'>
     <h1 className=' text-center text-5xl font-bold uppercase tracking-wider' style={{color: '#95b39e'}}>{t('Projects_titel')}</h1> 
     <h2 className='mt-4 text-2xl uppercase' style={{color: '#df7861'}}>{t('Projects_subtitel')}</h2>
    <div className='min-h-screen flex justify-center items-center'>
       
        <div className='p-8 grid grid-cols-1 gap-16 justify-around md:grid-cols-2'>
            <div className='rounded-xl flex opacity-100 bg-gradient-to-r from-amber-600 to-amber-800 hover:scale-110 transition-all'>
               <div className='w-80 h-96 items-center justify-center flex-col flex text-center opacity-0 hover:opacity-100 transition-all'>
                 <h1 className='text-white font-bold tracking-wider text-2xl'>Gerberei</h1>
                 <p className='mt-4 text-white '>{t('Project_Card_1')}</p>
                 <a target="_blank" rel='noopener noreferrer' href='https://gerberei-vill.web.app/' 
                 className='p-2 mt-8 rounded-lg text-md drop-shadow-lg bg-white hover:scale-95'>{t('Project_Card_btn')}</a>
               </div>
            </div>
            
            <div className='rounded-xl flex opacity-100 bg-gradient-to-r from-cyan-300	 to-cyan-500	 hover:scale-110 transition-all'>
               <div className='w-80 h-96 items-center justify-center flex-col flex text-center opacity-0 hover:opacity-100 transition-all'>
                 <h1 className='text-white font-bold tracking-wider text-2xl'>SolarCentral</h1>
                 <p className='mt-4 text-white '>{t('Project_Card_2')}</p>
                 <a target="_blank" rel='noopener noreferrer' href='https://solarcentral.de/' 
                 className='p-2 mt-8 rounded-lg text-md drop-shadow-lg bg-white hover:scale-95'>{t('Project_Card_btn')}</a>
               </div>
            </div>

            <div className='rounded-xl flex opacity-100 bg-gradient-to-r from-rose-600 to-rose-800 hover:scale-110 transition-all'>
               <div className='w-80 h-96 items-center justify-center flex-col flex text-center opacity-0 hover:opacity-100 transition-all'>
                 <h1 className='text-white font-bold tracking-wider text-2xl'>Coaching</h1>
                 <p className='mt-4 text-white '>{t('Project_Card_3')}</p>
                 <a target="_blank" rel='noopener noreferrer' href='https://bettina-thuenemann.web.app/home' 
                 className='p-2 mt-8 rounded-lg text-md drop-shadow-lg bg-white hover:scale-95'>{t('Project_Card_btn')}</a>
               </div>
            </div>

            <div className='rounded-xl flex opacity-100 bg-gradient-to-r from-purple-600 to-purple-800 hover:scale-110 transition-all'>
               <div className='w-80 h-96 items-center justify-center flex-col flex text-center opacity-0 hover:opacity-100 transition-all'>
                 <h1 className='text-white font-bold tracking-wider text-2xl'>Honet</h1>
                 <p className='mt-4 text-white '>{t('Project_Card_4')}</p>
                 <a target="_blank" rel='noopener noreferrer' href='https://honet.page/'
                  className='p-2 mt-8 rounded-lg text-md drop-shadow-lg bg-white hover:scale-95'>{t('Project_Card_btn')}</a>
               </div>
            </div>

            <div className='rounded-xl flex opacity-100 bg-gradient-to-r from-zinc-600 to-zinc-800 hover:scale-110 transition-all'>
               <div className='w-80 h-96 items-center justify-center flex-col flex text-center opacity-0 hover:opacity-100 transition-all'>
                 <h1 className='text-white font-bold tracking-wider text-2xl'>Medium Clone</h1>
                 <p className='mt-4 text-white '>{t('Project_Card_5')}</p>
                 <a target="_blank" rel='noopener noreferrer' href='https://client-template-flame.vercel.app/' 
                 className='p-2 mt-8 rounded-lg text-md drop-shadow-lg bg-white hover:scale-95'>{t('Project_Card_btn')}</a>
               </div>
            </div>
            
            <div className='rounded-xl flex opacity-100 bg-gradient-to-r from-zinc-100	 to-zinc-300	 hover:scale-110 transition-all'>
               <div className='w-80 h-96 items-center justify-center flex-col flex text-center opacity-0 hover:opacity-100 transition-all'>
                 <h1 className='text-white font-bold tracking-wider text-2xl'>Worldwide Covid19 Tracker</h1>
                 <p className='mt-4 text-white '>{t('Project_Card_6')}</p>
                 <a target="_blank" rel='noopener noreferrer' href='https://covid-19-tracker-honet.web.app/'
                  className='p-2 mt-8 rounded-lg text-md drop-shadow-lg bg-white hover:scale-95'>{t('Project_Card_btn')}</a>
               </div>
            </div>

        </div>
        
    </div>
    <p className='text-center p-20 text-2xl uppercase tracking-widest' style={{color: '#df7861'}}>{t('Projects_endtitel')}</p> 
    </section>

</div>  
  )
}

export default Projects;