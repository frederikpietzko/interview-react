export interface Shape{}

export interface Circle extends Shape { 
    radius: number
}
export interface Square extends Shape{
    width: number
}
export interface Rectangle extends  Shape{
    width: number
    height: number
}

export interface Calculations{
    area: number,
    circumference: number
}

export const isCircle = (shape: Shape)  => "radius" in shape
export const isSquare= (shape: Shape)  => "width" in shape
export const isRectangle = (shape: Shape)  => "width" in shape && "height" in shape
