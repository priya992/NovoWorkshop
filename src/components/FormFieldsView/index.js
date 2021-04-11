import React, { useCallback, useEffect, useState } from 'react';
import { Button, Modal, Radio, Space, Input, Form, InputNumber } from 'antd';
import {decoratorFields} from '../../utils'
import styles from './styles.scss'
const { Item } = Form;

const FormView = ({ reviewFormFields, formInfo, formValue, onBoardingStep, incrementStepHandler, decrementStepHandler }) => {
  const [checkedlist, setCheckedList] = useState({});
  const [radioList, setRadioList] = useState({});
  const [radioGroupList, setRadioGroupList] = useState({});

  const RadioGroupData = {
    elementType: 'RadioGroup',
    value: '',
    name: 'address-debit',
    data: [
      {
        value: 0,
        label: 'Same As Personal',
        name: 'address-personal-debit',
      },
      {
        value: 0,
        label: 'Same As Bussiness',
        name: 'address-bussiness-debit',
      }
    ]
  }

  const [radioGroupData, setRadioGroupData] = useState(RadioGroupData)

  useEffect(() => {
    if(radioList?.sameAsPersonal || radioList?.sameAsPersonal === 0) {
      form.setFieldsValue({
        sameAsPersonal: radioList?.sameAsPersonal,
      });
    }
  }, [radioList])

  useEffect(() => {
    if(radioGroupList?.['address-debit']?.['address-bussiness-debit']) {
      form.setFieldsValue({
        ['address-debit']: 'address-bussiness-debit',
      });
    } else if(radioGroupList?.['address-debit']?.['address-personal-debit']) {
      form.setFieldsValue({
        ['address-debit']: 'address-personal-debit',
      });
    }
  }, [radioGroupList])

  const [form] = Form.useForm();

  const submitHandler = values => {
    const data = decoratorFields(reviewFormFields, values, onBoardingStep)

    if(onBoardingStep === 1) {
      incrementStepHandler([{personalInfo: values}], data)
    } else if(onBoardingStep === 2) {
      incrementStepHandler([...formInfo, {businessInfo: values}], data)
    }
  };

  const onFinishFailed = ({ errorFields }) => {
    form.scrollToField(errorFields[0].name);
  };

  const onFieldsChangeHandler = (changedFields, allFields) => {
    if(onBoardingStep === 1) {
      const field = changedFields[0].name[0]
      if(['address', 'city', 'state', 'zip_Code'].filter((d) => d === field).length>0) {
        setRadioList({
          sameAsPersonal: 0
        })
        setRadioGroupData(RadioGroupData)
        setRadioGroupList()
      }
    }else if(onBoardingStep === 2) {
      const field = changedFields[0].name[0]
      if(['businessAddress', 'businessCity', 'businessState', 'businessZipCode'].filter((d) => d === field).length>0) {
        setRadioList({
          sameAsPersonal: 0
        })
        setRadioGroupData(RadioGroupData)
        if(radioGroupList?.['address-debit']?.['address-bussiness-debit']) {
          setRadioGroupList()
        }
      } else if(['debitAddress', 'debitCity', 'debitState', 'debitZipCode'].filter((d) => d === field).length>0) {
        setRadioGroupList()
      }
    }
  };

  const formProps = {
    form,
    onFinish: submitHandler,
    onFinishFailed: onFinishFailed,
    onFieldsChange: onFieldsChangeHandler
  };

  const onCheckAllChange = value => {
    const checkBoxId = value.target.id;
    form.setFieldsValue({
      [checkBoxId]: value.target.checked ? 1 : 0,
    });
    setCheckedList({
      ...checkedlist,
      [checkBoxId]: value.target.checked ? 1 : 0,
    });
  };

  const onRadioGroupChange = (value, idx) => {
    const val = value?.name
    if(radioGroupList?.[val] && radioGroupList?.[val]?.[value?.data[idx]?.name]) {
      setRadioGroupList({
        ...radioGroupList,
        [val]: {
          [value.data[idx].name]: 0,
        }
      });
      form.setFieldsValue({
        debitAddress: '',
        debitCity: '',
        debitState: '',
        debitZipCode: '',
      });
    } else {
      setRadioGroupList({
        ...radioGroupList,
        [val]: {
          [value.data[idx].name]: 1,
        }
      });

      if(value.data[idx].name === 'address-bussiness-debit') {
        const businessAddressData = form.getFieldsValue()
        form.setFieldsValue({
          debitAddress: businessAddressData.businessAddress,
          debitCity: businessAddressData.businessCity,
          debitState: businessAddressData.businessState,
          debitZipCode: businessAddressData.businessZipCode,
        });
      } else {
        form.setFieldsValue({
          debitAddress: formInfo[0]?.personalInfo.address,
          debitCity: formInfo[0]?.personalInfo.city,
          debitState: formInfo[0]?.personalInfo.state,
          debitZipCode: formInfo[0]?.personalInfo.zip_Code,
        });
      }
    }
  };

  const onRadioChange = value => {
    if(radioList[value]) {
      setRadioList({
        ...radioList,
        [value]: 0,
      });
      setRadioGroupData(RadioGroupData)
      form.setFieldsValue({
        businessAddress: '',
        businessCity: '',
        businessState: '',
        businessZipCode: '',
      });
    } else {
      setRadioList({
        ...radioList,
        [value]:  1,
      });
      const newRadioGroupData = {
        elementType: 'RadioGroup',
        value: '',
        name: 'address-debit',
        data: [
          {
            value: 0,
            label: 'Same As Personal',
            name: 'address-personal-debit',
          }
        ]
      }
      setRadioGroupData(newRadioGroupData)
      form.setFieldsValue({
        businessAddress: formInfo[0]?.personalInfo.address,
        businessCity: formInfo[0]?.personalInfo.city,
        businessState: formInfo[0]?.personalInfo.state,
        businessZipCode: formInfo[0]?.personalInfo.zip_Code,
      });
      if(radioGroupList?.['address-debit']?.['address-bussiness-debit']) {
        form.setFieldsValue({
          debitAddress: formInfo[0]?.personalInfo.address,
          debitCity: formInfo[0]?.personalInfo.city,
          debitState: formInfo[0]?.personalInfo.state,
          debitZipCode: formInfo[0]?.personalInfo.zip_Code,
        });
        const data = radioGroupList?.['address-debit']
        setRadioGroupList({
          ...radioGroupList,
          [data]: {
            ['address-personal-debit']: 1
          }
        })
      }
    }
  };

  if (!formValue || formValue.length<=0) {
    return null;
  }

  const fields = (stepFields = formValue) => {
    const data = stepFields.map((tabItem, index) => {
      switch (tabItem.elementType) {
        case 'Input': {
          return (
            <>
              <Item
                name={tabItem.name}
                label={tabItem.label}
                key={index}
                rules={[
                  { required: true, message: `Please input ${tabItem.label} field`},
                  {
                    pattern: tabItem.validation,
                    message: tabItem.errorMessage
                  }
                ]}
              >
                <Input />
              </Item>
              {}
            </>

          );
        }
        case 'InputNumber': {
          return (
            <Item
              name={tabItem.name}
              label={tabItem.label}
              key={index}
              rules={[
                { required: tabItem.isRequired, message: `Please input ${tabItem.label} field`},
                {
                  pattern: tabItem.validation,
                  message: tabItem.errorMessage
                }
              ]}
            >
              <InputNumber />
            </Item>
          );
        }
        case 'Radio': {
          return (
            <Item name={tabItem.name} key={index}>
              <div className={styles.radioMain}>
                <input type="radio" name={tabItem.name}
                  value={radioList[tabItem.name]}
                  checked={radioList[tabItem.name]}
                  onChange={() => onRadioChange(tabItem.name)}
                  className={styles.radioContainer}
                />
                {tabItem.label}
              </div>
            </Item>
          );
        }
        case 'RadioGroup': {
          return (
            <Item name={tabItem.name} label={tabItem.label} key={index}>
              <div className={styles.radioMain}>
              {
                radioGroupData.data.map((d, idx)=> {
                  if(idx === 0 && radioList?.['sameAsPersonal']) {
                    return (
                      <div className={styles.radioContainer}>
                        <input
                          key={idx}
                          type="radio"
                          name={d.label}
                          value={radioGroupList?.[tabItem.name]?.[d.name]}
                          checked={radioGroupList?.[tabItem.name]?.[d.name]}
                          onChange={() => onRadioGroupChange(tabItem, idx)}
                        />
                        {d.label}
                      </div>
                    )
                  }
                  return (
                    <div className={styles.radioContainer}>
                      <input
                        key={idx}
                        type="radio"
                        name={d.label}
                        value={radioGroupList?.[tabItem.name]?.[d.name]}
                        checked={radioGroupList?.[tabItem.name]?.[d.name]}
                        onChange={() => onRadioGroupChange(tabItem, idx)}
                      />
                      {d.label}
                    </div>
                  )
                })
              }
              </div>
            </Item>
          );
        }

        default: {
          return null;
        }
      }
    })

    return data
  }

  const nextButton = (
    <button className={styles.btn}>
      Next
    </button>
  )

  const backButton = (
    <button  className={styles.btn} onClick={decrementStepHandler}>
      Back
    </button>
  )

  return (
    <Form {...formProps} className={styles.formContainer}>
      <Space align="start" direction="vertical" size="large" className={styles.formSpace}>
        { onBoardingStep === 1 ? fields() : Object.keys(formValue).map((data, index) => {
          return (
            <div key={index}>
              <div className={styles.formMain}>{data === 'business' ? 'Business Info' : 'Debit Card Info'}</div>
              {fields(formValue[data])}
            </div>
          )
        })}
      </Space>
      <div>
      <div className={styles.btnContainer}>
        {onBoardingStep === 2 ? backButton : null}
        {nextButton}
      </div>
      </div>
    </Form>
  );
}

export default React.memo(FormView);
