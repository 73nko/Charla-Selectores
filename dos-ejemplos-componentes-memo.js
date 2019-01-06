import React, { Component, lazy, Suspense } from 'react';
import connect from 'react-redux/es/connect/connect';
import styles from './PhoneList.scss';
import('../../components/Phone/Phone');

class PhoneList extends Component {
  render() {
    const { phones, openModal } = this.props;

    const contactsWithPhone = phones.filter(
      ({ phone }) =>
        phone &&
        phone !== ''
    );

    const spanishContacts = contactsWithPhone.filter( ({phone}) => (phone.startsWith('+34') || phone.startsWith('0034')) )
    const foreignContacts = contactsWithPhone.filter(({phone}) => !(phone.startsWith('+34') || phone.startsWith('0034')) )

    const getContacts = (contacts) => contacts.map(({ id, img, model, price }) => {
      return (
        <Phone
          key={`${id}-${model}`}
          id={id}
          image={img}
          title={model}
          price={price}
          moreInfoAction={openModal}
        />
      );
    });

    return (
      <div key="phone-list" className={styles.phones}>
        <h2>Spanish contacts</h2>
        {getContacts(spanishContacts)}
        <h2>Foreign contacts</h2>
        {getContacts(foreignContacts)}
      </div>
    );
  }
}

const mapStateToProps = ({ phoneList, anotherProp }) => {
  return { phoneList, anotherProp };
};

export default connect(mapStateToProps)(PhoneList);


/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

import { createSelector } from 'reselect';

/**
 * Another file.
 */

const contactsWithPhoneSelector = createSelector(
    ({ phoneList }) => (phoneList.filter(({ phone }) => phone && phone !== '')),
    (contactsWithPhone) => ({
        spanishContacts: contactsWithPhone.filter( ({phone}) => (phone.startsWith('+34') || phone.startsWith('0034')) ),
        foreignContacts: contactsWithPhone.filter( ({phone}) => !(phone.startsWith('+34') || phone.startsWith('0034')) )
    })
);

/**
 * Our Component
 */

class PhoneList extends Component {
  render() {
    const { contacts, openModal } = this.props;

    const getContacts = (contacts) => contacts.map(({ id, img, model, price }) => {
      return (
        <Phone
          key={`${id}-${model}`}
          id={id}
          image={img}
          title={model}
          price={price}
          moreInfoAction={openModal}
        />
      );
    });

    return (
      <div key="phone-list" className={styles.phones}>
        <h2>Spanish contacts</h2>
        {getContacts(contacts.spanishContacts)}
        <h2>Foreign contacts</h2>
        {getContacts(contacts.foreignContacts)}
      </div>
    );
  }
}

const mapStateToProps = (appState) => {

  return { 
      contacts: contactsWithPhoneSelector(appState)
    , anotherProp };
};

export default connect(mapStateToProps)(PhoneList);
