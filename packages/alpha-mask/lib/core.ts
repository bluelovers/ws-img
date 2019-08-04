
import { PNG, PNGOptions } from 'pngjs';
import Bluebird from 'bluebird';
import boxScaling from './scaling';
import { createWriteStream } from "fs";
import { _mergeMaskSync } from './util';
import ReadableStream = NodeJS.ReadableStream;

export const _parsePNGAsync = Bluebird.promisify(PNG.prototype.parse);

export type IRGB = [number, number, number];
export type IRGBA = [number, number, number, number];

export function mergeMask(img: PNG, mask: PNG)
{
	return Bluebird.props({
			img,
			mask,
		})
		.then(async ({
			img,
			mask,
		}: {
			img: PNG,
			mask: PNG,
		}) =>
		{
			const { width, height } = img;

			if (width !== mask.width || height !== mask.height)
			{
				const sc = width / mask.width;

				const w = (mask.width * sc) | 0;
				const h = (mask.height * sc) | 0;

				if (w !== width || h !== height)
				{
					throw new RangeError(`img width/height not same and can't scaling, img { ${JSON.stringify({
						width,
						height,
					})} }, mask { ${JSON.stringify({
						width: mask.width,
						height: mask.height,
					})} } => scaling { ${JSON.stringify({
						width: w,
						height: h,
					})} }`)
				}

				const writeStream = createPNGObject({
					width,
					height,
				});

				boxScaling(mask, writeStream);

				mask = writeStream;
			}

			return _mergeMaskSync(img, mask)
		})
}

export function createPNGObject(options?: PNGOptions)
{
	return new PNG({
		filterType: 4,
		...options,
	});
}

export function parseFromStream(img: PNG | ReadableStream): Bluebird<PNG>
{
	if (img instanceof PNG)
	{
		return new Bluebird<PNG>(function (resolve, reject)
		{
			img.on('parsed', function (this: PNG)
			{
				resolve(this)
			});
			img.on('error', reject);
		});
	}

	return parseFromStream(img.pipe(createPNGObject()));
}

export function parseFromBuffer(buf: Buffer, png: PNG = createPNGObject())
{
	return _parsePNGAsync.call(png, buf)
}
