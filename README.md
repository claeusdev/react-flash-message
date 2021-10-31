## An awesome simple flash notifications component for React applications.

A simple React component to display flash messages

### DEMO

![demo-widget-toast](https://user-images.githubusercontent.com/13206817/139505336-9216fdf3-8d44-4a44-a44f-04069a7ca4ed.gif)
### USAGE

```js
  <Toast
    type={type}
    message={message}
    duration={3000}
    active={active}
    setActive={setActive}
    position={position}
  />
```

#### Properties available - API

| Property | Description | Values accepted |
|----------|--------------|----------|
| type | The alert type | `error`, `warning`, or `success` |
| message | The message that will be displayed | any `string` |
| duration | The duration that the toast will appear on screen  | `time in milliseconds` |
| active | A boolean value that indicates if the toast is showing or not  | `true` or `false` |
| setActive | A function that controls the active attribute state  | `function` |
| position | The position the the toast will be appear on screen  | `bleft`, `bright`, `tright`, `tleft`, `tcenter`, or `bcenter` |
| width | The width of the widget  | `small`, `medium`, `large`, or `full` |

### Development

#### Node version

- Node 14 or less
- Npm 6

#### Run project

```sh
npm start
```

#### Run build

```sh
npm run build
```

### Security policy

- See our [SECURITY](./SECURITY.md) for details
