import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { lat: null, month: new Date().getMonth()};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => {
                console.log(err);
                this.setState ({ lat: "none" });
            }
        );
    }

    render() {
        return (
            <div>
                <SeasonDisplay lat={this.state.lat} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));