import { styled } from '@stitches/react';
import "./Toggle.css"

const Label = styled('label',{
    width: "250px",
    height: "25px",
    backgroundColor: "#ebebeb",
    borderRadius: "70px",
    alignItems: "center",
    padding: "2px",
    display: "flex",
    position: "relative",
    zIndex: "1"
})

const InvisibleCheckBox = styled('input', {
    opacity: "0",
    position: "absolute",

})

const Active = styled("div", {
    padding: 0,
    margin: 0,
    marginTop: "1px", 
    width: "50%",
    height: "25px",
    borderRadius: "70px",
    backgroundColor: "rgba(255,255,255,20)",
    position: "absolute",
    transition: "transform 0.19s linear",
    zIndex: "-1"
})

const ToggleContainer = styled("div", {
    padding: "2em",
    alignSelf: "center"
})


const Toggle = () =>{
    return (
        <ToggleContainer className='toggle'>
            <InvisibleCheckBox id='checkbox' type='checkbox'/>
            <Label id='label' htmlFor="checkbox">
                <div id='brief'>
                    기본
                </div>
                <div id='specize'>
                    상세
                </div>
                <Active id='activetoggle'></Active>
            </Label>
        </ToggleContainer>
    );
}

export default Toggle;
