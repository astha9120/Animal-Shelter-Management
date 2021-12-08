
import './App.css';
import {Home, SignIn, Events, SignUp, MainPage, AdoptionForm, DonationForm, CareTakerForm} from "./pages";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {connect} from 'react-redux'
import { createStore } from "redux";
import { Provider, saveState} from "react-redux";
import reducer from './reducers/rootReducer'
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export const StoreProvider = ({children}) =>
{
  return <Provider store={store}>
      {children}
  </Provider>
}

function App({emailId}) {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          {emailId === "" ? <Home /> : <MainPage />}
        </Route>

        <Route exact path="/signin">
          {emailId !== "" ? <MainPage /> : <SignIn />}
          {/* <SignIn /> */}
        </Route>  

        <Route exact path="/signup">
          {emailId !== "" ? <MainPage /> : <SignUp />}
          {/* <SignUp /> */}
        </Route>

        <Route exact path="/main">
          {emailId === "" ? <Home /> : <MainPage />}
        </Route>

        <Route exact path="/adoptionform">
          {emailId === "" ? <Home /> : <AdoptionForm />}
        </Route>

        <Route exact path="/events">
        <Events />
        </Route>

        <Route exact path="/donationform">
          {emailId === "" ? <Home /> : <DonationForm />}
        </Route>
        
        <Route exact path="/caretakerform">
          {emailId === "" ? <Home /> : <CareTakerForm />}
        </Route>

        <Route exact path="*">
          {emailId === "" ? <Home /> : <MainPage />}
        </Route>
      </Switch>
    </Router>    
  </div>
  );
}


const mapStatesToProps = (store) =>{
  return {
    emailId : store.userReducer.emailId
  }
}
export default connect(mapStatesToProps,null)(App);