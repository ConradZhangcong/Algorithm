const isSomeType = (type) => (x) => Object.prototype.toString.call(x) === type

const isString = isSomeType('[object String]')

console.log(isString('112'))
