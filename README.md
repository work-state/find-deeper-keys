## find-deeper-keys
Retrieve all values associated with a particular key in a nested object.

## Install
```
npm install --save find-deeper-keys
```

## Running tests
```
npm install
npm run test
```

## Usage
```javascript
var findDeeperKeys = require('find-deeper-keys')

var obj = { 
    key: "1", 
    b: { key: "2" }, 
    c: { d: { key: "3" } }, 
    e: { f: { g: { key: "4" } } } 
};
var target = 'key';

findDeeperKeys(obj, target)


> ["1", "2", "3", "4"]
```

## Author
[Ilyass Mabrouk](https://github.com/work-state)

## License
[MIT](https://github.com/work-state/find-deeper-keys/blob/master/LICENSE.md)
