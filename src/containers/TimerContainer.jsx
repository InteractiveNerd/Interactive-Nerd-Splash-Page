import React, { Component } from 'react';
import CounterContainer from './CounterContainer';

class TimerContainer extends Component {
  state = {
    daysLeft: 0,
    hoursLeft: 0,
    minutesLeft: 0
  }

  updateTimer() {
    const launchDate = new Date("Jan 1, 2020 12:00:00").getTime();
    const currentDate = new Date().getTime();

    const diffTimeInMillisecs = Math.abs(launchDate - currentDate);
    const diffDays = Math.floor(diffTimeInMillisecs / 86400000);
    const diffHours =  Math.ceil((diffTimeInMillisecs % 86400000) / 3600000); 
    const diffMins =  Math.ceil(((diffTimeInMillisecs % 86400000) % 3600000) / 60000); 
    
    console.log('this is the difference of days left' + diffDays);
    
    this.setState({daysLeft: diffDays})
    this.setState({hoursLeft: diffHours})
    this.setState({minutesLeft: diffMins})

    console.log(this.state.daysLeft);
    console.log(this.state.hoursLeft);
    console.log(this.state.minutesLeft);
  }

  intervalId = -1;
  componentDidMount() {
    const second = 1000;  

    this.intervalId = setInterval(() => {
      this.updateTimer()
    }, second);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="flex--container">
        <CounterContainer
          value={this.state.daysLeft}
        />
        <CounterContainer
          value={this.state.hoursLeft}
          text="Hours"
        />
        <CounterContainer
          value={this.state.minutesLeft}
          text="Minutes"
        />
      </div>
    );
  }
}

export default TimerContainer;