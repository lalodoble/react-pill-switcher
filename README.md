# react-pill-switcher

> A simple yet beautifull switcher to transition between two or more options. Made for React.

[![NPM](https://img.shields.io/npm/v/react-pill-switcher.svg)](https://www.npmjs.com/package/react-pill-switcher) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-pill-switcher
```

## Simple Usage

```js
import PillSwitcher from 'react-pill-switcher'

export function App() {
  return <PillSwitcher options={['One', 'Two', 'Three']} />
}
```

## Demo

Coming soon...
<!-- []() -->

## Component Props
|Prop               |Type                                                |Description                                       |
|-------------------|----------------------------------------------------|--------------------------------------------------|
|name*              |`str`                                               |The name for the input element                    |
|options*           |`[str]` or `[{label: str, icon: obj, value: any}]`  |A list of options                                 |
|onChange           |`event`                                             |callback event that returns the input value       |
|activeBg           |`color`                                             |Color code for the background of the pill         |
|labelColor         |`color`                                             |Color code for the background of the active label |
|activeColor        |`color`                                             |Color code for the active label                   |
|className          |`str`                                               |Classes for the Switcher container                |
|labelClassName     |`str`                                               |Classes for the Switcher labels                   |
|labelActiveClassName          |`str`                                    |Classes for the Switcher labels when active       |
|pillClassName     |`str`                                                |Classes for the Switcher Pill                     |
|on                 |`any`                                               |When changed, the compoent is rerendered (used to prevent visual bugs)        |
|isFull             |`boolean`                                           |If true, the component will fill the containers width|

## License

MIT © [lalodoble](https://github.com/lalodoble)
