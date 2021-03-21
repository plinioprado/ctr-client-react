import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

class InvoiceModal extends Component {

  constructor(props) {
    super(props)
    this.state = this.getInvoiceStateFromData(props)
  }

  getInvoiceStateFromData(props) {
    return {
      cod: props.invoice.cod > 0 ? props.invoice.cod : 'New',
      val: this.formatVal(props.invoice.val),
      std: (props.invoice.std || ''),
      dtString: this.formatDate(props.invoice.dt),
      cpName: props.invoice.cp.name,
      cpCod: props.invoice.cp.cod,
      cpAddressAddr: props.invoice.cp.address.addr,
      cpAddressCity: props.invoice.cp.address.city,
      cpAddressNeigh: (props.invoice.cp.address.neigh || null),
      cpAddressState: props.invoice.cp.address.state,
      cpAddressZip: props.invoice.cp.address.zip,
      cpAddressCountry: props.invoice.cp.address.country,
      recList: props.invoice.recList,
      upd: (props.invoice.cod === '0')
    }
  }

  formatDate(date) {
    // should take date as string in iso format
    return new Date(date).toLocaleDateString('en-US',{year:"numeric", month:"2-digit", day:"2-digit"})
  }

  formatVal(val) {
    return parseFloat(val)
      .toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
  }

  getInvoiceDataFromState(form) {
    return {
      cod: form.cod === 'New' ? '0' : form.cod,
      cp: {
        address: {
          addr: form.cpAddressAddr,
          city: form.cpAddressCity,
          country: form.cpAddressCountry,
          neigh: form.cpAddressNeigh,
          state: form.cpAddressState,
          zip: form.cpAddressZip
        },
        cod: form.cpCod,
        name: form.cpName
      },
      std: form.std,
      dt: new Date(form.dtString),
      recList: [{seq: 1, dt: new Date(form.dtString), val: 0}],
      val: parseFloat(form.val.replace(',',''))
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleChangeVal(e) {
    this.setState({'val': e.target.value})
    this.setState({'recList': [
      {seq: 1, dtDue: this.state.recList[0].dtDue, val: e.target.value}
    ]})
  }

  handleDelete() {
    this.props.onModalDelete(this.state.cod)
  }

  handleEdit() {
    this.setState({upd: true})
  }

  handleSubmit() {
    const data = this.getInvoiceDataFromState(this.state)
    this.props.onModalSubmit(data)
  }

  render() {
    const disabled = !this.state.upd
    return (
      <div className="modal form">
        <form>
        <div className="modal-content">
          <h2 className="item">Invoice</h2>
          <nav className="item">
            {
              (!this.state.upd) &&
              (<button type="button" className="btn btn-primary" onClick={() => this.handleEdit()}>Edit</button>)
            }
            <button type="button" className="btn btn-primary" onClick={() => this.handleDelete()}>Delete</button>
            <button type="button" className="btn btn-primary" onClick={(e) => {this.props.onModalCancel()}}>Cancel</button>
          </nav>
          <div className="item-half">
            <label>
              Doc:
              <input name="cod" value={this.state.cod} onChange={(e) => this.handleChange(e)} disabled maxLength={15} />
            </label>
          </div>
          <div className="item-half">
            <label>
              Val:
              <input name="val" value={this.state.val} onChange={(e) => this.handleChangeVal(e)} className="val" disabled={disabled} maxLength={15} />
            </label>
          </div>
          <div className="item-half">
          <label>
              Std:
              <input name="std" value={this.state.std} onChange={(e) => this.handleChange(e)} disabled={disabled} maxLength={15} />
            </label>
          </div>
          <div className="item-half">
            <label>
              Date:
              <input name="dtString" value={this.state.dtString} onChange={(e) => this.handleChange(e)} disabled={disabled} maxLength={10} />
            </label>
          </div>
          <div className="item">
            <br />
            <strong>Client</strong>
          </div>
          <div className="item-half">
            <label>
              Name:
              <input name="cpName" value={this.state.cpName} onChange={(e) => this.handleChange(e)} disabled={disabled} maxLength={30} />
            </label> 
          </div>
          <div className="item-half">
            <label>
              Cod:
              <input name="cpCod" value={this.state.cpCod} onChange={(e) => this.handleChange(e)} disabled={disabled} maxLength={6} />
            </label> 
          </div>
          <div className="item-half">
            <label>
            Address:
              <input name="cpAddressAddr" value={this.state.cpAddressAddr} onChange={(e) => this.handleChange(e)} disabled={disabled} maxLength={60} />
            </label>     
          </div>
          <div className="item-half">
            <label>
              City:
              <input name="cpAddressCity" value={this.state.cpAddressCity} onChange={(e) => this.handleChange(e)} disabled={disabled} maxLength={30} />
            </label>
          </div>
          { (this.state.cpAddressNeigh !== null) &&
            <div className="item-half">
              <label>
                Neighborhood:
                <input name="cpAddressNeigh" value={this.state.cpAddressNeigh} onChange={(e) => this.handleChange(e)} disabled={disabled} />
              </label>
            </div>
          }
          <div className="item-half">
            <label>
              State/Province:
              <input name="cpAddressState" value={this.state.cpAddressState} onChange={(e) => this.handleChange(e)} disabled={disabled} maxLength={2} pattern="[A-Z]{2}" />
            </label>
          </div>
          <div className="item-half">
            <label>
              Postal code:
              <input name="cpAddressZip" value={this.state.cpAddressZip} onChange={(e) => this.handleChange(e)} disabled={disabled} maxLength={6} />
            </label>
          </div>
          <div className="item-half">
            <label>
              Country:
              <input name="cpAddressCountry" value={this.state.cpAddressCountry} onChange={(e) => this.handleChange(e)} disabled={disabled} maxLength={4} />
            </label>
          </div>
          <ul className="item">
            {(this.state.recList || []).map((it, key) => {
              const dtDueString = this.formatDate(it.dtDue)
              const valString = this.formatVal(it.val)
              return (<li key={key}>{dtDueString} : {valString}</li>)
            })
            }
          </ul>
          <nav className="item">
            {
              this.state.upd &&
              (<button type="submit" className="btn btn-primary" onClick={(e) => {e.preventDefault(); this.handleSubmit()}}>Submit</button>)
            }
          </nav>
        </div>
        </form>
      </div>
    )
  }
}

InvoiceModal.PropTypes = {
  onModalCancel: PropTypes.func.isRequired,
  onModalDelete: PropTypes.func.isRequired,
  onModalSubmit: PropTypes.func.isRequired
}

export default InvoiceModal