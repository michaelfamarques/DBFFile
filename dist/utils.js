"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const util_1 = require("util");
/** Promisified version of fs.close. */
exports.close = util_1.promisify(fs.close);
/** Promisified version of fs.open. */
exports.open = util_1.promisify(fs.open);
/** Promisified version of fs.read. */
exports.read = util_1.promisify(fs.read);
/** Promisified version of fs.write. */
exports.write = util_1.promisify(fs.write);
/** Parses an 8-character date string of the form 'YYYYMMDD' into a Date object. */
function parseDate(s) {
    return new Date(`${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}`);
}
exports.parseDate = parseDate;
/** Formats the given date as a string, in 8-character 'YYYYMMDD' format. */
function formatDate(d) {
    return d.toISOString().slice(0, 10).replace(/-/g, '');
}
exports.formatDate = formatDate;
//# sourceMappingURL=utils.js.map