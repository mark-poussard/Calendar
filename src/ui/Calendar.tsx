import React from 'react';
import Month from '../model/time/Month';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import CalendarNavigation from './CalendarNavigation';
import './Calendar.css';

interface ICalendarProps{
    
}

interface ICalendarState{
    month : Month;
}

export default class Calendar extends React.Component<ICalendarProps, ICalendarState>{
    constructor(props : ICalendarProps){
        super(props);

        this.state = {
            month : Month.getCurrentMonth()
        }
    }

    render(){
        return (
            <div>
                <CalendarHeader month={this.state.month} />
                <CalendarBody month={this.state.month} />
                <CalendarNavigation month={this.state.month} setMonth={this.setMonth}/>
            </div>
        );
    }

    setMonth = (month : Month) => {
        this.setState({month});
    }
}