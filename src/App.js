import React from 'react';
import './App.css';

function Header(props) {
  return (
    <header className="App">
      <div className="AppTopic">
        <h1 className="AppHeader">{props.text}</h1>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main className="AppMain">
      <Odometer />
    </main>
  )
}

function Footer(props) {
  return (
    <footer className="AppFooter">
      <p className="AppParaFooter">{props.trademark} &sdot; All rights are reserved &copy; {props.year}</p>
    </footer>
  );
}

class Odometer extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      odometer: "0000"
    };
  }
  add(num) {
    this.state.counter += num
    if (this.state.counter > 9999) {
      this.state.counter = this.state.counter - 9999
    }
    let setOtometer = this.state.counter.toString().padStart(4, "0");
    this.setState({
      counter: this.state.counter,
      odometer: setOtometer
    });
  }
  render() {
    return (
      <>
        <h1 className="AppOdometer">{this.state.odometer} miles</h1>
        <div className="AppButtons">
          <button onClick={() => this.add(1)} className="AppButton">Add 1 mile</button>
          <button onClick={() => this.add(10)} className="AppButton">Add 10 miles</button>
          <button onClick={() => this.add(100)} className="AppButton">Add 100 miles</button>
          <button onClick={() => this.add(1000)} className="AppButton">Add 1000 miles</button>
        </div>
      </>
    );
  }
}

export default function App() {
  return (
    <>
      <Header text="Odometer" />
      <Main />
      <Footer trademark="ASAC" year="2020" />
    </>
  );
}