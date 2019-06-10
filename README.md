# postcss-preset-kensho

postcss-preset-kensho is the standard [postcss](http://postcss.org) pipeline used across Kensho projects. It includes:

- [Autoprefixing](#autoprefixing)
- [Nesting](#nesting)
- [Variables](#variables)

## Install

```sh
$ npm i -D postcss-preset-kensho
```

## Usage

Add the plugin to your `postcss.config.js`:

```js
module.exports = {
  plugins: [require('postcss-preset-kensho')],
}
```

## Features

### Autoprefixing

Vendor prefixes are [automatically added](https://github.com/postcss/autoprefixer) to properties, at rules, etc.

### Nesting

Selectors can be [nested](https://github.com/postcss/postcss-nested) as you'd expect from frameworks like LESS, Sass, etc.

```css
.foo {
  color: red;

  .bar {
    color: blue;
  }

  &:first-child {
    color: yellow;
  }
}

/* becomes: */

.foo {
  color: red;
}

.foo .bar {
  color: blue;
}

.foo:first-child {
  color: yellow;
}
```

### Variables

Variables conform to a [transpilable subset](https://github.com/postcss/postcss-custom-properties) of the [native CSS spec](https://www.w3.org/TR/css-variables/). They are declared within the `:root` selector and invoked with the `var(name)` function:

```css
:root {
  --size: 5px;
}

.foo {
  width: var(--size);
}
```

Global variables can be injected by passing `{variables: {...[name]: value}}` as an option.
