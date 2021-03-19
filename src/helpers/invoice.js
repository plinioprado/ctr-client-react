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
      dt: '3920-02-02T08:00:00.000+00:00',
      recList: [{dt: '3920-03-02T08:00:00.000+00:00', val: 0}]
    }
  }
}

export default helpers