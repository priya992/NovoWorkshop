import React, { Component } from 'react'
import { connect } from 'react-redux'
import loadable from '@loadable/component'
import { Modal, Button } from 'antd';
import styles from './styles.scss'
import { resetState, incrementStep, decrementStep } from '../actions'

/*
  Not creating the chunk for header and home component as it is visible to user once loaded
*/
import Header from '@components/Header'


/*
  Creating seperate chunk for Footer and we can load it once user scroll down on the home page.
*/
const FooterSectionView = loadable(
  () =>
    import(
      /* webpackChunkName: "home-footer" */
      /* webpackPrefetch: true */
      '@components/Footer'
    ),
  {
    fallback: null,
  },
);

/*
  Creating seperate chunk for Modal because it will be loaded once user click on Add Button
*/
const GenericModalView = loadable(
  () =>
    import(
      /* webpackChunkName: "modal" */
      /* webpackPrefetch: true */
      '@components/GenericModal'
    ),
  {
    fallback: null,
  },
);

/*
  Creating seperate chunk for OnBoardingForm because it will be loaded once user click on Add Button
*/
const OnBoardingForm = loadable(
  () =>
    import(
      /* webpackChunkName: "OnBoardingForm" */
      /* webpackPrefetch: true */
      '@components/OnBoardingForm'
    ),
  {
    fallback: null,
  },
);

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  showModal() {
    this.setState({
      isModalVisible: true
    })
  };

  handleClose() {
    const { resetStateHandler } = this.props
    this.setState({
      isModalVisible: false
    })
    resetStateHandler()
  };

  render() {
    const { reviewFormFields, isFetching, formInfo, onBoardingStep, modalTitle, incrementStepHandler, decrementStepHandler } = this.props
    const { isModalVisible } = this.state

    return (
       <>
        <Header />
        <div className={styles.onboard}>User On-Boarding Home Page</div>
        <div className={styles.homeContainer}>
          <span className={styles.btnLabel}>Please click button: </span>
          <Button type="primary" onClick={() => this.showModal()}>
            User On-Board
          </Button>
        </div>
        {true && <FooterSectionView />}
        {isModalVisible &&
          <GenericModalView
            modalTitle={modalTitle}
            isModalVisible={isModalVisible}
            handleClose={() => this.handleClose()}
            children={
              <OnBoardingForm
                onBoardingStep={onBoardingStep}
                incrementStepHandler={incrementStepHandler}
                decrementStepHandler={decrementStepHandler}
                formInfo={formInfo}
                reviewFormFields={reviewFormFields}
                handleSubmit={() => this.handleClose()}
              />
            }
          />
        }
       </>
    );
  }
}

const bindAction = (dispatch) => ({
    incrementStepHandler: (formItems, data) => {
      return dispatch(incrementStep(formItems, data))
    },
    decrementStepHandler: (formView) => dispatch(decrementStep(formView)),
    resetStateHandler: (data) => dispatch(resetState(data)),
});

const mapStateToProps = state => ({
    isFetching: state.FormDataReducer.isFetching,
    formInfo: state.FormDataReducer.formInfo,
    onBoardingStep: state.FormDataReducer.onBoardingStep,
    modalTitle: state.FormDataReducer.modalTitle,
    reviewFormFields: state.FormDataReducer.reviewFormFields,
});

export default connect(mapStateToProps, bindAction)(Main)
