import React, { useEffect, useState } from 'react';
import './App.scss';
import Label from './components/atoms/Label/Label';
import { DatePicker } from './components/organism/Datepicker/Datepicker';
import { TITLE_PAGE } from './constants'; 
import { getEnergy } from './services/index';
import Table from './components/organism/Table/Table';

function App() {
  const [days, setDays] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) {
      getEnergy(currentDate.getFullYear(), currentDate.getMonth())
        .then((data) => setDays(data.days))
        .catch((err) => console.error(err));
    } else {
      setIsInitialized(true);
    }
  }, [currentDate, isInitialized]);

  return (
    <div className='app'>
      <div className='header'>
        <Label className='label__generic label__title' text={TITLE_PAGE} />
        <DatePicker
          className='Datepicker'
          initialDate={currentDate}
          handleDateChange={(date) => setCurrentDate(date)}
        />
      </div>
      <div className='main'>
        <Table days={days} currentDate={currentDate} />
      </div>
      <code>{JSON.stringify(days)}</code>
    </div>
  );
}

export default App;
