/// <reference types="node" />
/**
 * Created by user on 2019/8/5.
 */
import { PNG } from 'pngjs';
import Bluebird from 'bluebird';
export declare function generateStream(png: PNG): PNG;
export declare function generateAsync(png: PNG): Bluebird<Buffer>;
export declare function generateSync(png: PNG): Buffer;
export declare function outputStream(file: string, png: PNG): import("fs").WriteStream;
export declare function outputAsync(file: string, png: PNG): Bluebird<Buffer>;
export declare function outputSync(file: string, png: PNG): PNG;
export default generateAsync;
