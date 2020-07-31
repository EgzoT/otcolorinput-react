import React from 'react';
import { ROWS, COLUMNS } from './const';

import ColorButton from './ColorButton';

class ColorPaletteRow extends React.Component {
    render() {
        return (
            <div style={{ display: 'table-row' }}>
                { this.props.children }
            </div>
        );
    }
}

class ColorPaletteColumn extends React.Component {
    render() {
        return (
            <div style={{ display: 'table-cell' }}>
                <ColorButton colorId={ this.props.colorId } onClick={ this.props.onChooseButton } outerDivStyle={ this.props.outerDivStyle } />
            </div>
        );
    }
}

class ColorPalette extends React.Component {
    onChooseButton = (id, hexColor) => {
        if (this.props.onChooseColor) {
            this.props.onChooseColor(id, hexColor);
        }
    }

    render() {
        let rows = [];

        if (this.props.screenRotation === 'horizontal') {
            for (let i = 0; i < ROWS; i++) {
                let columns = [];

                for (let j = 0; j < COLUMNS; j++) {
                    columns.push(<ColorPaletteColumn key={ i * COLUMNS + j } colorId={ i * COLUMNS + j } onChooseButton={ this.onChooseButton } outerDivStyle={ this.props.colorButtonsStyle } />);
                }

                rows.push(<ColorPaletteRow key={ i }>{ columns }</ColorPaletteRow>);
            }
        } else if (this.props.screenRotation === 'vertical') {
            for (let i = 0; i < COLUMNS; i++) {
                let columns = [];

                for (let j = 0; j < ROWS; j++) {
                    columns.push(<ColorPaletteColumn key={ i * ROWS + j } colorId={ i + j * COLUMNS } onChooseButton={ this.onChooseButton } outerDivStyle={ this.props.colorButtonsStyle } />);
                }

                rows.push(<ColorPaletteRow key={ i }>{ columns }</ColorPaletteRow>);
            }
        }

        return (
            <div style={{ display: 'table' }}>
                { rows }
            </div>
        );
    }
}

export default ColorPalette;
