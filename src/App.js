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
            colorId: 55,
            hexColor: null
        }
    }

    onChangeValue = (value, hexColor) => {
        this.setState({ colorId: value, hexColor: hexColor });
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
                        Color id: { this.state.colorId } { this.state.hexColor !== null ? ' (' + this.state.hexColor + ')' : null }
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
