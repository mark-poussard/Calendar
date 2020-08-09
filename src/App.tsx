import React from 'react';
import './App.scss';
import DataStore from './business/data/DataStore';
import Calendar from './ui/Calendar';
import Home from './ui/Home/Home';
import Month from './model/time/Month';

interface IAppProps{

}

interface IAppState{
  loading : boolean;
  month : Month;
}

export default class App extends React.Component<IAppProps, IAppState>{
  constructor(props : IAppProps){
    super(props);

    this.state = {
      loading : true,
      month : Month.getCurrentMonth()
    };
  }

  componentDidMount(){
    DataStore.init();
    DataStore.onDataReady(() => this.setState({loading : false}));
  }

  setMonth = (month : Month) => {
    this.setState({month});
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
        <Home month={this.state.month} />
        <Calendar month={this.state.month} setMonth={this.setMonth}/>
      </div>
    );
  }
}
