"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const box_scaling_1 = __importDefault(require("png-scale/algos/box-scaling"));
function boxScaling(src, dst) {
    box_scaling_1.default(src, dst, 0, 0, src.width, src.height, 0, 0, dst.width, dst.height);
    return dst;
}
exports.boxScaling = boxScaling;
exports.default = boxScaling;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjYWxpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4RUFBc0Q7QUFRdEQsU0FBZ0IsVUFBVSxDQUEyQixHQUFhLEVBQUUsR0FBTTtJQUV6RSxxQkFBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVoRixPQUFPLEdBQUcsQ0FBQTtBQUNYLENBQUM7QUFMRCxnQ0FLQztBQUVELGtCQUFlLFVBQVUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfYm94U2NhbGluZyBmcm9tICdwbmctc2NhbGUvYWxnb3MvYm94LXNjYWxpbmcnO1xuaW1wb3J0IHsgUE5HIH0gZnJvbSAncG5nanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQTkdMaWtlIGV4dGVuZHMgUGljazxQTkcsICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdkYXRhJz5cbntcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm94U2NhbGluZzxUIGV4dGVuZHMgSVBOR0xpa2UgfCBQTkc+KHNyYzogSVBOR0xpa2UsIGRzdDogVClcbntcblx0X2JveFNjYWxpbmcoc3JjLCBkc3QsIDAsIDAsIHNyYy53aWR0aCwgc3JjLmhlaWdodCwgMCwgMCwgZHN0LndpZHRoLCBkc3QuaGVpZ2h0KTtcblxuXHRyZXR1cm4gZHN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJveFNjYWxpbmdcbiJdfQ==