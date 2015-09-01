# tiny-cipher
Tiny cipher/decipher

[![build status](https://secure.travis-ci.org/avoidwork/tiny-cipher.svg)](http://travis-ci.org/avoidwork/tiny-cipher)

## Example
```javascript
var cipher = require('tiny-cipher'),
    iv = cipher.iv(256),
    decoded = 'hello world!',
    encoded = cipher(decoded, true, iv);
    
console.log(encoded);
console.log(decoded === cipher(encoded, false, iv));
```

## API
#### cipher(arg, encode, iv)
Returns a cipher or decipher String

#### iv(size=256)
Returns a random byte String of a specific size

## License
Copyright (c) 2015 Jason Mulligan
Licensed under the BSD-3 license
