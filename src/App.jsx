import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Freescan from './Pages/Freescan'
import Pricing from './Pages/Pricing'
import OurTeam from './Pages/OurTeam'
import Faq from './Pages/Faq'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import RouteChangeHandler from './Components/RouteChangeHandler'
import AnimatedBackground from './Components/AnimatedBackground'

import PenTesting from './Pages/Pricing/Pentesting'
import ThreatIntelligence from './Pages/Pricing/ThreatIntelligence'
import CyberMonitoring from './Pages/Pricing/CyberMonitoring'
import CyberEducation from './Pages/Pricing/CyberEducation'
import PhishingAttacks from './Pages/Pricing/PhishingAttacks'
import ScrollToTop from './Components/ScrollToTop'
import LoginPage from './Pages/Login'
import RequestAccessPage from './Pages/RequestAccess'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsOfService from './Pages/ServiceTerms'

function App() {
  return (
    <>
      <div className='overflow-hidden min-h-screen bg-black'>
        {/* Global Animated Background */}
        <AnimatedBackground />

        <BrowserRouter>
          <RouteChangeHandler />
          <Navbar/>
          <ScrollToTop/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/free-scan' element={<Freescan/>}/>
            <Route path='/pricing' element={<Pricing/>}></Route>
            <Route path='/our-team' element={<OurTeam/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='/terms-of-service' element={<TermsOfService/>}/>

            {/* --- 2. ADD THE NEW ROUTE --- */}
            <Route path='/request-access' element={<RequestAccessPage/>}/>

            {/* Pricing Routes */}
            <Route path='/pricing/pentesting' element={<PenTesting/>}/>
            <Route path='/pricing/threat-intelligence' element={<ThreatIntelligence/>}/>
            <Route path='/pricing/cyber-monitoring' element={<CyberMonitoring/>}/>
            <Route path='/pricing/cyber-education' element={<CyberEducation/>}/>
            <Route path='/pricing/phishing-attacks' element={<PhishingAttacks/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App