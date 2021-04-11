const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const decoratorFields = (reviewFormFields, data, onBoardingStep) => {
  let newFields = {}
  if(onBoardingStep === 1) {
    const personalInfo = []
    for(const val in data) {
      if(val.includes('_')) {
        const d = val.split("_")
        personalInfo.push({
          label: `${capitalize(d[0])} ${d[1]}`,
          value: data[val]
        })
      } else {
        personalInfo.push({
          label: capitalize(val),
          value: data[val]
        })
      }
    }
    newFields.personalInfo = personalInfo
  } else if(onBoardingStep === 2) {
    let debitValue = []
    let businessValue = []
    for(const val in data) {
      if(val.includes('debit')) {
        debitValue = [
          {
            label: 'Name To Be Printed',
            value: data.debitNamePrinted
          },
        ]

        let addressValue = ''
        if(data['address-debit'] === 'address-personal-debit') {
          addressValue = 'Same As Personal'
        } else if (data['address-debit'] === 'address-bussiness-debit') {
          addressValue = 'Same As Business'
        } else {
          addressValue = `${data.debitAddress}, ${data.debitCity}, ${data.debitState}, ${data.debitZipCode}`
        }

        debitValue.push({
          label: 'Address',
          value: addressValue
        })
      } else {
        businessValue = [
          {
            label: 'Business Name',
            value: data.business_Name
          },
          {
            label: 'State Registered',
            value: data.state_Registered
          },
        ]

        let addressValue = 'Same As Personal'

        if(!data.sameAsPersonal) {
          addressValue = `${data.businessAddress}, ${data.businessCity}, ${data.businessState}, ${data.businessZipCode}`
        }

        businessValue.push({
          label: 'Address',
          value: addressValue
        })
      }
    }
    newFields = {
      personalInfo: reviewFormFields.personalInfo,
      businessInfo: businessValue,
      debitInfo: debitValue
    }
  }
  return newFields
}
