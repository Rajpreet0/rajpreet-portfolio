import Link from 'next/link';
import React from 'react';
function Custom404() {
  return (
        <div className='font-dm' style={{backgroundColor: '#fcf8e8'}}>
           <div className='flex flex-col justify-center items-center min-h-screen'>
              <h1 className='text-8xl font-bold tracking-widest' style={{color: '#df7861'}}>404</h1>
              <h2 className='uppercase tracking-wider text-lg' style={{color: '#df7861'}}>- Page not found -</h2>
              <div className='mt-8'>
                <Link href='/'><a className='text-white px-4 py-3 rounded-lg text-xl' style={{backgroundColor: '#93b4a0'}}>Go Home</a></Link>
              </div>
           </div>
        </div>
  )
}

export default Custom404