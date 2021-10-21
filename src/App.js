import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
//Views
import HomeViews from './redux/views/HomeViews';
import RegistrationViews from './redux/views/RegistrationViews';
import LoginViews from './redux/views/LoginViews';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
//Components
import Container from './Components/Container/Container';
import AppBar from './Components/HeaderMenu/AppBar/AppBar';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import ContactForm from './Components/ContactForm/ContactForm';

import s from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(authSelectors.getIsFetchCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchCurrentUser && (
      <div className={s.app}>
        <Container>
          <AppBar />

          <Switch>
            {/* ---------------------PublicRoute */}
            {/*=================== HomeViews ===================*/}
            <PublicRoute exact path="/">
              <HomeViews />
            </PublicRoute>
            {/*=================== RegistrationViews ===================*/}
            <PublicRoute path="/register" restricted>
              <RegistrationViews />
            </PublicRoute>
            {/*=================== LoginViews ===================*/}
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginViews />
            </PublicRoute>
            {/*---------------------- PrivateRoute */}
            {/*=================== ContactForm ===================*/}
            <PrivateRoute path="/contacts" redirectTo="/login">
              <h1 className={s.title}>Phonebook</h1>
              <ContactForm />
              <h2 className={s.titleContacts}>Contacts</h2>
              <Filter />
              <ContactList />
            </PrivateRoute>
          </Switch>
        </Container>
      </div>
    )
  );
}

export default App;
