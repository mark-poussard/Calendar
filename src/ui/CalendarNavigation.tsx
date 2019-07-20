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
                <a onClick={this.doPreviousMonth}>Previous month</a>
                <a onClick={this.doNextMonth}>Next month</a>
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