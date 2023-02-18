module.exports = function findDeeperKeys(obj, target, init = []) {
  if ((typeof obj !== "object" && !Array.isArray(obj)) || obj === null)
    obj = {};
  Object.keys(obj).map((key) => {
    if (key === target) init.push(obj[key]);
    findDeeperKeys(obj[key], target, init);
  });
  return init;
};
