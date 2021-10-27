import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { Button, Table, Image } from 'antd'
import { getAllContacts, deleteContact } from './api/contacts'

const Contact = (props) => {
  const [contactList, setContactList] = useState(props.contactList)
  const styles = {
    table: { width: "80%", marginLeft: "10%", marginRight:"10%" },
    heading: { margin: '20px auto 20px auto' }
  }
  const columns = [
    {
      title: 'Image',
      key: 'avatar',
      render: (text, record) => (
        <Image
          width={50}
          height={50}
          src={record.avatar}
        />
      ),
    },
    {
      title: 'First Name', dataIndex: 'first_name', key: 'first_name',
    },
    {
      title: 'Last Name', dataIndex: 'last_name', key: 'last_name',
    },
    {
      title: 'Action',
      key: 'DELETE',
      render: (text, record) => (
        <Button size='small' danger onClick={() => { props.deleteContact(record.id) }}>
          DELETE
        </Button>
      ),
    },
  ];

  useEffect(() => { props.getAllContacts() }, [])
  useEffect(() => { setContactList(props.contactList) }, [props.contactList])

  return (
    <section>
      <div style={{ textAlign: 'center' }}>
        <h2
          style={styles.heading}
        >
          Contacts
        </h2>
        <Table style={styles.table} dataSource={contactList} columns={columns} />;
      </div>
    </section>
  );
}

const mapStateToProps = ({ contact }) => ({
  contactList: contact.contactList,
})

const mapDispatchToProps = {
  getAllContacts,
  deleteContact
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);