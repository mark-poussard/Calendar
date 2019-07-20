import React from 'react';
import Month from '../model/time/Month';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';

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
                <CalendarHeader />
                <CalendarBody month={this.state.month} />
            </div>
        );
    }
}