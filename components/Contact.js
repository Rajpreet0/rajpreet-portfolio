import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import ClipLoader from 'react-spinners/SyncLoader';

import {GoMail} from 'react-icons/go';
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai'
import { useTranslation } from 'react-i18next';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
 
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const color = useState('#95b39e');
  const [loading, setLoading] = useState(false);
 
  const {t, i18n} = useTranslation();

  function sendEmail(e){
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      'service_pedt4mt',
      'template_n28hqji',
      e.target,
      'user_wP6GbwapsaGkswHQQqxRz',
    ).then(res => {
       toast.success(`Die Email wurde erfolgreich verschickt. Wir werden uns melden!`);
       setName('');
       setSubject('');
       setEmail('');
       setMessage('');
       setLoading(false);
    }).catch(err => {
       toast.error(`Da hat etwas nicht geklappt`);
    });
  }

  return (
    <div className='font-dm'>
      <ToastContainer/>
       <section className='min-h-screnn text-center' id='contact'>
       <h1 className='w-full text-center text-5xl font-bold uppercase tracking-wider' style={{color: '#95b39e'}}>{t('Contact_title')}</h1> 
         <div className='min-h-screen '> 
           <div className='flex justify-around mt-24'>
           <div className='border-2   p-2 rounded-full hover:scale-110 transition-all cursor-pointer' style={{borderColor: '#df7861'}}> 
               <a href='mailto:rajpreet.singh@gmx.de'><GoMail style={{width: 30, height: 30, color: '#df7861'}} /></a>
             </div>
             <div  className='border-2 p-2 rounded-full hover:scale-110 transition-all cursor-pointer' style={{borderColor: '#93b4a0'}}>
               <a href='tel:017676729010'><BsTelephone style={{width: 30, height: 30, color: '#93b4a0'}} /></a>
             </div>
             <div  className='border-2 p-2 rounded-full hover:scale-110 transition-all cursor-pointer' style={{borderColor: '#df7861'}}>
               <a href='https://www.instagram.com/rajpreet1810/' target="_blank" rel='noopener noreferrer'><AiOutlineInstagram style={{width: 30, height: 30, color: '#df7861'}} /></a>
             </div>
           </div>

           <div className='flex flex-col w-full mt-24 md:flex-row'>
              <form onSubmit={sendEmail} className='md:w-7/12'>
              <div>

                <div className='flex w-full px-6'>

                  <div className='w-1/2 px-0.5'>

                     <input name='name' value={name} onChange={() => setName()} required className='apperance-none w-4/5 rounded-lg p-6 mb-3 leading-tight shadow-inner focus:outline-none focus:bg-white ' style={{backgroundColor: '#f9f1d2'}}
                     placeholder={t('Contact_form_name')}/>

                  </div>

                  <div className='w-1/2 px-0.5'>

                     <input name='subject' value={subject} onChange={() => setSubject()} required className='apperance-none w-4/5  rounded-lg p-6 mb-3 leading-tight shadow-inner focus:outline-none focus:bg-white ' style={{backgroundColor: '#f9f1d2'}}
                     placeholder={t('Contact_form_subject')}/>

                  </div>

                </div>

                <div className='px-6'>
                <input name='email' value={email} onChange={() => setEmail()} required className='apperance-none w-11/12  rounded-lg p-6 mb-3 leading-tight shadow-inner focus:outline-none focus:bg-white ' style={{backgroundColor: '#f9f1d2'}}
                     placeholder={t('Contact_form_email')}/>
                </div>
                
                <div className='px-6'>
                <textarea name='message' value={message} onChange={()=> setMessage()} required className='apperance-none w-11/12 h-80 no-resize rounded-lg p-6 mb-3 leading-tight shadow-inner focus:outline-none focus:bg-white ' style={{backgroundColor: '#f9f1d2'}}
                     placeholder={t('Contact_form_message')}/>
                </div>

                <input type='submit' className='mt-2 px-8 py-3 text-xl rounded-lg drop-shadow-md text-white hover:scale-110 transition-all' style={{backgroundColor: '#95b39e'}} value={t('Contact_form_send_btn')}></input>
               <div className='mt-4'> 
                <ClipLoader color={color}  size={10} loading={loading}/>
               </div> 
              </div>
              </form>
              <div className='p-4 md:w-5/12 md:mr-16'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42390.95330490302!2d8.627424493108284!3d49.99033283980677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd730e9f20ae5f%3A0x422435029b0a130!2s63225%20Langen%20(Hessen)!5e0!3m2!1sde!2sde!4v1670241448816!5m2!1sde!2sde" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
              className='rounded-lg text-center'></iframe>
              </div>
              
           </div>

         </div>
       </section>
    </div>
  )
}

export default Contact

