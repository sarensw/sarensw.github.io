import React from 'react'
import Noise from './components/Noise'
import Link from './components/Link'

const App = _ => {
  return (
    <>
      <div className='grid grid-cols-1 place-items-center justify-items-center px-8 py-8'>
        <div
          className='container md:max-w-md shadow rounded-lg bg-white'
        >
          <div
            className='px-12 py-12 text-center flex flex-col items-center relative'
            style={{
              background: 'linear-gradient(to right top, #71B280, #134E5E)'
            }}
          >
            <img src='/img/stephan.jpeg' className='rounded-full h-32 z-20' />

            <h1 className='text-4xl text-white font-bold mt-5 z-20'>Stephan Arenswald</h1>

            <div className='mt-5 text-white z-20'>Tried to make many products. Failed on all of them. Never gonna give up 🚀 | Currently working &amp; learning on @scrollytics | #BuildInPublic</div>

            <Noise />
          </div>
          <div className='p-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-900 text-base z-10'>
            <Link title='Twitter' link='https://twitter.com/sarensw' img='/img/twitter.svg' />
            <Link title='Instagram' link='https://instagram.com/sarensw' img='/img/instagram.svg' />
            <Link title='LinkedIn' link='https://linkedin.com/in/stephanarenswald/' img='/img/linkedin.svg' />
            <Link title='wip.co' link='https://wip.co/@sarensw' img='/img/wipco.svg' />
            <Link title='Makerlog' link='https://getmakerlog.com/@sarensw' img='/img/makerlog.svg' />
            <Link title='Indie Hackers' link='https://www.indiehackers.com/sarensw' img='/img/indiehackers.svg' />
            <Link title='GitHub' link='https://github.com/sarensw' img='/img/github.svg' />
            <Link title='Product Hunt' link='https://www.producthunt.com/@sarensw' img='/img/producthunt.svg' />
            <Link title='eMail' link='mailto:stephan@sarensw.com' img='/img/email.svg' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
