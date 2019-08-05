import React from 'react';
import Day from '../model/time/Day';
import DataStore from '../business/data/DataStore';
import Locations from './Locations';

interface ICalendarBlockProps{
    day : Day;
}

interface ICalendarBlockState{
    locations : string[];
}

export default class CalendarBlock extends React.Component<ICalendarBlockProps, ICalendarBlockState>{
    constructor(props : ICalendarBlockProps){
        super(props);

        this.state = {
            locations : DataStore.getLocationsForDate(this.props.day.toDate())
        };
    }

    render(){
        const todayClassName = (this.props.day.isToday()) ? "today" : "";

        return (
            <div className={`calendar-grid-item calendar-block ${todayClassName}`}>
                {this.props.day.asNumber()}
                <Locations locations={this.state.locations} />
            </div>
        );
    }
}