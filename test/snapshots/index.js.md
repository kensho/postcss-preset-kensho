# Snapshot report for `test/index.js`

The actual snapshot is saved in `index.js.snap`.

Generated by [AVA](https://ava.li).

## flattens nesting

> Snapshot 1

    `.foo {␊
      color: red;␊
    }␊
    ␊
      .foo .bar {␊
        color: blue;␊
      }␊
    ␊
      .baz .foo {␊
        color: yellow;␊
      }␊
    `

## inlines imports

> Snapshot 1

    `.foo {␊
      width: 5px;␊
    }␊
    ␊
    .bar {␊
      height: 5px;␊
    }␊
    `

## resolves variables

> Snapshot 1

    `.foo {␊
      width: 5px;␊
    }␊
    `
