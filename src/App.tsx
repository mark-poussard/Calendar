import React from 'react';
import './App.css';
import Calendar from './ui/Calendar';
import DataStore from './business/data/DataStore';

interface IAppProps{

}

interface IAppState{
  loading : boolean;
}

export default class App extends React.Component<IAppProps, IAppState>{
  constructor(props : IAppProps){
    super(props);

    this.state = {
      loading : true
    };
  }

  componentDidMount(){
    DataStore.init();
    DataStore.onDataReady(() => this.setState({loading : false}));
  }

  render() {
    if(this.state.loading){
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}
