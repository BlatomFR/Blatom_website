import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Team } from './components/Team'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { HashRouter as Router, Route } from 'react-router-dom'
import { CGU } from './components/cgu'
import { PrivacyPolicyEN } from './components/privacy_policy_en'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <Router >

      <Route exact path="/">
        <div>
          <Navigation />
          <Header data={landingPageData.Header} />
          {/* <Features data={landingPageData.Features} /> */}
          <About data={landingPageData.About} />
          <Services data={landingPageData.Services} />
          {/* <Gallery /> */}
          {/* <Testimonials data={landingPageData.Testimonials} /> */}
          <Team data={landingPageData.Team} />
          <Contact data={landingPageData.Contact} />
        </div>

      </Route>
      <Route exact path="/CGU/fr">
        <CGU />
      </Route>
      <Route exact path="/privacy/en">
        <PrivacyPolicyEN />
      </Route>

    </Router>
  )
}

export default App
