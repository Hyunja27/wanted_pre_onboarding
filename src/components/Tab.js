import { styled } from '@stitches/react';
import "./Tab.css";

const RadioInput = styled('input', {
    opacity: "50"
})

const Active = styled("div", {
    padding: "0",
    margin: "0",
    width: "33%",
    height: "2px",
    borderRadius: "70px",
    backgroundColor: "rgba(100,100,100)",
    position: "absolute",
    transition: "transform 0.14s linear",
})

const Label = styled('label',{
    width: "250px",
    height: "2px",
    backgroundColor: "#ebebeb",
    borderRadius: "70px",
    alignItems: "center",
    display: "flex",
    position: "relative"
})


const Tab = () =>{
    return (
        <div id="container">
            <RadioInput id='value1' name="hirice" type='radio' value='감자'/>
            <label for="value1"> Hello </label>
            <RadioInput id='value2' name="hirice" type='radio' value='고구마'/>
            <label for="value2"> genius </label>
            <RadioInput id='value3' name="hirice" type='radio' value='카레라이스'/>
            <label for="value3"> spark </label>
            <Label id="label" for="value1 value2 value3">
                <Active id="active"></Active>
            </Label>
        </div>
    );
}

export default Tab;
