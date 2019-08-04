/**
 * Created by user on 2019/8/5.
 */
import { PNG } from 'pngjs';
import { buffer as getStream } from 'get-stream';
import { createWriteStream, pathExistsSync, ensureWriteStream, outputFile, outputFileSync } from 'fs-iconv';
import Bluebird from 'bluebird';

export function generateStream(png: PNG)
{
	return png.pack()
}

export function generateAsync(png: PNG)
{
	return Bluebird.resolve(getStream(generateStream(png)))
}

export function generateSync(png: PNG)
{
	return PNG.sync.write(png)
}

export function outputStream(file: string, png: PNG)
{
	return generateStream(png).pipe(ensureWriteStream(file))
}

export function outputAsync(file: string, png: PNG)
{
	return generateAsync(png).tap(buf => outputFile(file, buf))
}

export function outputSync(file: string, png: PNG)
{
	outputFileSync(file, generateSync(png));

	return png
}

export default generateAsync
