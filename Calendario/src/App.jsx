import { useEffect, useState } from 'react';
import './App.scss';
import Label from './components/atoms/Label/Label';
import { DatePicker } from './components/organism/Datepicker/Datepicker';
import Table from './components/organism/Table/Table';

function App() {
    const [days, setDays] = useState();
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
        fetch(`http://localhost:4003/energy/${currentDate.getFullYear()}/${'March'}`)
            .then((res) => res.json())
            .then((data) => setDays(data.days))
            .catch((err) => console.error());
    }, []);
    return (
        <div className="app">
            <div className="header">
                <Label className="label__generic label__title" text="Gráficas"/>
                <DatePicker
                    initialDate={currentDate}
                    handleDateChange={date => setCurrentDate(date)}
                />
            </div>
            <div className="main">
                <Table days={days}/>
            </div>
            <code>{JSON.stringify(days)}</code>
        </div>
    );
}

export default App;
