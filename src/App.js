import React from 'react';
import { useAuth0 } from './contexts/auth0-contexts';
import 'bulma/css/bulma.css';
import Header from './components/Header';

function App() {
  const { isLoading, user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  if(!isLoading) {
    console.log(user)
    console.log(loginWithRedirect)
    console.log(isAuthenticated)
  }
  return (
    <>
      <Header />
      <div className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            {isLoading && (
              <>
                Loading...
              </>
            )}
            {!isLoading && !user && (
              <>
                <h1>Click Below!</h1>
                <button onClick={loginWithRedirect} className="button is-danger">
                  Login
                </button>
              </>
            )}
            {!isLoading && user && (
              <>
                <h1>You are logged in!</h1>
                <p>Hello {user.name}</p>

                {user.picture && <img src={user.picture} alt="My Avatar" height="60" width="60"/>}<hr />

                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="button is-small is-dark"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;