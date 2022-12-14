import '../styles/globals.css'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return(  
  <div className='font-poppins'>
    <Component {...pageProps} />
    <Footer/>
  </div>
  )
}

export default MyApp
