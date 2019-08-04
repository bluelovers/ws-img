/// <reference types="node" />
import { PNG, PNGOptions } from 'pngjs';
import Bluebird from 'bluebird';
import ReadableStream = NodeJS.ReadableStream;
export declare const _parsePNGAsync: (arg1: string | Buffer) => Bluebird<PNG>;
export declare type IRGB = [number, number, number];
export declare type IRGBA = [number, number, number, number];
export declare function mergeMask(img: PNG, mask: PNG): Bluebird<PNG>;
export declare function createPNGObject(options?: PNGOptions): PNG;
export declare function parseFromStream(img: PNG | ReadableStream): Bluebird<PNG>;
export declare function parseFromBuffer(buf: Buffer, png?: PNG): Bluebird<PNG>;
