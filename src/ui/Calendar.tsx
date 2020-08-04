import React from 'react';
import Month from '../model/time/Month';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import CalendarNavigation from './CalendarNavigation';
import './Calendar.scss';
import WebAppSettingsStore from '../business/WebAppSettingsStore';
import ColoursLegend from './coloursLegend/ColoursLegend';

interface ICalendarProps{
    
}

interface ICalendarState{
    month : Month;
    mobileMode : boolean;
}

export default class Calendar extends React.Component<ICalendarProps, ICalendarState>{
    mobileModeSubscription ?: number;

    constructor(props : ICalendarProps){
        super(props);

        this.state = {
            month : Month.getCurrentMonth(),
            mobileMode : WebAppSettingsStore.getMobileMode().getValue()
        }
    }

    componentDidMount(){
        this.mobileModeSubscription = WebAppSettingsStore.getMobileMode()
            .subscribeToValue((mobileMode) => {
                this.setState({mobileMode})
            });
    }

    componentWillUnmount(){
        if(this.mobileModeSubscription != null){
            WebAppSettingsStore.getMobileMode().unsubscribe(this.mobileModeSubscription);
            this.mobileModeSubscription = undefined;
        }
    }

    render(){
        return (
            <div className={'calendar-wrapper'}>
                <CalendarHeader month={this.state.month} setMonth={this.setMonth}/>
                <CalendarBody month={this.state.month} />
                {this.state.mobileMode 
                    && <ColoursLegend month={this.state.month} />}
            </div>
        );
    }

    setMonth = (month : Month) => {
        this.setState({month});
    }
}