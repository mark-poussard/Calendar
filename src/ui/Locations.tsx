import * as React from 'react';

interface ILocationsProps{
    locations : string[];
}

export default class Locations extends React.Component<ILocationsProps>{
    constructor(props : ILocationsProps){
        super(props);
    }

    render(){
        if(this.props.locations.length === 0){
            return null;
        }
        const list : JSX.Element[] = [];
        for(let location of this.props.locations){
            list.push(
                <div key={`LIST_LOCATION_${location}`}>
                    {location}
                </div>
            );
        }
        return (
            <div style={{position: "absolute"}}>
                {list}
            </div>
        )
    }
}