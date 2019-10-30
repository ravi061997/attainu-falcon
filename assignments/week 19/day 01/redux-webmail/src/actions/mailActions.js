export const fetchMails = () => {
  return {
    type: "FETCH_MAILS"
  };
};

export const receiveMails = payload => {
  return {
    type: "RECEIVE_MAILS",
    payload: payload
  };
};

export const readAction = mail => {
  return {
    type: "READ_ACTION",
    mail: mail
  };
};
