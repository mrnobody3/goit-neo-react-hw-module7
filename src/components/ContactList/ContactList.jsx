import clsx from "clsx";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={clsx(css.list)}>
      {contacts.map((task) => (
        <li key={task.id} className={clsx(css.item)}>
          <Contact data={task} onDelete={(id) => dispatch(deleteContact(id))} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
