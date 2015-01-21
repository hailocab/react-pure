react-pure
==========

[React](http://facebook.github.io/react/) components using [Pure CSS](http://purecss.io/)

## Install

```bash
npm install hailocab/react-pure
```

React is also required as a peer dependency.

## Utils

### joinClasses

Reduces its arguments to a single string separating values with spaces and filtering out falsy ones.

Example:
```js
joinClasses('react-pure', 'component'); // 'react-pure component'
joinClasses('react-pure', undefined, false && 'super', 'component'); // 'react-pure component'
```

A common use case is to add the `className` property:
```js
let MyComponent = React.createClass({
    render() {
        let {className, isActive, ...props} = this.props;
        let cls = joinClasses('myComponent', isActive && 'active', className);

        return <div className={cls} {...props} />;
    }
});
```

## Components

### Button

[Pure CSS reference](http://purecss.io/buttons/)

#### Properties

- `active: bool` (optional, defaults to *false*): adds the `pure-button-active` class.
- `disabled: bool` (optional, defaults to *false*): adds the `pure-button-disabled` class.
- `primary: bool` (optional, defaults to *false*): adds the `pure-button-primary` class.
- `href: string` (optional): if set, renders a `<a>` element instead of `<button>`.
- `size: string`: (optional, one of `xsmall`, `small`, `large`, `xlarge`): if set, adds the `pure-button-{size}` class.

### Cell

A Cell is an element of a [Pure CSS Grid](http://purecss.io/grids/)

#### Properties

- `size: string` (optional, defaults to *1*): adds the `pure-u-{size}` class. You can use the `/` separator instead of `-`, ex: `<Cell size='1/3'>`.
- `sm: string` (optional): adds the `pure-u-sm-{sm}` class.
- `md: string` (optional): adds the `pure-u-md-{md}` class.
- `lg: string` (optional): adds the `pure-u-lg-{lg}` class.
- `xl: string` (optional): adds the `pure-u-xl-{xl}` class.

### Menu

[Pure CSS reference](http://purecss.io/menus/)

#### Properties

- `horizontal: bool` (optional, defaults to *false*): adds the `pure-menu-horizontal` class.
- `open: bool` (optional, defaults to *false*): adds the `pure-menu-open` class.

### Table

[Pure CSS reference](http://purecss.io/tables/)

#### Properties

- `bordered: bool` (optional, defaults to *false*): adds the `pure-table-bordered` class.
- `horizontal: bool` (optional, defaults to *false*): adds the `pure-table-horizontal` class.
- `striped: bool` (optional, defaults to *false*): adds the `pure-table-striped` class.

## License

Apache 2.0  
Copyright 2014 Hailo
