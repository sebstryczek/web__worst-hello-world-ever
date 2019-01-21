const mapObjValues = (obj, func) => Object.keys(obj).reduce(
  (acc, key) => ({ ...acc, [key]: func(obj[key]) }), {}
);

module.exports = mapObjValues;
