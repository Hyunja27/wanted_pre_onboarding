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
    transition: "transform 0.28s linear"
})

const Label = styled('label',{
    padding: 0,
    margin: 0,
    width: "350px",
    height: "2px",
    backgroundColor: "#ebebeb",
    position: "relative",
    alignItems: "center",
    display: "flex",
    borderRadius: "70px",
})

const NameLabelContainer = styled("div",{
    display: "flex"
})

const NameLabel = styled("label",{
    width: "33.3%",
    fontWeight: "bold",
    color: "#a0a0a0"
})

const TabContainer = styled("div", {
    padding: "2em",
    alignItems: "center"
})


const Tab = () =>{
    return (
        <TabContainer id="container">
            <RadioInput id='value1' name="food" type='radio' value='감자' defaultChecked/>
            <RadioInput id='value2' name="food" type='radio' value='고구마' />
            <RadioInput id='value3' name="food" type='radio' value='카레라이스'/>
            <NameLabelContainer id="namelabelcontainer">
                <NameLabel id="label1" htmlFor="value1"> 감자 </NameLabel>
                <NameLabel id="label2" htmlFor="value2"> 고구마 </NameLabel>
                <NameLabel id="label3" htmlFor="value3"> 카레라이스 </NameLabel>
            </NameLabelContainer>
            <Label id="label" htmlFor="value1 value2 value3">
                <Active id="active"></Active>
            </Label>
        </TabContainer>
    );
}

export default Tab;

