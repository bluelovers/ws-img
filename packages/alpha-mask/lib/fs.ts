
import { createReadStream } from 'fs';
import { PNG } from 'pngjs';
import { _parsePNGAsync, createPNGObject, parseFromStream, mergeMask } from './core';
import Bluebird from 'bluebird';

export function parseFromFile(file: string)
{
	return parseFromStream(createReadStream(file))
}

export function mergeMaskByFile(img: string, mask: string)
{
	return Bluebird.props({
		img: parseFromFile(img),
		mask: parseFromFile(mask),
	})
		.then(({
			img,
			mask,
		}) => {
			return mergeMask(img, mask)
		})
	;
}
