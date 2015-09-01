/**
 * Tiny cipher/decipher
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2015 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @link https://github.com/avoidwork/tiny-cipher
 * @version 1.0.1
 */
"use strict";

var crypt = require("crypto");

function cipher(arg) {
  var encode = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
  var iv = arguments.length <= 2 || arguments[2] === undefined ? cipher.iv() : arguments[2];

  var cpher, crypted;

  cpher = crypt[encode ? "createCipher" : "createDecipher"]("aes-256-cbc", iv);
  crypted = encode ? cpher.update(arg, "utf8", "hex") : cpher.update(arg, "hex", "utf8");
  crypted += cpher.final(encode ? "hex" : "utf8");

  return crypted;
}

cipher.iv = function () {
  var size = arguments.length <= 0 || arguments[0] === undefined ? 256 : arguments[0];

  return crypt.randomBytes(size).toString();
};

module.exports = cipher;
