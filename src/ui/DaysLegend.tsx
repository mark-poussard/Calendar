import React from 'react';
import CalendarOptions from '../model/CalendarOptions';
import { Days } from '../model/time/Day';

export default class DaysLegend extends React.Component{

    render(){
        const dayLegend : JSX.Element[] = [];
        const orderedDays = this.getOrderedDays();
        for(let day of orderedDays){
            dayLegend.push(this.renderDay(day));
        }
        return (
            <div>
                {dayLegend}
            </div>
        )
    }

    renderDay = (day : number) => {
        return (
            <div key={`DAY_LEGEND_${day}`} className={`calendar-legend`}>
                {Days.asString(day)}
            </div>
        )
    }

    getOrderedDays = () => {
        const result = [];
        const startAt = CalendarOptions.START_CALENDAR_HEADER_ON;
        for(let i = 0; i<7; i++){
            const currentDay = (i+startAt) % 7;
            result.push(currentDay);
        }
        return result;
    }
}