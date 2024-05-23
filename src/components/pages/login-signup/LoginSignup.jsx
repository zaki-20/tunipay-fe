import React from "react";
import * as Components from "./Component";
import tunipayLogo1 from "../../../assets/tunipay-logo/Logo1.png";
import tunipayLogo2 from "../../../assets/tunipay-logo/Logo2.png";
function App() {
  const [signIn, toggle] = React.useState(true);
  return (
    <div className="flex justify-center items-center  h-screen">
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.LogoWrapper>
              <Components.FormLogo
                src={tunipayLogo1}
                alt=""
              ></Components.FormLogo>
              <Components.FormLogo
                src={tunipayLogo2}
                alt=""
              ></Components.FormLogo>
            </Components.LogoWrapper>
            <Components.FormTitle>Sign Up</Components.FormTitle>
            <Components.FormSubTitle>
              Welcome back! Please enter your details.
            </Components.FormSubTitle>

            <Components.Label>Name*</Components.Label>
            <Components.Input type="text" placeholder="Name" />

            <Components.Label>Email*</Components.Label>
            <Components.Input type="email" placeholder="Email" />

            <Components.Label>Phone number*</Components.Label>
            <Components.Input type="tel" placeholder="Phone Number" />

            <Components.Label>Address*</Components.Label>
            <Components.Input type="address" placeholder="Address" />

            <Components.Label>Password*</Components.Label>
            <Components.Input type="password" placeholder="Password" />

            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.LogoWrapper>
              <Components.FormLogo
                src={tunipayLogo1}
                alt=""
              ></Components.FormLogo>
              <Components.FormLogo
                src={tunipayLogo2}
                alt=""
              ></Components.FormLogo>
            </Components.LogoWrapper>
            <Components.FormTitle>Sign in</Components.FormTitle>
            <Components.FormSubTitle>
              Welcome back! Please enter your details.
            </Components.FormSubTitle>

            <Components.Label>Email</Components.Label>
            <Components.Input type="email" placeholder="Email" />

            <Components.Label>Password</Components.Label>
            <Components.Input type="password" placeholder="Password" />

            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button>Sigin In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Connect Worldwide</Components.Title>
              <Components.Paragraph>
                Register to your new account to access
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Back To Login
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Connect Worldwide</Components.Title>
              <Components.Paragraph>
                Login to your original account to access
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Back to Sigin Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default App;
