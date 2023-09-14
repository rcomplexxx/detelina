import Navbar from '../components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import '../styles/globals.css'

export default function Home({ Component, pageProps }) {
  return ( 
    <div className='componentWrapperDiv'>
  <Navbar></Navbar>
  
  <div className='componentWrapperDiv2'>
  <Component {...pageProps} />
  </div>
  <Footer/>
  </div>
  )
}
