# react-pill-switcher

> Made with create-react-library

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
|Name               |`String`                                            |The name for the input element                    |
|Options            |`Array` of `Strings` or `Objects {label, icon}`     |A list of options                                 |
|onChange           |`event`                                             |OnChange event that returns the input value       |
|activeColor        |`string`                                            |Color code for the background of the pill         |

## License

MIT © [lalodoble](https://github.com/lalodoble)
