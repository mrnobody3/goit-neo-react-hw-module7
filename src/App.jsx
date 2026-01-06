import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="App">
      <header>
        <h1>Phonebook</h1>
      </header>
      <main>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </main>
    </div>
  );
}

export default App;
