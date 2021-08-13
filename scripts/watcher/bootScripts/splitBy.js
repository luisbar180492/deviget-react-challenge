(() => {
  Array.prototype.splitBy = function (symbol, callback) {
    const result = []
  
    for (let index = 0; index < this.length; index++)
      result.push(callback(this[index].split(symbol), index))
  
    return result
  }
})()