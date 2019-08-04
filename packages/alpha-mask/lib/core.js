"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pngjs_1 = require("pngjs");
const bluebird_1 = __importDefault(require("bluebird"));
const scaling_1 = __importDefault(require("./scaling"));
const util_1 = require("./util");
exports._parsePNGAsync = bluebird_1.default.promisify(pngjs_1.PNG.prototype.parse);
function mergeMask(img, mask) {
    return bluebird_1.default.props({
        img,
        mask,
    })
        .then(async ({ img, mask, }) => {
        const { width, height } = img;
        if (width !== mask.width || height !== mask.height) {
            const sc = width / mask.width;
            const w = (mask.width * sc) | 0;
            const h = (mask.height * sc) | 0;
            if (w !== width || h !== height) {
                throw new RangeError(`img width/height not same and can't scaling, img { ${JSON.stringify({
                    width,
                    height,
                })} }, mask { ${JSON.stringify({
                    width: mask.width,
                    height: mask.height,
                })} } => scaling { ${JSON.stringify({
                    width: w,
                    height: h,
                })} }`);
            }
            const writeStream = createPNGObject({
                width,
                height,
            });
            scaling_1.default(mask, writeStream);
            mask = writeStream;
        }
        return util_1._mergeMaskSync(img, mask);
    });
}
exports.mergeMask = mergeMask;
function createPNGObject(options) {
    return new pngjs_1.PNG({
        filterType: 4,
        ...options,
    });
}
exports.createPNGObject = createPNGObject;
function parseFromStream(img) {
    if (img instanceof pngjs_1.PNG) {
        return new bluebird_1.default(function (resolve, reject) {
            img.on('parsed', function () {
                resolve(this);
            });
            img.on('error', reject);
        });
    }
    return parseFromStream(img.pipe(createPNGObject()));
}
exports.parseFromStream = parseFromStream;
function parseFromBuffer(buf, png = createPNGObject()) {
    return exports._parsePNGAsync.call(png, buf);
}
exports.parseFromBuffer = parseFromBuffer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxpQ0FBd0M7QUFDeEMsd0RBQWdDO0FBQ2hDLHdEQUFtQztBQUVuQyxpQ0FBd0M7QUFHM0IsUUFBQSxjQUFjLEdBQUcsa0JBQVEsQ0FBQyxTQUFTLENBQUMsV0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUt0RSxTQUFnQixTQUFTLENBQUMsR0FBUSxFQUFFLElBQVM7SUFFNUMsT0FBTyxrQkFBUSxDQUFDLEtBQUssQ0FBQztRQUNwQixHQUFHO1FBQ0gsSUFBSTtLQUNKLENBQUM7U0FDRCxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQ1osR0FBRyxFQUNILElBQUksR0FJSixFQUFFLEVBQUU7UUFFSixNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUU5QixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxFQUNsRDtZQUNDLE1BQU0sRUFBRSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRTlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVqQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLE1BQU0sRUFDL0I7Z0JBQ0MsTUFBTSxJQUFJLFVBQVUsQ0FBQyxzREFBc0QsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDekYsS0FBSztvQkFDTCxNQUFNO2lCQUNOLENBQUMsY0FBYyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUM5QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDbkIsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDbkMsS0FBSyxFQUFFLENBQUM7b0JBQ1IsTUFBTSxFQUFFLENBQUM7aUJBQ1QsQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNQO1lBRUQsTUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDO2dCQUNuQyxLQUFLO2dCQUNMLE1BQU07YUFDTixDQUFDLENBQUM7WUFFSCxpQkFBVSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztZQUU5QixJQUFJLEdBQUcsV0FBVyxDQUFDO1NBQ25CO1FBRUQsT0FBTyxxQkFBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFqREQsOEJBaURDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLE9BQW9CO0lBRW5ELE9BQU8sSUFBSSxXQUFHLENBQUM7UUFDZCxVQUFVLEVBQUUsQ0FBQztRQUNiLEdBQUcsT0FBTztLQUNWLENBQUMsQ0FBQztBQUNKLENBQUM7QUFORCwwQ0FNQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxHQUF5QjtJQUV4RCxJQUFJLEdBQUcsWUFBWSxXQUFHLEVBQ3RCO1FBQ0MsT0FBTyxJQUFJLGtCQUFRLENBQU0sVUFBVSxPQUFPLEVBQUUsTUFBTTtZQUVqRCxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFFaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2QsQ0FBQyxDQUFDLENBQUM7WUFDSCxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztLQUNIO0lBRUQsT0FBTyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQWZELDBDQWVDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLEdBQVcsRUFBRSxNQUFXLGVBQWUsRUFBRTtJQUV4RSxPQUFPLHNCQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUNyQyxDQUFDO0FBSEQsMENBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFBORywgUE5HT3B0aW9ucyB9IGZyb20gJ3BuZ2pzJztcbmltcG9ydCBCbHVlYmlyZCBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgYm94U2NhbGluZyBmcm9tICcuL3NjYWxpbmcnO1xuaW1wb3J0IHsgY3JlYXRlV3JpdGVTdHJlYW0gfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IF9tZXJnZU1hc2tTeW5jIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBSZWFkYWJsZVN0cmVhbSA9IE5vZGVKUy5SZWFkYWJsZVN0cmVhbTtcblxuZXhwb3J0IGNvbnN0IF9wYXJzZVBOR0FzeW5jID0gQmx1ZWJpcmQucHJvbWlzaWZ5KFBORy5wcm90b3R5cGUucGFyc2UpO1xuXG5leHBvcnQgdHlwZSBJUkdCID0gW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuZXhwb3J0IHR5cGUgSVJHQkEgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTWFzayhpbWc6IFBORywgbWFzazogUE5HKVxue1xuXHRyZXR1cm4gQmx1ZWJpcmQucHJvcHMoe1xuXHRcdFx0aW1nLFxuXHRcdFx0bWFzayxcblx0XHR9KVxuXHRcdC50aGVuKGFzeW5jICh7XG5cdFx0XHRpbWcsXG5cdFx0XHRtYXNrLFxuXHRcdH06IHtcblx0XHRcdGltZzogUE5HLFxuXHRcdFx0bWFzazogUE5HLFxuXHRcdH0pID0+XG5cdFx0e1xuXHRcdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBpbWc7XG5cblx0XHRcdGlmICh3aWR0aCAhPT0gbWFzay53aWR0aCB8fCBoZWlnaHQgIT09IG1hc2suaGVpZ2h0KVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zdCBzYyA9IHdpZHRoIC8gbWFzay53aWR0aDtcblxuXHRcdFx0XHRjb25zdCB3ID0gKG1hc2sud2lkdGggKiBzYykgfCAwO1xuXHRcdFx0XHRjb25zdCBoID0gKG1hc2suaGVpZ2h0ICogc2MpIHwgMDtcblxuXHRcdFx0XHRpZiAodyAhPT0gd2lkdGggfHwgaCAhPT0gaGVpZ2h0KVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoYGltZyB3aWR0aC9oZWlnaHQgbm90IHNhbWUgYW5kIGNhbid0IHNjYWxpbmcsIGltZyB7ICR7SlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdFx0d2lkdGgsXG5cdFx0XHRcdFx0XHRoZWlnaHQsXG5cdFx0XHRcdFx0fSl9IH0sIG1hc2sgeyAke0pTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHRcdHdpZHRoOiBtYXNrLndpZHRoLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBtYXNrLmhlaWdodCxcblx0XHRcdFx0XHR9KX0gfSA9PiBzY2FsaW5nIHsgJHtKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFx0XHR3aWR0aDogdyxcblx0XHRcdFx0XHRcdGhlaWdodDogaCxcblx0XHRcdFx0XHR9KX0gfWApXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCB3cml0ZVN0cmVhbSA9IGNyZWF0ZVBOR09iamVjdCh7XG5cdFx0XHRcdFx0d2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0LFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRib3hTY2FsaW5nKG1hc2ssIHdyaXRlU3RyZWFtKTtcblxuXHRcdFx0XHRtYXNrID0gd3JpdGVTdHJlYW07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBfbWVyZ2VNYXNrU3luYyhpbWcsIG1hc2spXG5cdFx0fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBOR09iamVjdChvcHRpb25zPzogUE5HT3B0aW9ucylcbntcblx0cmV0dXJuIG5ldyBQTkcoe1xuXHRcdGZpbHRlclR5cGU6IDQsXG5cdFx0Li4ub3B0aW9ucyxcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZyb21TdHJlYW0oaW1nOiBQTkcgfCBSZWFkYWJsZVN0cmVhbSk6IEJsdWViaXJkPFBORz5cbntcblx0aWYgKGltZyBpbnN0YW5jZW9mIFBORylcblx0e1xuXHRcdHJldHVybiBuZXcgQmx1ZWJpcmQ8UE5HPihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KVxuXHRcdHtcblx0XHRcdGltZy5vbigncGFyc2VkJywgZnVuY3Rpb24gKHRoaXM6IFBORylcblx0XHRcdHtcblx0XHRcdFx0cmVzb2x2ZSh0aGlzKVxuXHRcdFx0fSk7XG5cdFx0XHRpbWcub24oJ2Vycm9yJywgcmVqZWN0KTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBwYXJzZUZyb21TdHJlYW0oaW1nLnBpcGUoY3JlYXRlUE5HT2JqZWN0KCkpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRnJvbUJ1ZmZlcihidWY6IEJ1ZmZlciwgcG5nOiBQTkcgPSBjcmVhdGVQTkdPYmplY3QoKSlcbntcblx0cmV0dXJuIF9wYXJzZVBOR0FzeW5jLmNhbGwocG5nLCBidWYpXG59XG4iXX0=