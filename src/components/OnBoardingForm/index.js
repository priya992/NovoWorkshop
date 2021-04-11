import React from 'react';
import FormFieldsView from '@components/FormFieldsView'
import PreviewForm from '@components/PreviewForm'
import { personalInfo, bussinessInfo } from '../../constants'
import style from './styles.scss'

const OnBoardingForm = ({reviewFormFields, formInfo, onBoardingStep, incrementStepHandler, decrementStepHandler}) => {
  let formValue = []

  if(onBoardingStep === 1) {
    formValue = personalInfo
  } else if(onBoardingStep === 2) {
    formValue = bussinessInfo
  } else {
    formValue = [{personalInfo: personalInfo}, bussinessInfo]
    return (
      <PreviewForm
        reviewFormFields={reviewFormFields}
        onBoardingStep={onBoardingStep}
        decrementStepHandler={decrementStepHandler}
      />
    )
  }
  return (
    <FormFieldsView
      formValue={formValue}
      onBoardingStep={onBoardingStep}
      incrementStepHandler={incrementStepHandler}
      decrementStepHandler={decrementStepHandler}
      formInfo={formInfo}
      reviewFormFields={reviewFormFields}
    />
  )
}

export default React.memo(OnBoardingForm);
