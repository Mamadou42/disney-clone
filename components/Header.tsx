import Image from 'next/image';
import React from 'react';
import Logo from '../public/images/logo.svg';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header
      className='sticky bg-[#040714] top-0 flex 
      h-[72px] z-[1000] items-center px-10 md:px-12 md:pt-4'
    >
      <Image
        src={Logo}
        className='cursor-pointer'
        width={80}
        height={80}
        alt=''
        onClick={() => router.push('/')}
      />

      {session && (
        <div className='hidden md:flex ml-10 space-x-6 items-center'>
          <a href='#' className='header-link group'>
            <HomeIcon className='h-4' />
            <span className='span'>Home</span>
          </a>
          <a href='#' className='header-link group'>
            <MagnifyingGlassIcon className='h-4' />
            <span className='span'>Search</span>
          </a>
          <a href='#' className='header-link group'>
            <PlusIcon className='h-4' />
            <span className='span'>Watchlist</span>
          </a>
          <a href='#' className='header-link group'>
            <StarIcon className='h-4' />
            <span className='span'>Originals</span>
          </a>
          <a href='#' className='header-link group'>
            <Image
              src='/images/movie-icon.svg'
              width='20'
              height='20'
              alt='movies'
            />
            <span className='span'>Movies</span>
          </a>
          <a href='#' className='header-link group'>
            <Image
              src='/images/series-icon.svg'
              width='20'
              height='20'
              alt='series'
            />
            <span className='span'>Series</span>
          </a>
        </div>
      )}
      {!session ? (
        <button
          className='ml-auto uppercase border px-4 py-1.5 rounded font-medium 
        tracking-wide hover:bg-white hover:text-black transition-all duration-200'
          onClick={(e) => {
            signIn();
          }}
        >
          Login
        </button>
      ) : (
        <Image
          src={session.user?.image!}
          alt={`${session.user?.name}`}
          width={100}
          height={100}
          className='rounded-full ml-auto w-10 h-10 cursor-pointer'
          onClick={() => signOut()}
        />
      )}
    </header>
  );
}

export default Header;