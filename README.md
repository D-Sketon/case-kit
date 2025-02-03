# case-kit

![npm bundle size](https://img.shields.io/bundlephobia/min/case-kit) ![npm](https://img.shields.io/npm/v/case-kit) ![NPM](https://img.shields.io/npm/l/case-kit)

A collection of functions to convert strings between various cases.

## Installation

```bash
npm install case-kit
```

## Usage

```js
import { camelCase, kebabCase } from "case-kit";
// or
const { camelCase, kebabCase } = require("case-kit");
```

### general

#### capitalize(str: string): string

Capitalizes the first character of a string, and leaves the rest unchanged.

```js
import { capitalize } from "case-kit";

capitalize("foo-bar"); // => 'Foo-bar'
```

#### words(str: string, asciiOnly = false): string[]

Splits a string into words, just like `words` in lodash.

`asciiOnly` is a boolean flag that determines whether to split the string using only ASCII characters.

```js
import { words } from "case-kit";

words("  foo&bar_baz-qux  "); // => ['foo', 'bar', 'baz', 'qux']
words("FooBarBAZ123"); // => ['Foo', 'Bar', 'BAZ', '123']
words("🚀Lunedì नमस्ते"); // => ['🚀', 'Lunedì', 'नमस्ते']
words("1st 2nd+3rd--4th@1ST*2ND-3RD_4TH"); // => ['1st', '2nd', '3rd', '4th', '1ST', '2ND', '3RD', '4TH']
words("I don't+can't-won't"); // => ['I', "don't", "can't", "won't"]
```

All the following case functions take the same two optional arguments: `str` and `asciiOnly`. The `str` argument is the string to convert, and the `asciiOnly` argument is a boolean flag that determines whether to convert the string using only ASCII characters.

### camel

#### camelCase (dromedaryCase)

```js
import { camelCase } from "case-kit";

camelCase("foo-bar"); // => 'fooBar'
```

#### camelSnakeCase

```js
import { camelSnakeCase } from "case-kit";

camelSnakeCase("foo-bar"); // => 'foo_Bar'
```

### upper

#### cobolCase (screamingKebabCase)

```js
import { cobolCase } from "case-kit";

cobolCase("foo-bar"); // => 'FOO-BAR'
```

#### screamingSnakeCase (macroCase, constantCase, upperSnakeCase)

```js
import { screamingSnakeCase } from "case-kit";

screamingSnakeCase("foo-bar"); // => 'FOO_BAR'
```

#### upperFlatCase

```js
import { upperFlatCase } from "case-kit";

upperFlatCase("foo-bar"); // => 'FOOBAR'
```

#### upperCase

```js
import { upperCase } from "case-kit";

upperCase("foo-bar"); // => 'FOO BAR'
```

### lower

#### flatCase

```js
import { flatCase } from "case-kit";

flatCase("foo-bar"); // => 'foobar'
```

#### kebabCase

```js
import { kebabCase } from "case-kit";

kebabCase("fooBar"); // => 'foo-bar'
```

#### snakeCase (potholeCase)

```js
import { snakeCase } from "case-kit";

snakeCase("fooBar"); // => 'foo_bar'
```

#### lowerCase

```js
import { lowerCase } from "case-kit";

lowerCase("fooBar"); // => 'foo bar'
```

#### dotCase

```js
import { dotCase } from "case-kit";

dotCase("foo-bar"); // => 'foo.bar'
```

#### pathCase

```js
import { pathCase } from "case-kit";

pathCase("foo-bar"); // => 'foo/bar'
```

#### pipeCase

```js
import { pipeCase } from "case-kit";

pipeCase("foo-bar"); // => 'foo|bar'
```

### capital

#### pascalCase (upperCamelCase)

```js
import { pascalCase } from "case-kit";

pascalCase("foo-bar"); // => 'FooBar'
```

#### pascalSnakeCase (adaCase)

```js
import { pascalSnakeCase } from "case-kit";

pascalSnakeCase("foo-bar"); // => 'Foo_Bar'
```

#### titleCase (startCase)

```js
import { titleCase } from "case-kit";

titleCase("foo-bar"); // => 'Foo Bar'
```

#### headerCase (trainCase)

```js
import { headerCase } from "case-kit";

headerCase("foo-bar"); // => 'Foo-Bar'
```

### other

#### sentenceCase

```js
import { sentenceCase } from "case-kit";

sentenceCase("foo-bar"); // => 'Foo bar'
```

#### alternatingCase (studlyCaps)

```js
import { alternatingCase } from "case-kit";

alternatingCase("foo-bar"); // => 'fOo bAr'
```

## License

MIT