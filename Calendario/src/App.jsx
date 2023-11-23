import { useEffect, useState } from 'react';
import Datepicker from './components/organism/Datepicker/Datepicker';
import Table from './components/organism/Table/Table';
import Label from './components/atoms/Label/Label';
import './App.scss';

function App() {
  const [days, setDays] = useState();

  useEffect(() => {
    fetch(`http://localhost:${4003}/energy/${2025}/${'March'}`)
      .then((res) => res.json())
      .then((data) => setDays(data.days))
      .catch((err) => console.error());
  }, []);

  return (
    <div className='app'>
      <div className='header'>
        <Label className='label__title' text='Gráficas' />
        <Datepicker />
      </div>
      <div className='main'>
        <Table days={days} />
      </div>
      <code>{JSON.stringify(days)}</code>
    </div>
  );
}

export default App;
