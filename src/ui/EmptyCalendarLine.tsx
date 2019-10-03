import React from 'react';
import CalendarSpace from './CalendarSpace';

export default class EmptyCalendarLine extends React.Component{
    render(){
        return(
            <div style={{height: "9vw", border:"transparent 1px solid"}}>
                {this.renderEmptyLine()}
            </div>
        )
    }

    renderEmptyLine = () => {
        const result : JSX.Element[] = [];
        for(let i = 0; i<7; i++){
            result.push(<CalendarSpace/>);
        }
        return result;
    }
}