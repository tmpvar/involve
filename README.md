# involve

Autoload modules in `package.json` and return an object

## Install

`npm install involve`

## Use

package.json
```json
{
  "dependencies" : {
    "request" : "*"
  }
}

```

```javascript
// index.js
var involve = require('involve');

var obj = involve(__dirname + '/package.json');

console.log(typeof obj.dependencies.request); // `function`

```
