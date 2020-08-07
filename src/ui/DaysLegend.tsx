import React from 'react';
import CalendarOptions from '../model/CalendarOptions';
import { Days } from '../model/time/Day';
import WebAppSettingsStore from '../business/WebAppSettingsStore';

interface IDaysLegendProps{
    monthColor : string;
}

interface IDaysLegendState{
    mobileMode : boolean;
}

export default class DaysLegend extends React.Component<IDaysLegendProps, IDaysLegendState>{
    mobileModeSubscription ?: number;

    constructor(props : IDaysLegendProps){
        super(props);

        this.state = {
            mobileMode : WebAppSettingsStore.getMobileMode().getValue()
        }
    }

    componentDidMount(){
        this.mobileModeSubscription = WebAppSettingsStore.getMobileMode()
            .subscribeToValue((mobileMode) => {
                this.setState({mobileMode});
            });
    }

    componentWillUnmount(){
        if(this.mobileModeSubscription != null){
            WebAppSettingsStore.getMobileMode().unsubscribe(this.mobileModeSubscription);
            this.mobileModeSubscription = undefined;
        }
    }

    render(){
        const dayLegend : JSX.Element[] = [];
        const orderedDays = this.getOrderedDays();
        for(let day of orderedDays){
            dayLegend.push(this.renderDay(day));
        }
        return (
            <div className={'day-legend'}>
                {dayLegend}
                <div className={'days-underline'} style={{ backgroundColor : `${this.props.monthColor}`}}></div>
            </div>
        )
    }

    renderDay = (day : number) => {
        const dayAsString = (this.state.mobileMode)
            ? (Days.asString(day).substring(0, 3) + ".")
            : (Days.asString(day));
        return (
            <div key={`DAY_LEGEND_${day}`} className={`calendar-legend`}>
                {dayAsString}
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