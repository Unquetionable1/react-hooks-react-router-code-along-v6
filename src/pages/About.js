import React from 'react'
import NavBar from '../components/NavBar'

export default function About() {
  return (
    <>
      <header>
        {/* Save space for NavBar */}
        <NavBar/>
      </header>
      <main>
        <h1>This is my about component!</h1>
      </main>
    </>
  )
}
