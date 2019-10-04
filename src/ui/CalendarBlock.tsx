import React from 'react';
import Day from '../model/time/Day';
import DataStore from '../business/data/DataStore';
import Locations from './Locations';
import Entry from '../model/data/Entry';

interface ICalendarBlockProps{
    day : Day;
}

interface ICalendarBlockState{
    entries : Entry[];
}

export default class CalendarBlock extends React.Component<ICalendarBlockProps, ICalendarBlockState>{
    constructor(props : ICalendarBlockProps){
        super(props);

        this.state = this.getState();
    }

    getState = () => {
        return {
            entries : DataStore.getEntriesForDate(this.props.day.toDate())
        };
    }

    componentDidUpdate(previousProps : ICalendarBlockProps){
        if (previousProps.day.toDate().getTime() !== this.props.day.toDate().getTime()){
            this.setState(this.getState());
        }
    }

    render(){
        const todayClassName = (this.props.day.isToday()) ? "today" : "";

        return (
            <div className={`calendar-grid-item calendar-block ${todayClassName}`}
                style={{background : this.computeGradient()}}>
                {this.props.day.asNumber()}
                <Locations locations={this.state.entries.map(e => e.location)} />
            </div>
        );
    }

    computeGradient = () => {
        let result = "linear-gradient(";
        const percentageIncrementor = 100 / this.state.entries.length;
        let gradualPercentage = 0;
        let isFirst = true;
        for(let entry of this.state.entries){
            if(!isFirst){
                result += ", ";
            }
            result += entry.getColor().toCssString() + " " + gradualPercentage + "%"
                    + ", " + entry.getColor().toCssString() 
                        + " " + (gradualPercentage + percentageIncrementor) + "%";
            gradualPercentage += percentageIncrementor;
            isFirst = false;
        }
        result += ")";
        return result;
    }
}