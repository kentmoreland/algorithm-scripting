const htmlEntityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
}

String.prototype.makeArray = function makeArray() {
  return this.split("");
}

function switchItemWithEntity(item) {
    return htmlEntityMap[item] ? item = htmlEntityMap[item] : item;
}

function addHtmlentity (string) {
  return string.makeArray()
    .map(switchItemWithEntity)
    .join('');
}

function convertHTML(str) {
  return addHtmlentity(str);
}


module.exports = convertHTML;
