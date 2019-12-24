import React, { Component } from 'react';
import CounterContainer from './CounterContainer';

class TimerContainer extends Component {
  state = {
    daysLeft: 0,
    hoursLeft: 0,
    minutesLeft: 0
  }

  intervalId = -1;
  componentDidMount() {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const secondsInOneDay = second * minute * hour * day;
    const secondsInOneHour = second * minute * hour;

    const launchDate = new Date("Jan 1, 2020 12:00:00").getTime();
    this.intervalId = setInterval(() => {
      let now = new Date().getTime();
      let remainingTime = launchDate - now;

      let remainingDays = Math.floor(remainingTime / secondsInOneDay);
      let remainingHours = Math.floor((remainingTime % secondsInOneDay) / secondsInOneHour);
      let remainingMinutes = Math.floor((remainingTime % secondsInOneHour) / minute);

      this.setState(prevState => ({
        daysLeft: prevState.daysLeft + remainingDays,
        hoursLeft: prevState.hoursLeft + remainingHours,
        minutesLeft: prevState.minutesLeft + remainingMinutes
      }));
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