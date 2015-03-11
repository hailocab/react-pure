react-pure
==========

[React](http://facebook.github.io/react/) components using [Pure CSS](http://purecss.io/).  

## Install

```bash
npm install react-pure
```

React is also required as a peer dependency.

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
- `scrollable: bool` (optional, defaults to *false*): adds the `pure-menu-scrollable` class.

### MenuItem

Renders a `<li>` node with the `pure-menu-item` class by default.

#### Properties

- `allowHover: bool` (optional, defaults to *false*): adds the `pure-menu-allow-hover` class.
- `disabled: bool` (optional, defaults to *false*): adds the `pure-menu-disabled` class.
- `hasChildren: bool` (optional, defaults to *false*): adds the `pure-menu-has-children` class.
- `selected: bool` (optional, defaults to *false*): adds the `pure-menu-selected` class.

### Table

[Pure CSS reference](http://purecss.io/tables/)

#### Properties

- `bordered: bool` (optional, defaults to *false*): adds the `pure-table-bordered` class.
- `horizontal: bool` (optional, defaults to *false*): adds the `pure-table-horizontal` class.
- `striped: bool` (optional, defaults to *false*): adds the `pure-table-striped` class.

## Changelog

### v0.2.0 (11/03/15)

This version is meant to be used with React v0.13 and Pure v0.6.

- Added `MenuItem` element.
- Added `scrollable` property to `Menu` (Pure v0.6).
- Removed `open` property from `Menu` (Pure v0.6).
- Removed the `joinClasses()` util, [classnames](https://www.npmjs.com/package/classnames) is used internally instead.

### v0.1.0 (21/01/15)

Initial release, using React v0.12 and Pure v0.5.

## License

Apache 2.0  
Copyright 2015 Hailo
