import Table from './components/organism/Table/Table';
import { useEffect, useState } from 'react';
import './App.scss';
import Label from './components/atoms/Label/Label';
import { DatePicker } from './components/organism/Datepicker/Datepicker';
import { TITLE_PAGE } from './constants';

function App() {
  const [days, setDays] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    // TODO: Pasasrlo a un método aparte
    fetch(`http://localhost:4003/energy/${currentDate.getFullYear()}/${currentDate.getMonth()}`)
      .then((res) => res.json())
      .then((data) => setDays(data.days))
      .catch((err) => console.error(err));
  }, []);

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
        <Table days={days} month={currentDate.getMonth()} />
      </div>
      <code>{JSON.stringify(days)}</code>
    </div>
  );
}

export default App;
