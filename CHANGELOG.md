# Changelog

## v0.3.1 (01/06/15)

Updated dependencies and code style.

## v0.3.0 (15/04/15)

- Updated Babel to v5.
- Removed `size` property from `Button` as it is not a default Pure class.

## v0.2.4 (23/03/15)

Fixed `MenuItem` export.

## v0.2.3 (18/03/15)

Added [babel-runtime](https://babeljs.io/docs/usage/runtime/) as a dependency to avoid duplicate declarations in modules.

## v0.2.2 (12/03/15)

Publish source in npm package so that apps can use their own transpiler.

## v0.2.0 (11/03/15)

This version is meant to be used with React v0.13 and Pure v0.6.

- Added `MenuItem` element.
- Added `scrollable` property to `Menu` (Pure v0.6).
- Removed `open` property from `Menu` (Pure v0.6).
- Removed the `joinClasses()` util, [classnames](https://www.npmjs.com/package/classnames) is used internally instead.

## v0.1.0 (21/01/15)

Initial release, using React v0.12 and Pure v0.5.
