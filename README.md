# PostCSS French Style Sheets

[![travis](https://img.shields.io/travis/timche/postcss-french-stylesheets.svg?style=flat-square)](https://travis-ci.org/timche/postcss-french-stylesheets)
[![npm](https://img.shields.io/npm/v/postcss-french-stylesheets.svg?style=flat-square)](https://www.npmjs.com/package/postcss-french-stylesheets)

> [PostCSS](https://github.com/postcss/postcss) plugin for writing French Style Sheets.

Take CSS to the next level and write your CSS « à la française » 🇫🇷 !

## Installation

```console
$ npm install postcss-french-stylesheets
```

## Usage

```js
// ES5
var frenchStyleSheets = require('postcss-french-stylesheets')

// ES6
import frenchStyleSheets from 'postcss-french-stylesheets'
```

See [PostCSS#Usage](https://github.com/postcss/postcss#usage) for usage for your environment.

## Example

Using this `input.css`:

```css
.fou {
    hauteur: 300px;
    marges-du-bas: 10px;
    taille-de-la-police: 20px !prioritaire;
    couleur-du-fond: aiguemarine;
    couleur: blanc;
}
```

you will get:

```css
.fou {
    height: 300px;
    margin-bottom: 10px;
    font-size: 20px !important;
    background-color: aquamarine;
    color: white;
}
```

## Documentation

- [Properties](https://github.com/timche/postcss-french-stylesheets/blob/master/docs/Properties.md)
- [Values](https://github.com/timche/postcss-french-stylesheets/blob/master/docs/Values.md)

## Contributing

`postcss-french-stylesheets` has only a subset of CSS and needs your help to add more French properties and values.

## Changelog

See [CHANGELOG.md](https://github.com/timche/postcss-french-stylesheets/blob/master/CHANGELOG.md).

## License

postCSS French CSS is based on the [postCSS German CSS]https://github.com/timche/postcss-german-stylesheets) plugin. Danke to them for the base architecture !

See [LICENSE](https://github.com/timche/postcss-french-stylesheets/blob/master/LICENSE).
