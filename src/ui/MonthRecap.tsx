import React from 'react';
import DataStore from '../business/data/DataStore';
import Month from '../model/time/Month';
import './MonthRecap.scss';
import Entry from '../model/data/Entry';

interface IMonthRecapProps {
    month : Month;
}

const MonthRecap : React.FC<IMonthRecapProps> = props => {
    const entries = DataStore.getEntriesForMonth(props.month);
    var list : Entry[][] = [];
    for (let i = 0; i < entries.length / 3; i++) {
        list.push(entries.slice(i*3, i*3+3));
    }
    return (
        <div className={'month-recap'}>
            {list.map(v => 
                <div className={`month-recap-group`}>
                    {v.map(t =>
                        <div className={'month-recap-entry'}>
                            <div className={`left`}>{getDateWithFormat(t.startDate)} - {getDateWithFormat(t.endDate)}</div> 
                            <div className={`right`}>{t.location.toUpperCase()}</div>
                        </div>)}
                </div>)}
        </div>
    );
}

const getMonth = (date : Date) => {
    var month = date.getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    }
    return `${month}`;
}

const getDay = (date : Date) => {
    var day = date.getDate();
    if (day < 10) {
        return `0${day}`;
    }
    return `${day}`;
}

const getDateWithFormat = (date : Date) => {
    return `${getDay(date)}/${getMonth(date)}`;
 }

export default MonthRecap;