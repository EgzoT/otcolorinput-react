# OT Color Input

React component prepared for inputting OT outfit color for web applications.

# Demo

https://egzot.github.io/otcolorinput-react/

# Example usage

https://github.com/EgzoT/otcolorinput-react/tree/example

# Usage

Paste component folder to project and add:

```js
import OTColorInput from './PATH/OTColorInput';
```

JSX Component:

```jsx
<OTColorInput
    value={ 55 }                    //Default: 0
    onChange={ this.onChangeValue } //Default: null
/>
```

Add starting color by id:

```jsx
value={ 55 } //Default: 0
```

Getting value from input component:

Create function to get changing value:

```jsx
onChangeValue = (value, hexColor) => {
    this.setState({ colorId: value });
}
```

Set to component by:

```jsx
onChange={ this.onChangeValue } //Default: null
```
