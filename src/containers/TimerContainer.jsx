import React, { Component } from 'react';
import CounterContainer from './CounterContainer';

class TimerContainer extends Component {
  state = {
    daysLeft: '',
    hoursLeft: '',
    minutesLeft: ''
  }

  countDown = () => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const secondsInOneDay = second * minute * hour * day;
    const secondsInOneHour = second * minute * hour;

    const launchDate = new Date("Jan 1, 2020 12:00:00").getTime();
    let updateTime = setInterval(function() {
      let now = new Date().getTime();
      let remainingTime = launchDate - now;

      this.setState({ daysLeft: this.state.daysLeft })

      let remainingDays = Math.floor(remainingTime / secondsInOneDay);
      let remainingHours = Math.floor((remainingTime % secondsInOneDay) / secondsInOneHour);
      let remainingMinutes = Math.floor((remainingTime % secondsInOneHour) / minute);
    }, minute);
    updateTime();
  };

  render() {
    return (
      <div className="flex--container">
        <CounterContainer
        />
        <CounterContainer
          text="Hours"
        />
        <CounterContainer
          text="Minutes"
        />
      </div>
    );
  }
}

export default TimerContainer;