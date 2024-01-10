export const actionTypes = {
    SUBMIT: 'SUBMIT',
  };
  
  export const submitAction = (payload) => ({
    type: actionTypes.SUBMIT,
    payload,
  });
  