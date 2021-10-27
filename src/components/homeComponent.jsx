import React from "react";
import { connect } from "react-redux";
import ContactsComponent from "./contactsComponent";

const HomePage = (props) => {
  return (
    <ContactsComponent />
  )
}

export default connect()(HomePage);