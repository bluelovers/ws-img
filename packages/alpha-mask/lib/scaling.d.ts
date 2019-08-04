import { PNG } from 'pngjs';
export interface IPNGLike extends Pick<PNG, 'width' | 'height' | 'data'> {
}
export declare function boxScaling<T extends IPNGLike | PNG>(src: IPNGLike, dst: T): T;
export default boxScaling;
