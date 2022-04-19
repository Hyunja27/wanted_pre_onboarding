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


const Toggle = () =>{
    return (
        <div className='toggle'>
            <InvisibleCheckBox id='checkbox' type='checkbox'/>
            <Label id='label' for="checkbox">
                <div id='brief'>
                    기본
                </div>
                <div id='specize'>
                    상세
                </div>
                <Active id='active'></Active>
            </Label>
        </div>
    );
}

export default Toggle;
