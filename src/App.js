import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
//Views
import HomeViews from './redux/views/HomeViews';
import RegistrationViews from './redux/views/RegistrationViews';
import LoginViews from './redux/views/LoginViews';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import UserMenu from './Components/HeaderMenu/UserMenu';
//Components
import Container from './Components/Container/Container';
import AppBar from './Components/HeaderMenu/AppBar/AppBar';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import ContactForm from './Components/ContactForm/ContactForm';
//utils
//import { routes } from './utils/routes';

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
            <PublicRoute path="/login" restricted redirectTo="/contactsForm">
              <LoginViews />
            </PublicRoute>
            {/*---------------------- PrivateRoute */}
            {/*=================== ContactForm ===================*/}
            <PrivateRoute path="/contactsForm" redirectTo="/login">
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

//  {/* <Route path="/contactsForm" exact component={ContactForm} />
//         <Route path="/filter" exact component={Filter} />
//         <Route path="/contactList" exact component={ContactList} /> */}
// {/* <Route path="/" exact component={HomeViews} /> */}
//           <Route path="/register" component={RegistrationViews} />
//           <Route path="/login" component={LoginViews} />
