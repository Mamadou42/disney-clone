import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <section>
      <Head>
        <title>Log In | Disney+</title>
        <link rel='icon' href='favicon.svg' />
      </Head>
      <div className='relative min-h-[calc-(100vh-72px)'>
        <Image
          src='/images/hero-background.jpg'
          width={200}
          height={160}
          sizes='(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw'
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          alt='hero'
        />
      </div>
      <div className='flex justify-center items-center'>
        <div
          className='absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm
        mx-auto p-8 -mt-16'
        >
          <Image
            src='/images/cta-logo-one.svg'
            width='600'
            height='150'
            style={{ objectFit: 'contain' }}
            alt='cta'
          />
          <button
            className='bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded 
          hover:bg-[#0465ee]'
          >
            Get all there
          </button>
          <p className='text-xs text-center'>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $
          </p>
          <Image
            src='/images/cta-logo-two.png'
            width={200}
            height={160}
            sizes='(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw'
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            alt='cta-logo'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
