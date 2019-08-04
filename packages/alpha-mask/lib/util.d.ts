import { PNG } from 'pngjs';
export declare function rgbToAlpha(R: number, G: number, B: number, A?: number): number;
export declare function getPointIndex(img: PNG, x: number, y: number): number;
export declare function getPointColor(img: PNG, x: number, y: number): [number, number, number, number];
export declare function getPoint(img: PNG, x: number, y: number): {
    idx: number;
    data: [number, number, number, number];
};
export declare function getPointLightness(img: PNG, x: number, y: number): number;
export declare function _mergeMaskSync(img: PNG, mask: PNG): PNG;
