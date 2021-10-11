import React from 'react';
import { connect } from 'react-redux';

import phoneActions from '../../redux/phoneActions';
import phoneSelectors from '../../redux/phoneSelectors';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={s.filter}>
    <label className={s.label}>
      <p className={s.text}>Find contacts by name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </label>
  </div>
);

const mapStateToProps = state => ({
  value: phoneSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(phoneActions.filterContact(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
