import React from 'react';
import Month from '../model/time/Month';
import Day, { Days } from '../model/time/Day';
import CalendarLine from './CalendarLine';
import EmptyCalendarLine from './EmptyCalendarLine';

interface ICalendarBodyProps{
    month : Month;
}

interface ICalendarBodyState{

}

export default class CalendarBody extends React.Component<ICalendarBodyProps, ICalendarBodyState>{
    constructor(props : ICalendarBodyProps){
        super(props);

        this.state = {};
    }

    render(){
        const lines : JSX.Element[] = [];
        let currentLine : Day[] = [];
        let keyCounter = 0;
        const daysOfTheMonth = this.props.month.getDays();
        for(let day of daysOfTheMonth){
            currentLine.push(day);
            if(day.getDayOfTheWeek() === Days.getLastDayOfWeek()
                || day.isLastOfMonth()){
                lines.push(<CalendarLine key={`CALENDAR_LINE_${keyCounter++}`} days={currentLine}/>)
                currentLine = [];
            }
        }

        if (lines.length < 6) {
            lines.push(<EmptyCalendarLine/>)
        }
        return (
            <div className={`calendar-body`}>
                {lines}
            </div>
        )
    }
}