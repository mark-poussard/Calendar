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
            <div className={'calendar-navigation'}>
                <button onClick={this.doPreviousMonth} className={'button-previous'}>&#8249;</button>
                <button onClick={this.doNextMonth} className={'button-next'}>&#8250;</button>
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