import { react } from 'react'
import Datepicker from './components/organism/Datepicker/Datepicker'
import Table from './components/organism/Table/Table'
import Label from './components/atoms/Label/Label'
import './App.scss'

function App() {

  return (
    <div className='app'>
      <div className='header'>
        <Label text='Graficas'/>
        <Datepicker/>
      </div>
      <div className='main'>
        <Table/>
      </div>
    </div>
  )
}

export default App
