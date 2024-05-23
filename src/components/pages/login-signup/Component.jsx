import styled from "styled-components";
import sideImage from "../../../assets/Side.png"; // Adjust the path if necessary

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  /* overflow: hidden; */
  width: 1000px;
  max-width: 100%;
  min-height: 700px;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signinIn !== true
      ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 `
      : null}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(100%);` : null}
`;

export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  position: relative;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
  margin: 0;
`;

export const FormTitle = styled.h1`
  font-weight: bold;
  font-size: 20px;
  align-self: flex-start;
  margin-bottom: 10px;
  margin-top: 50px;
`;
export const FormSubTitle = styled.h1`
  font-weight: 400;
  margin: 0;
  font-size: 16px;
  align-self: flex-start;
  margin-bottom: 20px;
`;
export const Label = styled.label`
  color: black;
  align-self: flex-start;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 10px;
  border: 1px solid #2d56ff;
  background-color: #2d56ff;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  width: 100%;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;
export const GhostButton = styled(Button)`
  background-color: #b0b0b052;
  border-color: #dddddd;
  width: 60%;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;
export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background: #581677;
  background: -webkit-linear-gradient(to right, #581677, #581677);
  background: url(${sideImage}) no-repeat center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 200;
  line-height: 10px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

export const FormLogo = styled.img`
  object-fit: cover;
  width: 40%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 180px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
`;
