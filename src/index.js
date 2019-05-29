import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = { lat: null, month: new Date().getMonth()};
    }
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude,
                    month: this.state.month
                })
            },
            err => console.log(err)
        );
        return (
            <div>
                <SeasonDisplay lat={this.state.lat} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));