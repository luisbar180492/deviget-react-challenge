(() => {
  Array.prototype.toLowerCase = function (callback) {
    const result = []
  
    for (let index = 0; index < this.length; index++)
      result.push(callback(this[index].toLowerCase(), index))
  
    return result
  }
})()