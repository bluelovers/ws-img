"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const core_1 = require("./core");
const bluebird_1 = __importDefault(require("bluebird"));
function parseFromFile(file) {
    return core_1.parseFromStream(fs_1.createReadStream(file));
}
exports.parseFromFile = parseFromFile;
function mergeMaskByFile(img, mask) {
    return bluebird_1.default.props({
        img: parseFromFile(img),
        mask: parseFromFile(mask),
    })
        .then(({ img, mask, }) => {
        return core_1.mergeMask(img, mask);
    });
}
exports.mergeMaskByFile = mergeMaskByFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDJCQUFzQztBQUV0QyxpQ0FBcUY7QUFDckYsd0RBQWdDO0FBRWhDLFNBQWdCLGFBQWEsQ0FBQyxJQUFZO0lBRXpDLE9BQU8sc0JBQWUsQ0FBQyxxQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBQy9DLENBQUM7QUFIRCxzQ0FHQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxHQUFXLEVBQUUsSUFBWTtJQUV4RCxPQUFPLGtCQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3JCLEdBQUcsRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLElBQUksRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDO0tBQ3pCLENBQUM7U0FDQSxJQUFJLENBQUMsQ0FBQyxFQUNOLEdBQUcsRUFDSCxJQUFJLEdBQ0osRUFBRSxFQUFFO1FBQ0osT0FBTyxnQkFBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM1QixDQUFDLENBQUMsQ0FDRjtBQUNGLENBQUM7QUFiRCwwQ0FhQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY3JlYXRlUmVhZFN0cmVhbSB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IFBORyB9IGZyb20gJ3BuZ2pzJztcbmltcG9ydCB7IF9wYXJzZVBOR0FzeW5jLCBjcmVhdGVQTkdPYmplY3QsIHBhcnNlRnJvbVN0cmVhbSwgbWVyZ2VNYXNrIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCBCbHVlYmlyZCBmcm9tICdibHVlYmlyZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZyb21GaWxlKGZpbGU6IHN0cmluZylcbntcblx0cmV0dXJuIHBhcnNlRnJvbVN0cmVhbShjcmVhdGVSZWFkU3RyZWFtKGZpbGUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNYXNrQnlGaWxlKGltZzogc3RyaW5nLCBtYXNrOiBzdHJpbmcpXG57XG5cdHJldHVybiBCbHVlYmlyZC5wcm9wcyh7XG5cdFx0aW1nOiBwYXJzZUZyb21GaWxlKGltZyksXG5cdFx0bWFzazogcGFyc2VGcm9tRmlsZShtYXNrKSxcblx0fSlcblx0XHQudGhlbigoe1xuXHRcdFx0aW1nLFxuXHRcdFx0bWFzayxcblx0XHR9KSA9PiB7XG5cdFx0XHRyZXR1cm4gbWVyZ2VNYXNrKGltZywgbWFzaylcblx0XHR9KVxuXHQ7XG59XG4iXX0=