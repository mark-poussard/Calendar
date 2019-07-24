import React from 'react';
import Day from '../model/time/Day';

interface ICalendarBlockProps{
    day : Day;
}

interface ICalendarBlockState{

}

export default class CalendarBlock extends React.Component<ICalendarBlockProps, ICalendarBlockState>{
    constructor(props : ICalendarBlockProps){
        super(props);

        this.state = {};
    }

    render(){
        const todayClassName = (this.props.day.isToday()) ? "today" : "";

        return (
            <div className={`calendar-grid-item calendar-block ${todayClassName}`}>
                {this.props.day.asNumber()}
            </div>
        );
    }
}