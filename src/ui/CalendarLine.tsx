import React from 'react';
import Day from '../model/time/Day';
import CalendarOptions from '../model/CalendarOptions';
import CalendarBlock from './CalendarBlock';
import CalendarSpace from './CalendarSpace';

interface ICalendarLineProps{
    days : Day[];
}

export default class CalendarLine extends React.Component<ICalendarLineProps>{
    constructor(props : ICalendarLineProps){
        super(props);
    }

    render(){
        return (
            <div>
                {this.renderOffsetBlocks()}
                {this.renderDays()}
                {this.renderBufferBlocks()}
            </div>
        );
    }

    getOffset = () => {
        const firstDay = this.props.days[0];
        if(firstDay.isFirstOfMonth()){
            return firstDay.getDayOfTheWeek() - CalendarOptions.START_CALENDAR_HEADER_ON;
        }
        return 0;
    }

    getBuffer = () => {
        const lastDay = this.props.days[this.props.days.length-1];
        if(lastDay.isLastOfMonth()){
            return (8 - lastDay.getDayOfTheWeek() - CalendarOptions.START_CALENDAR_HEADER_ON) % 7;
        }
        return 0;
    }

    renderOffsetBlocks = () => {
        const result : JSX.Element[] = [];
        for(let i = 0; i<this.getOffset(); i++){
            result.push(<CalendarSpace key={`OFFSET_${i}`}/>);
        }
        return result;
    }

    renderBufferBlocks = () => {
        const result : JSX.Element[] = [];
        for(let i = 0; i<this.getBuffer(); i++){
            result.push(<CalendarSpace key={`BUFFER_${i}`}/>);
        }
        return result;
    }

    renderDays = () => {
        const result : JSX.Element[] = [];
        for(let day of this.props.days){
            result.push(<CalendarBlock key={`DAY_${day.asNumber()}`} day={day}/>);
        }
        return result;
    }
}