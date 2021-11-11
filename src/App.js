import './App.css';
import Header from './Component/Shared/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Shared/Footer/Footer';
import Account from './Component/Shared/Account/Account/Account';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/account">
              <Account></Account>
            </Route>
            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
