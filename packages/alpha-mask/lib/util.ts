
import { PNG } from 'pngjs';
//import OneColor from 'onecolor';
import { IRGBA } from './core';

//export function rgbToAlpha2(R: number, G: number, B: number, A: number = 255)
//{
//	return OneColor([R, G, B, A]).lightness() * 255
//}

export function rgbToAlpha(R: number, G: number, B: number, A: number = 255)
{
	return Math.round(R * 0.30 + G * 0.59 + B * 0.11)
}

export function getPointIndex(img: PNG, x: number, y: number)
{
	return (img.width * y + x) << 2;
}

export function getPointColor(img: PNG, x: number, y: number)
{
	const idx = getPointIndex(img, x, y);

	return [img.data[idx], img.data[idx + 1], img.data[idx + 2], img.data[idx + 3]] as IRGBA
}

export function getPoint(img: PNG, x: number, y: number)
{
	const idx = getPointIndex(img, x, y);

	return {
		idx,
		data: [img.data[idx], img.data[idx + 1], img.data[idx + 2], img.data[idx + 3]] as IRGBA,
	}
}

export function getPointLightness(img: PNG, x: number, y: number)
{
	return rgbToAlpha(...getPointColor(img, x, y))
}

export function _mergeMaskSync(img: PNG, mask: PNG)
{
	const { height, width } = img;

	for (let y = 0; y < height; y++)
	{
		for (let x = 0; x < width; x++)
		{
			const { idx, data } = getPoint(mask, x, y);
			img.data[idx + 3] = rgbToAlpha(...data);
		}
	}

	return img
}
