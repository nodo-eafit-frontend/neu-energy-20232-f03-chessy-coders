import { react } from 'react'
import Datepicker from './components/organism/Datepicker/Datepicker'
import Table from './components/organism/Table/Table'
import './App.scss'

function App() {

  return (
    <div className='app'>
      <div className='header'>
        <Datepicker/>
      </div>
      <div className='main'>
        <Table/>
      </div>
    </div>
  )
}

export default App
