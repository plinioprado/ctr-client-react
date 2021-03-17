import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

class InvoiceModal extends Component {

  constructor(props) {
    super(props)
    const dtString = new Date(props.invoice.dt).toLocaleDateString()
    this.state = {
      cod: props.invoice.cod > 0 ? props.invoice.cod : 'New',
      val: props.invoice.val,
      std: (props.invoice.std || ''),
      dtString: dtString,
      cpName: props.invoice.cp.name,
      cpCod: props.invoice.cp.cod,
      cpAddressAddr: props.invoice.cp.address.addr,
      cpAddressCity: props.invoice.cp.address.city,
      cpAddressNeigh: (props.invoice.cp.address.neigh || null),
      cpAddressState: props.invoice.cp.address.state,
      cpAddressZip: props.invoice.cp.address.zip,
      cpAddressCountry: props.invoice.cp.address.country,
      upd: (props.invoice.cod === '0')
    }

    console.log('upd=',this.state.upd)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleEdit() {
    this.setState({upd: true});
  }

  recList =  this.props.invoice.recList.map(it => {
    const dateString2 = new Date(it.dtDue).toLocaleDateString()
    const valString = parseFloat(this.props.invoice.val).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
    return (<li key={it._id}>{dateString2} : {valString}</li>)
  })

  render() {
    const invoice = this.props.invoice
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
            <button type="button" className="btn btn-primary" onClick={(e) => {this.props.onModalCancel(invoice)}}>Cancel</button>
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
              <input name="val" value={this.state.val} onChange={(e) => this.handleChange(e)} className="val" disabled={disabled} maxLength={15} />
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
              <input name="cpCountry" value={this.state.cpAddressCountry} onChange={(e) => this.handleChange(e)} disabled={disabled} maxLength={4} />
            </label>
          </div>
          <ul className="item">
            {this.recList}
          </ul>
          <nav className="item">
            {
              this.state.upd &&
              (<button type="submit" className="btn btn-primary" onClick={(e) => {e.preventDefault(); this.props.onModalSubmit()}}>Submit</button>)
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
  onModalSubmit: PropTypes.func.isRequired
}

export default InvoiceModal