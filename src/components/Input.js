import { styled } from '@stitches/react';
import "./Input.css";
import visible from "../images/visibility.png"
import invisible from "../images/invisibility.png"
import uncheck from "../images/uncheck.png"
import checked from "../images/checked.png"
import { useEffect, useState } from 'react';

const ErrorLine = styled("div", {
    margin: 0,
    padding: 0,
    position: "absolute",
    paddingTop: "2px",
    paddingBottom: "5px",
    left: "15px",
    fontSize: "0.5em",
    color: "#da535e"
});

const InputMaker = styled("img", {
    margin: 0,
    padding: 0,
    position: "absolute",
    paddingTop: "3px",
    right: "20px",
    width: "20px",
    height: "20px"
});

const InputZone = styled("input",{
    margin: 0,
    padding: 0,
    width: "90%",
    height: "30%"
});

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
});

const FormContantContainer = styled("div",{
    margin: 0,
    padding: 0,
    position: "relative",
    justifyItems:"center",
    alignContent: "center",
    width: "100%",
    height: "50%"
});

const FormContainer = styled("form",{
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
    display: "block",
    justifyItems:"center"
});

const BackGroundZone = styled("div",{
    margin: 0,
    padding: 0,
    width: "300px",
    height: "150px",
    justifyContent: "center",
    backgroundColor: "#f1f1e6",
    cursor: "url('../images/handCursor.png')"
});

const validateEmail = (email) => {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
};

const Input = () =>{

    const [mayError, setMayError] = useState("");
    const [emailValue, setEmailValue] = useState(false);
    const [emailIcon, setEmailIcon] = useState(uncheck);
    const [passwordIcon, setpasswordIcon] = useState(visible);
    const [passwordForm, setPasswordForm] = useState("password");

    const isEmailContextError = () => {
        if (emailValue === false){
            setMayError(<ErrorLine> Invaild E-mail address. </ErrorLine>)
        }else{
            setMayError("")
        }
    };

    const changeEmailValue = (param) => {
        if (validateEmail(param.target.value)){
            setEmailIcon(checked);
            setEmailValue(true)
        }else{
            setEmailIcon(uncheck);
            setEmailValue(false)
        }
    };

    const clickPasswordIcon = () =>{
        if (passwordIcon === visible){
            setpasswordIcon(invisible);
            setPasswordForm("password");
        }else{
            setpasswordIcon(visible);
            setPasswordForm("");
        }
    };

    return (
        <BackGroundZone>
            <FormContainer name="해당 폼의 이름" action="값을 보낼 주소" method="post">
                <FormContantContainer id="emailZone"> 
                    <NameLabel forhtml='emailInput'> E-mail</NameLabel>
                    <InputZone id='emailInput' type='email' name='user_email' placeholder='E-mail' onChange={changeEmailValue} onBlur={isEmailContextError} />
                    <InputMaker id="uncheckIcon" src={emailIcon} alt='uncheck'/>
                    {mayError}
                </FormContantContainer>
                <FormContantContainer id="passwordZone">
                    <NameLabel forhtml='passwordInput'> Password</NameLabel>
                    <InputZone id='passwordInput' type={passwordForm} name='userPassword' placeholder='Password'/>
                    <InputMaker id="passwordIcon" src={passwordIcon} alt='invisible' onClick={clickPasswordIcon}/>
                </FormContantContainer>
            </FormContainer>
        </BackGroundZone>
    );
};

export default Input;