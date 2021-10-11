//Components
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import ContactForm from './Components/ContactForm/ContactForm';

import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={s.titleContacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
