import React, { Component } from 'react';
import CounterContainer from './CounterContainer';

class TimerContainer extends Component {
  state = {
    daysLeft: 0,
    hoursLeft: 0,
    minutesLeft: 0
  }

  updateTimer() {
    const launchDate = new Date("Jan 10, 2020 12:00:00").getTime();
    const currentDate = new Date().getTime();
    const oneDay = 86400000;
    const oneHour = 3600000;
    const oneMinute = 60000;

    const remainingTime = Math.abs(launchDate - currentDate);
    const remainingDays = Math.floor(remainingTime / oneDay);
    const remainingHours = Math.ceil((remainingTime % oneDay) / oneHour);
    const remainingMinutes = Math.ceil(((remainingTime % oneDay) % oneHour) / oneMinute);

    this.setState({ daysLeft: remainingDays })
    this.setState({ hoursLeft: remainingHours })
    this.setState({ minutesLeft: remainingMinutes })
  }

  intervalId = -1;
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.updateTimer()
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="timer--container flex--container">
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