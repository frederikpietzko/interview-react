import {Calculations} from "../models";
import React from "react";

export const CalculationResult = (props: { calculations: Calculations }) => (
    <>
        <p>The <b>Area</b> is <b>{props.calculations.area}</b>.</p>
        <p>The <b>Circumference</b> is <b>{props.calculations.circumference}</b>.</p>
    </>

)
