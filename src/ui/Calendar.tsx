import React from 'react';
import Month from '../model/time/Month';

interface ICalendarProps{
    
}

interface ICalendarState{
    month : Month;
}

export default class Calendar extends React.Component<ICalendarProps, ICalendarState>{
    constructor(props : ICalendarProps){
        super(props);

        this.state = {
            month : this.getCurrentMonth()
        }
    }

    getCurrentMonth = () => {
        const now = new Date();
        return new Month(now.getFullYear(), now.getMonth());
    }

    render(){
        return (
            <div>

            </div>
        );
    }
}