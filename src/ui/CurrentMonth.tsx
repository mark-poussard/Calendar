import React from 'react';
import Month from '../model/time/Month';

interface ICurrentMonthProps{
    month : Month;
}

export default class CurrentMonth extends React.Component<ICurrentMonthProps>{
    constructor(props : ICurrentMonthProps){
        super(props);
    }

    render(){
        return (
            <div className={'current-month'}>
                {this.props.month.asString() + ` `}
                {this.props.month.getYear().asNumber()}
            </div>
        )
    }
}