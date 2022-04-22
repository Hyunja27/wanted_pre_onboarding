import { styled } from '@stitches/react';
import "./Input.css";

const InputMaker = styled("div", {
    margin: 0,
    padding: 0
})

const InputZone = styled("input",{
    margin: 0,
    padding: 0,
    width: "90%",
    height: "30%"
})

const NameLabel = styled("label",{
    margin: 0,
    padding: 0,
    marginLeft: "5%",
    marginTop: "2%",
    display: "inline-block",
    textAlign: "left",
    fontSize: "small",
    color: "#6e6f6a",
    width: "100%",
    height: "30%"
})

const FormContantContainer = styled("div",{
    margin: 0,
    padding: 0,
    position: "relative",
    justifyItems:"center",
    alignContent: "center",
    width: "100%",
    height: "50%"
})

const FormContainer = styled("form",{
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
    display: "block",
    justifyItems:"center"
})

const BackGroundZone = styled("div",{
    margin: 0,
    padding: 0,
    width: "300px",
    height: "150px",
    justifyContent: "center",
    backgroundColor: "#f1f1e6",
    cursor: "url('../images/handCursor.png')"
})

const Input = () =>{
    return (
        <BackGroundZone>
            <FormContainer name="해당 폼의 이름" action="값을 보낼 주소" method="post">
                <FormContantContainer id="emailZone"> 
                    <NameLabel for='emailInput'> E-mail</NameLabel>
                    <InputZone id='emailInput' type='email' name='user_email' placeholder='E-mail' />

                </FormContantContainer>
                <FormContantContainer id="passwordZone">
                    <NameLabel for='passwordInput'> Password</NameLabel>
                    <InputZone id='passwordInput' type='password' name='userPassword' placeholder='Password'/>
                </FormContantContainer>
            </FormContainer>
        </BackGroundZone>
    );
}

export default Input;