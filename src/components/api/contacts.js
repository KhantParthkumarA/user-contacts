import axios from 'axios'
import { errorMessage, successMessage } from '../../utils/utils'
const api_base_url = 'https://reqres.in'

const deleteContact = (id) => {
  return (dispatch) => {
      successMessage('Contact Deleted successfully')
      dispatch({ type: 'DELETE_CONTACT', payload: { id: id } })
  }
}

const getAllContacts = () => {
  return (dispatch) => {
    const config = { headers: { "content-type": "application/json" } };
    axios.get(`${api_base_url}/api/users`, config).then(res => {
      if (!res || !res.data)
        errorMessage('Faild to get the contacts')
      const { data } = res
      successMessage('Contacts fetched successfully')
      dispatch({ type: 'GET_ALL_CONTACTS', payload: data })
    }).catch(e => {
      errorMessage(e.message)
    })
  }
}

export {
  getAllContacts,
  deleteContact
};