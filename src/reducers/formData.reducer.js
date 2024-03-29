import { RESET_STATE, REQUEST_DATA, INCREMENT_BOARDING_STEP, DECREMENT_BOARDING_STEP} from '../actions';

const initialState = {
    isFetching: false,
    formInfo: [],
    reviewFormFields: {},
    onBoardingStep: 1,
    modalTitle: 'Personal Info'
};

function apps( state=initialState, action={}) {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      });
    case DECREMENT_BOARDING_STEP: {
      let title = ''
      if(state.onBoardingStep === 2) {
        title = 'Personal Info'
      } else if (state.onBoardingStep === 3) {
        title = 'Business Info'
      }

      if (action?.data) {
        return Object.assign({}, state, {
          onBoardingStep: state.onBoardingStep - 1,
          modalTitle: title,
          formInfo: action?.data,
          isFetching: false
        });
      }

      return Object.assign({}, state, {
        onBoardingStep: state.onBoardingStep - 1,
        modalTitle: title
      });
    }
    case INCREMENT_BOARDING_STEP: {
      let title = ''
      if(state.onBoardingStep === 1) {
        title = 'Business Info'
      } else if (state.onBoardingStep === 2) {
        title = 'Review Info'
      }

      return Object.assign({}, state, {
        onBoardingStep: state.onBoardingStep + 1,
        modalTitle: title,
        formInfo: action.formRawValues,
        reviewFormFields: action.data,
        isFetching: false
      });
    }

    case RESET_STATE: {
      return Object.assign({}, state, {
        onBoardingStep: 1,
        modalTitle: 'Personal Info',
        formInfo: [],
        reviewFormFields: {}
      });
    }

    default:
      return state
  }
}

export default apps
