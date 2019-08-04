import { PNG } from 'pngjs';
import Bluebird from 'bluebird';
export declare function parseFromFile(file: string): Bluebird<PNG>;
export declare function mergeMaskByFile(img: string, mask: string): Bluebird<PNG>;
