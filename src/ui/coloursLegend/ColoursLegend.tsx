import React from 'react';
import DataStore from '../../business/data/DataStore';
import Month from '../../model/time/Month';
import LocationColour from './LocationColour';

interface IColoursLegendProps{
    month : Month;
}

interface IColoursLegendState{
    locations : Set<string>;
}

export default class ColoursLegend extends React.Component<IColoursLegendProps, IColoursLegendState>{
    constructor(props : IColoursLegendProps){
        super(props);

        this.state = {
            locations : this.getLocations()
        }
    }

    componentDidUpdate(prevProps : IColoursLegendProps){
        if(!prevProps.month.equals(this.props.month)){
            this.setState({
                locations : this.getLocations()
            });
        }
    }

    getLocations = () => {
        const locations = new Set<string>();
        DataStore.getEntriesForMonth(this.props.month)
            .forEach(entry => locations.add(entry.location));
        return locations;
    }

    render(){
        const legends : JSX.Element[] = [];
        for(let location of this.state.locations){
            legends.push(<LocationColour key={location} location={location} />)
        }
        return (
            legends
        );
    }
}