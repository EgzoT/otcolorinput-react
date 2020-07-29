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
    onChooseButton = (id) => {
        if (this.props.onChooseColor) {
            this.props.onChooseColor(id);
        }
    }

    render() {
        let rows = [];
        for (let i = 0; i < ROWS; i++) {
            let columns = [];

            for (let j = 0; j < COLUMNS; j++) {
                columns.push(<ColorPaletteColumn key={ i * 19 + j } colorId={ i * 19 + j } onChooseButton={ this.onChooseButton } outerDivStyle={{ width: 'calc(20em / ' + COLUMNS + ')', height: 'calc(20em / ' + COLUMNS + ')', maxWidth: 'calc(80vw / ' + COLUMNS + ' - ' + 2 + 'px)', maxHeight: 'calc(80vw / ' + COLUMNS + ' - ' + 2 + 'px)' }} />);
            }

            rows.push(<ColorPaletteRow key={ i }>{ columns }</ColorPaletteRow>);
        }

        return (
            <div style={{ display: 'table' }}>
                { rows }
            </div>
        );
    }
}

export default ColorPalette;
