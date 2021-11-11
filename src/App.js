import './App.css';
import Header from './Component/Shared/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Shared/Footer/Footer';
import Account from './Component/Shared/Account/Account/Account';
import NotFound from './Component/Shared/NotFound/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import Bicycles from './Component/Bicycles/Bicycles';
import OrderNow from './Component/OrderNow/OrderNow';

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
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/account">
              <Account></Account>
            </Route>
            <Route exact path="/bicyles">
              <Bicycles></Bicycles>
            </Route>
            <Route exact path="/ordernow">
              <OrderNow></OrderNow>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
