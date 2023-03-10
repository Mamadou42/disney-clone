import Brands from '@/components/Brands';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MoviesCollection from '@/components/MoviesCollection';
import ShowsCollection from '@/components/ShowsCollection';
import Slider from '@/components/Slider';
import { Movie } from '@/types/typing';
import { GetServerSideProps } from 'next';
import { Session } from 'next-auth';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';

interface Props {
  session: Session | null;
}

interface HomeProps {
  popularMovies: Movie[]
  popularShows: Movie[]
  top_ratedMovies: Movie[]
  top_ratedShows: Movie[]
}

export default function Home({
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
}: HomeProps) {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Disney Clone</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />
      {!session ? (
        <Hero />
      ) : (
        <main
          className='relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat 
          after:bg-fixed after:absolute after:inset-0 after:z-[-1]'
        >
          <Slider />
          <Brands />
          <MoviesCollection results={popularMovies} title="Popular Movies" />
          <ShowsCollection results={popularShows} title="Popular Shows" />
          <MoviesCollection results={top_ratedMovies} title="Top Rated Movies" />
          <ShowsCollection results={top_ratedShows} title="Top Rated Shows" />
        </main>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const session = await getSession(context);

  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    ),
  ]);
  const [popularMovies, popularShows, top_ratedMovies, top_ratedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      top_ratedMoviesRes.json(),
      top_ratedShowsRes.json(),
    ]);

  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    },
  };
};
