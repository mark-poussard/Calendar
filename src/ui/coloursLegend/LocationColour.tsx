import React from 'react';
import Color from '../../model/Color';

interface ILocationColourProps{
    location : string;
}

export default class LocationColour extends React.Component<ILocationColourProps>{
    constructor(props : ILocationColourProps){
        super(props);
    }

    render(){
        return (
            <div style={{
                backgroundColor: Color.fromString(this.props.location).toCssString(),
                border: "1px solid black",
                width: "25%"
            }}>
                {this.props.location}
            </div>
        )
    }
}