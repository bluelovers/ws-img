
import { parseFromStream, createPNGObject, parseFromBuffer, mergeMask } from './core';
import { parseFromFile, mergeMaskByFile } from './fs';
import { generateAsync, generateStream, generateSync, outputAsync, outputStream, outputSync } from './output';

export {
	parseFromStream, createPNGObject, parseFromBuffer, mergeMask,
}

export {
	parseFromFile, mergeMaskByFile,
}

export {
	generateAsync, generateStream, generateSync, outputAsync, outputStream, outputSync,
}

export default mergeMaskByFile
