import React from 'react';
import Month from '../model/time/Month';

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
        const daysOfTheMonth = this.props.month.getDays();
        for(let day of daysOfTheMonth){
            
        }
        return (
            <div></div>
        )
    }
}