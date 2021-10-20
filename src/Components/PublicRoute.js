import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/contactsForm',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouidRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouidRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
