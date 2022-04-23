
import { styled } from '@stitches/react';
import { useEffect, useRef, useState } from 'react';
import "./Slider.css";

const SliderBtnContainer = styled("div",{
    margin: 0,
    padding: 0,
    paddingLeft: "2%",
    display: "flex",
    alignItems: "flex-start"
})

const SliderBtn = styled("label",{
    margin: 0,
    padding: 0,
    paddingRight: "43%",
    width: "33.3%",
    fontWeight: "bold",
    fontSize: "small",
    color: "#a0a0a0"
})

const SliderBtnZone = styled('div', {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "30%",
    display: "flex",
});

const SliderZone = styled('div', {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const PercentZone = styled('div', {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const SliderInput = styled('input', {
    margin: 0,
    padding: 0,
    width: "95%"
});

const SliderValue = styled('div', {
    margin: 0,
    padding: 0,
    position: "absolute",
    paddingLeft: "140px",
    color: "black",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "right"
});

const ValueBox = styled('div', {
    margin: 0,
    padding: 0,
    paddingRight: "30px",
    width: "70%",
    height: "70%",
    border: "solid 1px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    color: "#b3b3b3",
    display: "flex",
    alignItems: "center",
    justifyContent: "right"
});

const SliderContainer = styled('div',{
    width: "400px",
    height: "300px"
});

const Slider = () =>{
    const [sliderVal, setSliderVal] = useState(0);
    const sliderCurrent = useRef();

    const slidingSiderVal = (param) =>{
        setSliderVal(param.target.value);
    };
    const btnSiderVal = (param) =>{
        console.log(sliderCurrent.current.value);
        setSliderVal(parseInt(param.target.outerText));
        sliderCurrent.current.value = parseInt(param.target.outerText);
    };


    return (
        <SliderContainer>
            <PercentZone>
                <SliderValue>{sliderVal}</SliderValue>
                <ValueBox> %</ValueBox>
            </PercentZone>
            <SliderZone>
                <SliderInput id="slider" type="range" min="1" max="100" defaultValue="1" ref={sliderCurrent} onInput={slidingSiderVal} />
            </SliderZone>
            <SliderBtnZone>
                <SliderBtnContainer id="SliderBtncontainer">
                    <SliderBtn id="label1" htmlFor="slider" onClick={btnSiderVal}> 1% </SliderBtn>
                    <SliderBtn id="label2" htmlFor="slider" onClick={btnSiderVal}> 25% </SliderBtn>
                    <SliderBtn id="label3" htmlFor="slider" onClick={btnSiderVal}> 50% </SliderBtn>
                    <SliderBtn id="label3" htmlFor="slider" onClick={btnSiderVal}> 75% </SliderBtn>
                    <SliderBtn id="label3" htmlFor="slider" onClick={btnSiderVal}> 100% </SliderBtn>
                </SliderBtnContainer>
            </SliderBtnZone>
        </SliderContainer>
    );
}

export default Slider;