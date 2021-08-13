(() => {
  String.prototype.upperCamelCaseToSlugCase = function() {
    return this.replace(/([A-Z])/g, (match) => ` ${match.toLowerCase()}`).trim().replace(/\s/g, '-')
  }
})()