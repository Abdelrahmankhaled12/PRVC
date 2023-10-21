"use client"

import { Contact, Download, Features, Gallery, Hero, Subscribe, Plans, Team, Animation, Header, Footer } from '@/components'
import { useEffect, useState } from 'react';

export default function Home() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1500);
  }, []);

  return (
    <>
      {
        showSpinner ?
          (
            <Animation />
          )
          : (
            <>
              <Header />
              <Hero />
              <Download />
              <Features />
              <Team />
              <Gallery />
              <Subscribe />
              <Plans />
              <Contact />
              <Footer />
            </>
          )
      }
    </>
  )
}
