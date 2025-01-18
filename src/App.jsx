import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import ContactsUs from './components/ContactsUs'
import Wave1 from './components/wave1.jsx'

const App = () => {
  return (
    <div>
      <Nav />
      <main className="smooth-scroll">
        <section id="home" >
          <Home />
        </section>
        <section id="contactus">
          <ContactsUs />
        </section>
      </main>
    </div>
  )
}

export default App;