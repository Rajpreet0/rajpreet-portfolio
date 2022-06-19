import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {

  const {t, i18n} = useTranslation();
  return (
    <div>
      <Head>
        <title>Portfolio | Rajpreet  Singh Entwickler und Designer </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link rel='canonical' href='https://rajpreet.de'/>
        <meta name='Author' content='Rajpreet Singh'/>
        <meta
         name="description"
         content='Das Portfolio von Rajpreet Singh ein Entwickler und Designer aus Steinfurt, Borghorst'
         key="desc"/>
        <meta property='og:description' content='Portfolio - Rajpreet Singh Entwickler und Designer'/>
        <meta property='og:image' content='/favicon.ico'/>
        <meta property='og:locale'content='de_DE'/>
        <meta property='og:type' content='webseite'/>
        <meta property='og:url' content='https://rajpreet.de'/>
        <meta property='og:site_name' content='Rajpreet Singh'/>
        <meta property='twitter:card' content='/favicon.ico'></meta>
        <meta property='twitter:description' content='Portfolio - Rajpreet Singh Entwickler und Designer'></meta>
        <meta property='twitter:title' content='Portfolio | Rajpreet Singh '></meta>
        <meta name="revisit-after" content='5 days'/>
        <meta name='keywords' content='portfolio, rajpreet, entwickler, designer, borghorst, steinfurt, programmierer'/>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" />
      </Head>

 
       <Header/>
       <div className='min-h-screen'  style={{backgroundColor: '#FCF8E8'}}>
         <Hero/>
         <About/>
         <Skills/>
         <Projects/>
         <Contact/>
       </div>
       <Footer navigation_footer={t('Footer_navigation')} navigation_footer_link='/imprint'/>
    </div>
  )
}

export default Home
