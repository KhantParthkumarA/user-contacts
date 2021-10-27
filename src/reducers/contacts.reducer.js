const initialState = {
  contactList: []
}

export const contact = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_ALL_CONTACTS' : {
      state.contactList = payload
      const contactList = Object.assign([], payload.data)
      state.contactList = contactList
      return { ...state, contactList }
    }
    case 'DELETE_CONTACT' : {
      const contactList = Object.assign([], state.contactList)
      const foundIndex = contactList.findIndex(oneCt => oneCt.id === payload.id);
      contactList.splice(foundIndex, 1)
      state.contactList = contactList
      return { ...state, contactList }
    }
  }
  return state
}
