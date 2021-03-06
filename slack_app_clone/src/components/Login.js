import { Button } from "@material-ui/core"
import styled from "styled-components"
import { auth, provider } from "../firebase"

const Login = () => {
  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  }
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://p.kindpng.com/picc/s/146-1461647_icon-slack-logo-hd-png-download.png" alt="slack" />
        <h1>Sign in to the Slack App Clone</h1>
        <p>slack.app.clone</p>

        <Button onClick={signIn}>
          Sign in with google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login


const LoginContainer = styled.div`
  background: #ffff;
  height: 100vh;
  display: grid;
  place-items: center;
`

const LoginInnerContainer = styled.div`
  padding:100px;
  text-align: center;
  background: #fff;
  border-radius: 10px;
  box-shadow:0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top:50px;
    text-transform: inherit !important;
    background: #0a8d48;
    color:#fff;
  }

  > button:hover {
    background: gray;
  }
`