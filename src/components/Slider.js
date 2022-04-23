import { styled } from '@stitches/react';


const PercentZone = styled()

const SliderContainer = styled('div',{
    width: "400px",
    height: "300px",
    backgroundColor: "red"
});

const Slider = () =>{
    return (
        <SliderContainer>
            
            <input type="range" min="1" max="10" >
            </input>
        </SliderContainer>
    );
}

export default Slider;