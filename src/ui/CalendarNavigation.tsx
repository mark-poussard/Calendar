import React from 'react';
import Month from '../model/time/Month';

interface ICalendarNavigationProps {
    month : Month;
    setMonth : (month : Month) => void;
}

export default class CalendarNavigation extends React.Component<ICalendarNavigationProps>{
    constructor(props : ICalendarNavigationProps){
        super(props);
    }

    render(){
        return (
            <div>
                <button onClick={this.doPreviousMonth}>Previous month</button>
                <button onClick={this.doNextMonth}>Next month</button>
            </div>
        )
    }

    doNextMonth = () => {
        this.props.setMonth(this.props.month.getNextMonth());
    }

    doPreviousMonth = () => {
        this.props.setMonth(this.props.month.getPreviousMonth());
    }
}