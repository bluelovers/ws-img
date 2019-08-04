import _boxScaling from 'png-scale/algos/box-scaling';
import { PNG } from 'pngjs';

export interface IPNGLike extends Pick<PNG, 'width' | 'height' | 'data'>
{

}

export function boxScaling<T extends IPNGLike | PNG>(src: IPNGLike, dst: T)
{
	_boxScaling(src, dst, 0, 0, src.width, src.height, 0, 0, dst.width, dst.height);

	return dst
}

export default boxScaling
