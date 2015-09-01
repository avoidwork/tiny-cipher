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
