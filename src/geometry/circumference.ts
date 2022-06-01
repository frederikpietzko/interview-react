import {isCircle, isRectangle, isSquare} from "../models";

export const circumference = (shape: any): number | undefined => {
    if (isCircle(shape)) {
        return 2 * Math.PI * shape.radius
    }
    if (isRectangle(shape)) {
        return 2 * shape.width + 2 * shape.heigth
    }
    if (isSquare(shape)) {
        return 4 * shape.width
    }
}
