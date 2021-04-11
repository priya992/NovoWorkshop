export const REQUEST_DATA = 'REQUEST_DATA'
export const INCREMENT_BOARDING_STEP = 'INCREMENT_BOARDING_STEP'
export const DECREMENT_BOARDING_STEP = 'DECREMENT_BOARDING_STEP'
export const RESET_STATE = 'RESET_STATE'

function requestData() {
  return {
    type: REQUEST_DATA
  }
}

/*
  Action for nextbutton on form
*/
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

/*
  Action for backbutton on form
*/
export function decrementStep(formView='') {
  if (formView && formView === 'previewState') {
    return dispatch => {
      dispatch(requestData())
      setTimeout(() => {
        const data = localStorage.getItem('onBoardingFormData');
        dispatch({
          type: DECREMENT_BOARDING_STEP,
          data: JSON.parse(data)
        })
      }, 500)
    }
  }

  return {
    type: DECREMENT_BOARDING_STEP
  }
}

/*
  action to reset all store values and clearing localStorage
*/
export function resetState() {
  localStorage.removeItem('onBoardingFormData');
  return {
    type: RESET_STATE
  }
}
