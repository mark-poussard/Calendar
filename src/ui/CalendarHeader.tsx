import React from 'react';
import DaysLegend from './DaysLegend';
import CurrentMonth from './CurrentMonth';
import Month from '../model/time/Month';
import CalendarNavigation from './CalendarNavigation';

interface ICalendarHeaderProps{
    month : Month;
    setMonth : (month : Month) => void;
    monthColor : string;
}

export default class CalendarHeader extends React.Component<ICalendarHeaderProps>{
    constructor(props:ICalendarHeaderProps){
        super(props);
    }

    render(){
        return (
            <div className={`calendar-header`}>
                <CalendarNavigation month={this.props.month} setMonth={this.props.setMonth}/>
                <CurrentMonth month={this.props.month} />
                <DaysLegend monthColor={this.props.monthColor}/>
            </div>
        );
    }
}