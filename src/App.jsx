import React, { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import FeaturedProjects from './components/FeaturedProjects'
import FeaturedReels from './components/FeaturedReels'
import Testimonials from './components/Testimonials'
import Faqs from './components/Faqs'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const [addActiveClass, setAddActiveClass] = useState(false)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  const getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const whereAmI = async () => {
    try {
      const pos = await getPosition();
      const { latitude: lat, longitude: lng } = pos.coords;

      const resGeo = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
      if (!resGeo.ok) throw new Error('Problem getting location data');

      const dataGeo = await resGeo.json();

      const res = await fetch(
        `https://restcountries.com/v2/alpha/${dataGeo.countryCode}`
      );
      if (!res.ok) throw new Error('Problem getting country');

      const data = await res.json();
      setLocation(`${dataGeo.city}, ${data.name}`);
    } catch (err) {
      setError(err.message);
    }
  };

  



  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    const handleClick = (e) => {
      e.preventDefault()
      const sectionID = e.currentTarget.getAttribute('href')
      const section = document.querySelector(sectionID)
      if(section) {
        section.scrollIntoView({
        behavior : 'smooth',
        block : 'start',
        inline : 'nearest'
      })}
    }

    links.forEach(link => link.addEventListener('click', handleClick))

    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick))
    }
  }, [])

  useEffect(() => {
    const header = document.querySelector('header')
    const heroSection = document.querySelector('#home')
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          header.classList.remove('sticky-header')
          if(showNav){
            setShowNav(false)
          } else{
            return showNav
          }
          if(addActiveClass){
            setAddActiveClass(false)
          } else {
            return addActiveClass
          }
        } else {
          header.classList.add('sticky-header')
        }
      })
    }, options)

   if(heroSection) observer.observe(heroSection)

    return  () => {
      if(heroSection) observer.unobserve(heroSection)
    }
  }, [])
  return (
    <div className=''>
      <Header showNav={showNav} setShowNav={setShowNav} addActiveClass={addActiveClass} setAddActiveClass={setAddActiveClass} location={location} error={error}/>
      <HeroSection onClick={() => whereAmI()} location={location}/>
      <AboutUs />
      <FeaturedProjects />
      <FeaturedReels />
      <Testimonials />
      <Faqs />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App