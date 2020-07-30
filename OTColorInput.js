import React from 'react';
import { MIN_COLOR, MAX_COLOR } from './components/const';

import ColorButton from './components/ColorButton';
import ColorsWindow from './components/ColorsWindow';

class OTColorInput extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();

        this.state = {
            id: this.checkColor(this.props.value) ? this.checkColor(this.props.value) : 0,
            isWindowOpen: false
        }
    }

    checkColor = (color) => {
        if (color === undefined) {
            return undefined;
        } else if (color >= MIN_COLOR && color <= MAX_COLOR) {
            return color;
        } else if (color > MAX_COLOR) {
            return MAX_COLOR;
        } else if (color < MIN_COLOR) {
            return MIN_COLOR;
        } else {
            return undefined;
        }
    }

    setColor = (color) => {
        this.setState({ color: this.checkColor(color) });
    }

    toggleColorsWindow = () => {
        this.setState({ isWindowOpen: !this.state.isWindowOpen });
    }

    openColorsWindow = () => {
        if (!this.state.isWindowOpen) {
            this.setState({ isWindowOpen: true });
        }
    }

    closeColorsWindow = () => {
        if (this.state.isWindowOpen) {
            this.setState({ isWindowOpen: false });
        }
    }

    onChangeValue = (value) => {
        this.setState({ id: value });
        this.closeColorsWindow();

        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }

    isMobileDevice = () => {
        return /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    render() {
        return (
            <div>
                <ColorButton
                    colorId={ this.state.id }
                    onClick={ this.toggleColorsWindow }
                    setRef={ this.ref }
                    outerDivStyle={{ width: '1.9em' }}
                />
                { this.state.isWindowOpen ?
                    <ColorsWindow
                        onChooseColor={ this.onChangeValue }
                        posX={ this.ref.current.offsetLeft }
                        posY={ this.ref.current.offsetTop }
                        parentWidth={ this.ref.current.offsetWidth }
                        parentHeight={ this.ref.current.offsetHeight }
                        onClickOutside={ this.closeColorsWindow }
                        buttonRef={ this.ref }
                    /> : null
                }
            </div>
        );
    }
}

export default OTColorInput;
