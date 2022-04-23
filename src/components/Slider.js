
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
    padding: "3px",
    marginRight: "40%",
    width: "33.3%",
    fontWeight: "bold",
    fontSize: "3px",
    borderRadius: "5px",
    color: "#a0a0a0",
    backgroundColor: "#efefef"
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

const SliderSelector = styled('div', {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "10px",
    position: "absolute",
});

const SliderSelectorBtn = styled('div', {
    margin: 0,
    padding: 0,
    width: "20px",
    height: "20px",
    backgroundColor: "red",
    position: "absolute",
    bottom: 0
});

const SliderInput = styled('input', {
    margin: 0,
    padding: 0,
    width: "100%",
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
    padding: "2em",
    width: "400px",
    height: "300px"
});

const Slider = () =>{
    const [sliderVal, setSliderVal] = useState(1);
    const sliderCurrent = useRef();
    const customSlider = useRef();

    const slidingSiderVal = (param) =>{
        setSliderVal(param.target.value);
        console.log(param.target.value);
        customSlider.current.style.left = param.target.value + "%";
    };
    const btnSiderVal = (param) =>{
        setSliderVal(parseInt(param.target.outerText));
        sliderCurrent.current.value = parseInt(param.target.outerText);
        customSlider.current.style.left = param.target.outerText;
    };


    return (
        <SliderContainer>
            <PercentZone>
                <SliderValue>{sliderVal}</SliderValue>
                <ValueBox> %</ValueBox>
            </PercentZone>
            <SliderZone>
                <SliderInput id="slider" type="range" min="1" max="100" defaultValue="1" ref={sliderCurrent} onInput={slidingSiderVal} />
                {/* <SliderSelector>
                    <SliderSelectorBtn ref={customSlider}>
                    </SliderSelectorBtn>
                </SliderSelector> */}
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