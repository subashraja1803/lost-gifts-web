export default class Utility {
  static isArray(array) {
    return Array.isArray(array);
  }

  static isEmptyArray(array) {
    return Array.isArray(array) && array.length === 0;
  }

  static isObj(obj) {
    return obj && typeof obj === "object";
  }

  static isEmptyObj(obj) {
    return this.isObj(obj) && Object.keys(obj).length === 0;
  }

  static isEmptyString(str) {
    return str === "";
  }

  static isAlphaNumeric(str) {
    if (this.isEmptyString(str)) return true;
    const regex = /^[a-zA-Z][a-zA-Z0-9]*$/;
    return regex.test(str);
  }

  static isAlphaNumericLowerCase(str) {
    if (this.isEmptyString(str)) return true;
    var regex = /^[a-z0-9]+$/;
    return regex.test(str);
  }

  static checkValidEmail(text) {
    if (this.isEmptyString(text)) return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  }
}
