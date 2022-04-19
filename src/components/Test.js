import { styled } from '@stitches/react';

const Toggleswitch = styled('div', {
    background: "#ccc",
    width: "80px",
    height: "30px",
    overflow: "hidden",
    borderRadius: "3px",
    display: "inline-block",
    verticalAlign: "middle",
    margin: "0 10px",

    variants: {
        '&:after': {
            content: " ",
            display: "block",
            width: "40px",
            height: "30px",
            backgroundColor: "@active",
            border: "3px solid #fff",
            transition: "all 0.1s ease-in-out"
            },
        '.active':{
            '&:after':{
                margin:"left 40px"
            }
        }
    },
})


const Label = styled('label',{
    width: "150px",
    height: "25px",
    backgroundColor: "#808080",
    borderRadius: "70px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px",
    display: "flex",
})

const InvisibleCheckBox = styled('input', {
    opacity: "100",
    position: "absolute",
})


const Test = () =>{

    return (
        <div className="toggle">
            <InvisibleCheckBox type="checkbox"/>
            <Label for="InvisibleCheckBox">
                <div className='brief'>
                    B
                </div>
                <div className='specize'>
                    S
                </div>
                <div className='ball'></div>
            </Label>
        </div>
    );
}

export default Test;
