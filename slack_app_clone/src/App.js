import './App.css';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header.js'
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit';
function App() {

  const [user, loading] = useAuthState(auth)
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContainer>
          <img src="https://p.kindpng.com/picc/s/146-1461647_icon-slack-logo-hd-png-download.png" alt="slack" />

          <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />
        </AppLoadingContainer>
      </AppLoading>
    )
  }

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>

              <SideBar />
              <Switch>

                <Route exact path="/">
                  <Chat />
                </Route>

              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`
const AppLoadingContainer = styled.div`
  text-align:center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >img {
    width: 100px;
    padding: 20px;
  margin-bottom: 40px;
  }
`