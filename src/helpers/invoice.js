// helpers/invoide.js

const helpers = {

  newInvoice: () => {
    return {
      cod: '0',
      cp: {
        address: {
          addr: '',
          city: '',
          country: '',
          state: '',
          zip: ''
        },
        cod: '',
        name: ''
      },
      val: 0,
      dt: new Date(),
      recList: [{seq: 1, dtDue: new Date(), val: 0}]
    }
  }
}

export default helpers