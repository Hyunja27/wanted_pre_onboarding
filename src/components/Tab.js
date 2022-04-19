import { styled } from '@stitches/react';
import "./Tab.css";

const RadioInput = styled('input', {

})

const Active = styled("div", {
    padding: "0",
    margin: "0",
    width: "50%",
    height: "25px",
    borderRadius: "70px",
    backgroundColor: "rgba(255,255,255,20)",
    position: "absolute",
    transition: "transform 0.14s linear",
    zIndex: "-1"
})


const Tab = () =>{
    return (
        <div>
            <RadioInput id='value1' name="hirice" type='radio' value='감자'/>
            <RadioInput id='value2' name="hirice" type='radio' value='고구마'/> 고구마
            <RadioInput id='value3' name="hirice" type='radio' value='카레라이스'/> 카레라이스
        </div>
    );
}

export default Tab;
