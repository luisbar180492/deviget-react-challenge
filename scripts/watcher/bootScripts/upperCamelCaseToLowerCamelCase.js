(() => {
  String.prototype.upperCamelCaseToLowerCamelCase = function() {
    return this.replace(/([A-Z])/g, (match, another, index) => index === 0 ? match.toLowerCase() : match)
  }
})()