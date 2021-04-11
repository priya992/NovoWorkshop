import React from 'react';
import style from './styles.scss'

const Preview = ({reviewFormFields, onBoardingStep, decrementStepHandler}) => {
  const fieldValue = Object.keys(reviewFormFields)
  return (
    <div className={style.previewContainer}>
      {
        fieldValue.map((data, index) => {
          let heading = 'Personal Info'
          if(data === 'businessInfo') {
            heading = 'Business Info'
          } else if(data === 'debitInfo') {
            heading = 'Debit Card Info'
          }
          return (
            <div key={index} className={style.cardSection}>
              <div className={style.previewHead}>{heading}</div>
              {reviewFormFields[data].map((field, idx) => {
                return (
                  <div key={idx} className={style.section}>
                    <div className={style.label}>{field.label}</div>
                    <div className={style.value}>{field.value}</div>
                  </div>
                )
              })}
            </div>
          )
        })
      }
      <div className={style.btnContainer}>
        <button className={style.btn} onClick={decrementStepHandler}>
          Back
        </button>
        <button className={style.btn}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default Preview;
