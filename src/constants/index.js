/*
  Configuartion for formFields
*/
export const personalInfo = [
  {
    value: '',
    label: 'Name',
    isRequired: 1,
    validation: '',
    error: false,
    errorMessage: '',
    elementType: 'Input',
    name: 'name'
  },
  {
    value: '',
    label: 'SSN',
    isRequired: 1,
    validation: /^[0-9]{9}$/i,
    error: false,
    elementType: 'InputNumber',
    name: 'ssn',
    errorMessage: 'SSN should be a 9 digit number',
  },
  {
    value: '',
    label: 'Address',
    isRequired: 1,
    validation: '',
    error: false,
    elementType: 'Input',
    name: 'address',
    errorMessage: '',
  },
  {
    value: '',
    label: 'City',
    isRequired: 1,
    validation: '',
    error: false,
    elementType: 'Input',
    name: 'city',
    errorMessage: '',
  },
  {
    value: '',
    label: 'State',
    isRequired: 1,
    validation: /^[a-z]{2}$/i,
    error: false,
    elementType: 'Input',
    name: 'state',
    errorMessage: 'State should be a two letter input',
  },
  {
    value: '',
    label: 'Zip Code',
    isRequired: 1,
    validation: /^[0-9]{5}$/i,
    error: false,
    elementType: 'InputNumber',
    name: 'zip_Code',
    errorMessage: 'Zip Code should be a 5 digit number',
  },
]

export const bussinessInfo = {
  business: [
    {
      value: '',
      label: 'Business Name',
      isRequired: 1,
      validation: '',
      error: false,
      elementType: 'Input',
      name: 'business_Name',
      errorMessage: '',
    },
    {
      value: '',
      label: 'State Registered',
      isRequired: 1,
      validation: /^[a-z]{2}$/i,
      error: false,
      elementType: 'Input',
      name: 'state_Registered',
      errorMessage: 'Should be a two letter input',
    },
    {
      value: '',
      label: 'Address',
      isRequired: 1,
      validation: '',
      error: false,
      elementType: 'Input',
      name: 'businessAddress',
      errorMessage: '',
    },
    {
      value: '',
      label: 'Same As Personal',
      name: 'sameAsPersonal',
      elementType: 'Radio',
    },
    {
      value: '',
      label: 'City',
      isRequired: 1,
      validation: '',
      error: false,
      elementType: 'Input',
      name: 'businessCity',
      errorMessage: '',
    },
    {
      value: '',
      label: 'State',
      isRequired: 1,
      validation: /^[a-z]{2}$/i,
      error: false,
      elementType: 'Input',
      name: 'businessState',
      errorMessage: 'State should be a two letter input',
    },
    {
      value: '',
      label: 'Zip Code',
      isRequired: 1,
      validation: /^[0-9]{5}$/i,
      error: false,
      elementType: 'InputNumber',
      name: 'businessZipCode',
      errorMessage: 'Zip Code should be a 5 digit number',
    },
  ],
  debitCardInfo: [
    {
      value: '',
      label: 'Name To Be Printed',
      isRequired: 1,
      validation: '',
      error: false,
      elementType: 'Input',
      name: 'debitNamePrinted',
      errorMessage: '',
    },
    {
      value: '',
      label: 'Address',
      isRequired: 1,
      validation: '',
      error: false,
      elementType: 'Input',
      name: 'debitAddress',
      errorMessage: '',
    },
    {
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
    },
    {
      value: '',
      label: 'City',
      isRequired: 1,
      validation: '',
      error: false,
      elementType: 'Input',
      name: 'debitCity',
      errorMessage: '',
    },
    {
      value: '',
      label: 'State',
      isRequired: 1,
      validation: /^[a-z]{2}$/i,
      error: false,
      elementType: 'Input',
      name: 'debitState',
      errorMessage: 'State should be a two letter input',
    },
    {
      value: '',
      label: 'Zip Code',
      isRequired: 1,
      validation: /^[0-9]{5}$/i,
      error: false,
      elementType: 'InputNumber',
      name: 'debitZipCode',
      errorMessage: 'Zip Code should be a 5 digit number',
    },
  ]
}
