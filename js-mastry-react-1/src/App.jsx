import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const App = () => {
  return (<>
        <Card title="One"/>
        <Card title="Two"/>
        <Card title="Three"/>
      </>
  )
}

const Card = ({title})=> {return <h1>{title}</h1>}
export default App
