import { styled } from '@stitches/react';
import "./Tab.css";

const RadioInput = styled('input', {
    width: 0,
    height: 0,
    opacity: 0
})

const Active = styled("div", {
    padding: 0,
    margin: 0,
    width: "33.3%",
    height: "2px",
    backgroundColor: "#0aaeaf",
    position: "absolute",
    borderRadius: "70px",
    transition: "transform 0.14s linear"
})

const Label = styled('label',{
    padding: 0,
    margin: 0,
    width: "250px",
    height: "2px",
    backgroundColor: "#ebebeb",
    position: "relative",
    alignItems: "center",
    display: "flex",
    borderRadius: "70px",
})


const Tab = () =>{
    return (
        <div id="container">
            <RadioInput id='value1' name="food" type='radio' value='감자'/>
            <label id="label1" htmlFor="value1"> 감자 </label>
            <RadioInput id='value2' name="food" type='radio' value='고구마'/>
            <label id="label2" htmlFor="value2"> 고구마 </label>
            <RadioInput id='value3' name="food" type='radio' value='카레라이스'/>
            <label id="label3" htmlFor="value3"> 카레라이스 </label>

            <Label id="label" htmlFor="value1 value2 value3">
                <Active id="active"></Active>
            </Label>
        </div>
    );
}

export default Tab;

{/* <Tab tabs={[{label: '감자', onClick: () => {}}, {...}]} /> */}