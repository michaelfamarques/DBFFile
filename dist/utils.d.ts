/// <reference types="node" />
import * as fs from 'fs';
/** Promisified version of fs.close. */
export declare const close: typeof fs.close.__promisify__;
/** Promisified version of fs.open. */
export declare const open: typeof fs.open.__promisify__;
/** Promisified version of fs.read. */
export declare const read: typeof fs.read.__promisify__;
/** Promisified version of fs.write. */
export declare const write: typeof fs.write.__promisify__;
/** Parses an 8-character date string of the form 'YYYYMMDD' into a Date object. */
export declare function parseDate(s: string): Date;
/** Formats the given date as a string, in 8-character 'YYYYMMDD' format. */
export declare function formatDate(d: Date): string;
