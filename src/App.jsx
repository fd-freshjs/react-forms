import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginPage } from "./pages/Login";
import Home from "./pages/Home";
import PageNotFound from './pages/404';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  render() {

    return (
      <BrowserRouter>
        <header>
          <div> LOGO</div>

          <nav>
            <div>
              <Link to="/">
                Home
              </Link>
            </div>
            <div>
              <Link to="/login">
                Login
              </Link>
            </div>
          </nav>

        </header>

        <main>

          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/login'>
              <LoginPage />
            </Route>

            <Route path='*'>
              <PageNotFound />
            </Route>

          </Switch>
        </main>

      </BrowserRouter>
    );
  }
}

/* 
  Добавить маршруты на страницу профиля польз, и на страницу регистрации
*/

export default App;
