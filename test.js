const assert = require("chai").assert;
require("mocha");
const findDeeperKeys = require(".");

describe("find deeper keys", function () {
  it("should retrieve values by target (key)", function () {
    var obj = {
      key: "1",
      b: { key: "2", key: "22" },
      c: { d: { key: "3" } },
      e: { f: { g: { key: "4" }, key: { h: "5" } } },
    };
    var target = "key";

    var output = ["1", "22", "3", "4", { h: "5" }];
    assert.deepEqual(findDeeperKeys(obj, target), output);
  });

  it("should retrieve values (which contain target) by target (key)", function () {
    var obj = {
      key: "1",
      b: { key: "2", key: "22" },
      c: { d: { key: "3" } },
      e: { f: { g: { key: "4" }, key: { h: "5", key: "6" } } },
    };
    var target = "key";

    var output = ["1", "22", "3", "4", { h: "5", key: "6" }, "6"];
    assert.deepEqual(findDeeperKeys(obj, target), output);
  });
});
