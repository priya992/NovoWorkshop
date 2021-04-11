export const REQUEST_DATA = 'REQUEST_DATA'
export const SAVE_DATA = 'SAVE_DATA'
export const GET_DATA = 'GET_DATA'
export const INCREMENT_BOARDING_STEP = 'INCREMENT_BOARDING_STEP'
export const DECREMENT_BOARDING_STEP = 'DECREMENT_BOARDING_STEP'
export const RESET_STATE = 'RESET_STATE'

function requestData() {
  return {
    type: REQUEST_DATA
  }
}

function receivedData(json) {
  return {
    type: GET_DATA,
    apps: json
  }
}

function savedData(json) {
  return {
    type: SAVE_DATA,
    apps: json
  }
}

export function fetchData() {
  return dispatch => {
    dispatch(requestData())

    //TODO needs to add localStorage here...
    // return fetch(contentPage1)
    //   .then(response => response.json())
    //   .then(json => dispatch(receivedData(json)))
  }
}

export function incrementStep(formRawValues, data) {
  return dispatch => {
    dispatch(requestData())
    setTimeout(() => {
      localStorage.setItem('onBoardingFormData', JSON.stringify(formRawValues));
      dispatch({
        type: INCREMENT_BOARDING_STEP,
        formRawValues,
        data
      })
    }, 500)
  }
}


export function decrementStep() {
  return {
    type: DECREMENT_BOARDING_STEP
  }
}

export function resetState() {
  localStorage.removeItem('onBoardingFormData');
  return {
    type: RESET_STATE
  }
}
