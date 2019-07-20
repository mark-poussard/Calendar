import React from 'react';
import DaysLegend from './DaysLegend';
import CurrentMonth from './CurrentMonth';
import Month from '../model/time/Month';

interface ICalendarHeaderProps{
    month : Month;
}

export default class CalendarHeader extends React.Component<ICalendarHeaderProps>{
    constructor(props:ICalendarHeaderProps){
        super(props);
    }

    render(){
        return (
            <div className={`calendar-header`}>
                <CurrentMonth month={this.props.month} />
                <DaysLegend />
            </div>
        );
    }
}