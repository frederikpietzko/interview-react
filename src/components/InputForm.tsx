import {FormEventHandler, useState} from "react";
import {capitalize} from "../utils";


export const InputForm = (props: { onSubmit?: FormEventHandler<HTMLFormElement> }) => {
    const [shapeType, setShapeType] = useState("circle")

    return (
        <form onSubmit={props.onSubmit}  method="">
            <fieldset>
                <legend>Select a shape</legend>
                {["circle", "square", "rectangle"].map((value, key)=> (
                    <div key={key}>
                        <input type="radio" id={`shape-${value}`} name="shape" value={value}
                               checked={value === shapeType} onChange={() => setShapeType(value)}/>
                        <label htmlFor={`shape-${value}`}>{capitalize(value)}</label>
                    </div>

                ))}
            </fieldset>
            <fieldset>
                <legend>{capitalize(shapeType)} Properties</legend>
                {shapeType === "circle" && <div>
                    <label>Radius<br/>
                        <input type="number" name="radius" defaultValue={0} />
                    </label>
                </div>}
                {(shapeType === "square" || shapeType === "rectangle") && <div>
                    <label>Width<br/>
                        <input type="number" name="width" defaultValue={0}/>
                    </label>
                </div>}
                {shapeType === "rectangle" && <div>
                    <label>Height<br/>
                        <input type="number" name="height" defaultValue={0}/>
                    </label>
                </div>
                }
            </fieldset>
            <div>
                <button type="submit">Calculate</button>
            </div>
        </form>
    )
}
