import {isCircle, isRectangle, isSquare} from "../models";

export const area = (shape: any): number | undefined => {
    if (isCircle(shape)) {
        return Math.PI * Math.pow(shape.radius, 2)
    }
    if (isSquare(shape)) {
        return Math.pow(shape.width, 2)
    }
    if (isRectangle(shape)) {
        return shape.width * shape.height
    }
}

