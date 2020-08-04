import React from 'react';
import Day from '../model/time/Day';
import DataStore from '../business/data/DataStore';
import Locations from './Locations';
import Entry from '../model/data/Entry';
import WebAppSettingsStore from '../business/WebAppSettingsStore';

interface ICalendarBlockProps{
    day : Day;
}

interface ICalendarBlockState{
    entries : Entry[];
    mobileMode : boolean;
}

export default class CalendarBlock extends React.Component<ICalendarBlockProps, ICalendarBlockState>{
    mobileModeSubscription ?: number;
    
    constructor(props : ICalendarBlockProps){
        super(props);

        this.state = {
            entries : DataStore.getEntriesForDate(this.props.day.toDate()),
            mobileMode : WebAppSettingsStore.getMobileMode().getValue()
        };
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

    componentDidUpdate(previousProps : ICalendarBlockProps){
        if (previousProps.day.toDate().getTime() !== this.props.day.toDate().getTime()){
            this.setState({
                entries : DataStore.getEntriesForDate(this.props.day.toDate())
            });
        }
    }

    render(){
        const todayClassName = (this.props.day.isToday()) ? "today" : "";

        return (
            <div className={`calendar-grid-item calendar-block ${todayClassName}`}
                // style={{background : this.computeGradient()}}
                >
                <div className={'calendar-grid-item-number'}>
                    {this.props.day.asNumber()}
                </div>
                {this.state.entries.map(t => 
                    <div className={`entry ${t.location}`}
                        style={{backgroundColor : t.getColor().toCssString()}}>
                        {this.isFirstOrLastDate(t, this.props.day) && t.location}
                    </div>
                )}
                {/* {!this.state.mobileMode && 
                    <Locations locations={this.state.entries.map(e => e.location)} />} */}
            </div>
        );
    }

    isFirstOrLastDate = (entry : Entry, date : Day) => {
        if (date.toDate().getTime() == entry.startDate.getTime() || date.toDate().getTime() == entry.endDate.getTime()) {
            return true;
        }
        return false;
    }

    computeGradient = () => {
        let result = "linear-gradient(";
        const percentageIncrementor = 100 / this.state.entries.length;
        let gradualPercentage = 0;
        let isFirst = true;
        for(let entry of this.state.entries){
            if(!isFirst){
                result += ", ";
            }
            result += entry.getColor().toCssString() + " " + gradualPercentage + "%"
                    + ", " + entry.getColor().toCssString() 
                        + " " + (gradualPercentage + percentageIncrementor) + "%";
            gradualPercentage += percentageIncrementor;
            isFirst = false;
        }
        result += ")";
        return result;
    }
}