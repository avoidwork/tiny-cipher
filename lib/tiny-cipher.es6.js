/**
 * Tiny cipher/decipher
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2015 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @link https://github.com/avoidwork/tiny-cipher
 * @version 1.0.1
 */
const crypt = require("crypto");

function cipher (arg, encode = true, iv = cipher.iv()) {
	var cpher, crypted;

	cpher = crypt[encode ? "createCipher" : "createDecipher"]("aes-256-cbc", iv);
	crypted = encode ? cpher.update(arg, "utf8", "hex") : cpher.update(arg, "hex", "utf8");
	crypted += cpher.final(encode ? "hex" : "utf8");

	return crypted;
}

cipher.iv = function (size = 256) {
	return crypt.randomBytes(size).toString();
};

module.exports = cipher;
