import React, {FormEvent, useCallback, useState} from 'react';
import './App.css';
import {InputForm} from "./InputForm";
import {Calculations, Circle, Rectangle, Shape, Square} from "../models";
import {CalculationResult} from "./CalculationResult";
import {circumference} from "../geometry/circumference";
import {area} from "../geometry/area";

function getShapeFromForm(form: HTMLFormElement): Shape | null {
    const data = new FormData(form)
    const shapeType = data.get("shape")

    if (shapeType === "circle") {
        return {radius: +data.get("radius")!} as Circle
    }
    if (shapeType === "square") {
        return {width: +data.get("width")!} as Square
    }
    if (shapeType === "rectangle") {
        return {width: +data.get("width")!, height: +data.get("height")!} as Rectangle
    }
    return null
}

function App() {
    const [calculations, setCalculations] = useState<Calculations | null>(null)
    const calculate = useCallback((shape: Shape | null) => setCalculations(shape ? {
        area: area(shape) || 0,
        circumference: circumference(shape) || 0
    } : null), [setCalculations])
    const handleSubmit = useCallback((ev: FormEvent<HTMLFormElement>) => {
        const shape = getShapeFromForm(ev.currentTarget)
        calculate(shape)
        ev.preventDefault()
    }, [calculate])

    return (
        <div className="App">
            <h1>Geometry Calculator</h1>
            <InputForm onSubmit={handleSubmit}/>
            {calculations && <CalculationResult calculations={calculations}/>}
        </div>
    );
}

export default App;
