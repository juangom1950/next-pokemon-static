import { FC } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';

interface Props {
  title?: string;
}

// Here we get the specific url dinamically
// if we are at he server it is going to be empty, if we are loccally it is 
// going to give us the path
const origin = (typeof window === 'undefined') ? '' : window.location.origin;


export const Layout: FC<Props> = ({ children, title }) => {


  return (
      <>
        <Head>
            <title>{ title || 'PokemonApp' }</title>
            <meta name="author" content="Fernando Herrera" />
            <meta name="description" content={`Información sobre el pokémon ${ title }`} />
            <meta name="keywords" content={ `${ title }, pokemon, pokedex`} />

            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />

        </Head>
      
        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
      
      </>
  )
};
