import React from 'react';

import OTColorInput from './otcolorinput-react/OTColorInput';

const app = {
    textAlign: 'center'
}

const appHeader = {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colorId: 55
        }
    }

    onChangeValue = (value) => {
        this.setState({ colorId: value });
    }

    render() {
        return (
            <div style={ app }>
                <header style={ appHeader }>
                    <p>
                        Example <code>otcolorinput-react.js</code>
                    </p>

                    <OTColorInput
                        value={ this.state.colorId }
                        onChange={ this.onChangeValue }
                    />

                    <p>
                        Color id: { this.state.colorId }
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
