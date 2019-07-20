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
        return (
            <div>
                {this.props.day.asNumber()}
            </div>
        );
    }
}