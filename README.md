# OT Color Input

React component prepared for inputting OT outfit color for web applications.

# Usage

Paste component folder to project and add:

```js
import OTColorInput from './PATH/OTColorInput';
```

JSX Component:

```jsx
<OTColorInput
    value={ 55 }
    onChange={ this.onChangeValue }
/>
```

Add starting color by id:

```jsx
value={ 55 }
```

Getting value from input component:

Create function to get changing value:

```jsx
onChangeValue = (value) => {
    this.setState({ colorId: value });
}
```

Set to component by:

```jsx
onChange={ this.onChangeValue }
```
