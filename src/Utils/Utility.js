import CryptoJS from "crypto-js";

const CRYPTO_KEY = import.meta.env.CRYPTO_KEY;

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

  static encryptPassword(text) {
    const iv = CryptoJS.lib.WordArray.random(16);
    const encryptedData = CryptoJS.AES.encrypt(text, CRYPTO_KEY, {
      iv,
    }).toString();
    return `${encryptedData}_${iv.toString()}`;
  }

  static nameToColor(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xff;
      color += value.toString(16).padStart(2, "0");
    }
    return color;
  }
  static getContrastColor(bgColor) {
    // Remove '#' if present
    bgColor = bgColor.replace("#", "");

    let r,
      g,
      b,
      a = 1; // Default alpha to 1 (opaque)

    if (bgColor.length === 8) {
      // 8-digit hex (RGBA)
      r = parseInt(bgColor.substring(0, 2), 16);
      g = parseInt(bgColor.substring(2, 4), 16);
      b = parseInt(bgColor.substring(4, 6), 16);
      a = parseInt(bgColor.substring(6, 8), 16) / 255; // Convert alpha to range 0-1
    } else {
      // 6-digit hex (RGB)
      r = parseInt(bgColor.substring(0, 2), 16);
      g = parseInt(bgColor.substring(2, 4), 16);
      b = parseInt(bgColor.substring(4, 6), 16);
    }

    // YIQ contrast formula
    let yiq = (r * 299 + g * 587 + b * 114) / 1000;

    // Determine black or white text color
    let textColor = yiq >= 128 ? "#000000" : "#FFFFFF";

    // Return RGBA if alpha exists, otherwise just the hex color
    return a < 1
      ? `rgba(${yiq >= 128 ? "0, 0, 0" : "255, 255, 255"}, ${a})`
      : textColor;
  }
}
