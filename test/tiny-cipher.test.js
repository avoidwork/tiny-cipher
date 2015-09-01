var cipher = require("../lib/tiny-cipher.js");

exports["cipher"] = {
	setUp: function (done) {
		this.iv = cipher.iv();
		this.decoded = "Hello World!";
		this.encoded = cipher(this.decoded, true, this.iv);
		done();
	},
	encode: function (test) {
		test.expect(2);
		test.equal(this.encoded.length > 0, true, "Should be 'true'");
		test.equal(this.encoded !== this.decoded, true, "Should be 'true'");
		test.done();
	},
	decode: function (test) {
		test.expect(1);
		test.equal(cipher(this.encoded, false, this.iv) === this.decoded, true, "Should be 'true'");
		test.done();
	}
};
