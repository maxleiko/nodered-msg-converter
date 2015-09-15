var assert = require('assert');
var parser = require('../index');

describe('nodered-msg-converter parser', function () {
  it('should convert strings to { "payload": "<data>" }', function () {
    var str = 'nodered';
    var msg = parser(str);

    assert.strictEqual(msg.payload, str);
  });

  it('should convert numbers to { "payload": <number> }', function () {
    var str = '42';
    var msg = parser(str);

    assert.strictEqual(msg.payload, JSON.parse(str));
  });

  it('should convert arrays to { "payload": [<items>] }', function () {
    var array = ["foo", 42, { "bar": "baz" }];
    var str = JSON.stringify(array);
    var msg = parser(str);

    assert.strictEqual(msg.payload, str);
  });

  it('should do nothing if input already has a "payload" field', function () {
    var obj = { topic: "", payload: "already set" };
    var str = JSON.stringify(obj);
    var msg = parser(str);

    assert.strictEqual(msg.payload, obj.payload);
  });

  it('should convert objects without "payload" properties to { "payload": "{\"an\":\"object\"}" }', function () {
    var obj = { an: "object" };
    var str = JSON.stringify(obj);
    var msg = parser(str);

    assert.strictEqual(msg.payload, str);
  });
});
