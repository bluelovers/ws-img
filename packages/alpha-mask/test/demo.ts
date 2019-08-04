/**
 * Created by user on 2019/8/5.
 */
import { createWriteStream, pathExistsSync, ensureWriteStream, outputFile } from 'fs-iconv';
import { mergeMaskByFile, generateAsync, outputAsync } from '../lib';
import FastGlob from '@bluelovers/fast-glob/bluebird';
import * as path from 'path';

mergeMaskByFile(path.join(__dirname, './res/char_002_amiya_2.png'), path.join(__dirname, './res/char_002_amiya_2[alpha].png'))
.then(img => {
	return outputAsync(path.join(__dirname, 'out.png'), img)
})
;

if (0)
{
	FastGlob.async([
			'*.png',
			'!*\[alpha\].png',
		], {
			cwd: 'D:\\Users\\Downloads\\Texture2D',
			absolute: true,
		})
		.mapSeries(async (file) => {
			const p = path.parse(file);
			let mask_file = path.join(p.dir, `${p.name}[alpha]${p.ext}`);

			let bool = pathExistsSync(mask_file);

			if (bool)
			{
				console.log(`[START]`, p.name , `=>`, path.basename(mask_file, p.ext));

				return mergeMaskByFile(file, mask_file)
					.then(img => {
						return outputAsync(path.join(__dirname, 'temp', p.name + p.ext), img)
					})
					.tap(r => {
						console.log(`[DONE]`, p.name , `=>`, path.basename(mask_file, p.ext));
					})
					;
			}
			else
			{
				console.warn(p.name);
			}

		})
	;
}
