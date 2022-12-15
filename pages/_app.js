import '../styles/globals.css'
import Footer from '../components/Footer'
import {AuthContext,AuthProvider} from '../context/AuthContext'


function MyApp({ Component, pageProps }) {
  return(  
  <div className='font-poppins'>
    <AuthProvider>
      <Component {...pageProps} />
      <Footer/>
    </AuthProvider>
  </div>
  )
}

export default MyApp
