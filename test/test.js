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
    var str = '["foo", 42, { "bar": "baz" }]';
    var msg = parser(str);
    var parsed = JSON.parse(str);
    assert.strictEqual(msg.payload[0], parsed[0]);
    assert.strictEqual(msg.payload[1], parsed[1]);
    assert.strictEqual(msg.payload[2].bar, parsed[2].bar);
  });

  it('should do nothing if input already has a "payload" field', function () {
    var str = '{ "topic":"", "payload": "already set" }';
    var msg = parser(str);
    assert.strictEqual(msg.payload, JSON.parse(str).payload);
  });

  it('should convert objects without "payload" properties to { "payload": {"an":"object"} }', function () {
    var str = '{ "an":"object" }';
    var msg = parser(str);
    assert.strictEqual(msg.payload.an, JSON.parse(str).an);
  });
});
