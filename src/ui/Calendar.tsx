import React from 'react';
import Color from '../model/Color';
import Month from '../model/time/Month';
import './Calendar.scss';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import Circle from './Circle';
import MonthRecap from './MonthRecap';
import Screen from './Screen/Screen';

interface ICalendarProps{
    
}

interface ICalendarState{
    month : Month;
}

export default class Calendar extends React.Component<ICalendarProps, ICalendarState>{
    mobileModeSubscription ?: number;

    constructor(props : ICalendarProps){
        super(props);

        this.state = {
            month : Month.getCurrentMonth()
        }
    }

    render(){
        const monthColor = this.getMonthColor(this.state.month);
        return (
        <Screen className=''>
            <div className={'triangle-bottomright'} style={{ borderBottomColor: `${monthColor}`}}></div>
            <Circle monthColor={monthColor} top="1vw" left="5vw" bottom="" right=""/>
            <MonthRecap month={this.state.month} />
            <div className={'calendar-wrapper'}>
                <CalendarHeader month={this.state.month} setMonth={this.setMonth} monthColor={monthColor}/>
                <CalendarBody month={this.state.month} />
            </div>
        </Screen>
        );
    }

    setMonth = (month : Month) => {
        this.setState({month});
    }

    getMonthColor = (month : Month) => {
        const color = Color.COLORS[month.asNumber()];
        return `var(${color})`;
    }
}