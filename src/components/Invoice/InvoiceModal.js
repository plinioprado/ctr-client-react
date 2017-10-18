import React, { Component } from 'react'

class InvoiceModal extends Component {

  constructor(props) {
    super(props)
    const dtString = new Date(props.selected.dt).toLocaleDateString()
    this.state = {
      cod: props.selected.cod,
      val: props.selected.val,
      std: props.selected.std,
      dtString: dtString,
      cpName: props.selected.cp.name,
      cpCod: props.selected.cp.cod,
      cpAddressAddr: props.selected.cp.address.addr,
      cpAddressCity: props.selected.cp.address.city,
      cpAddressNeigh: props.selected.cp.address.neigh,
      cpAddressState: props.selected.cp.address.state,
      cpAddressZip: props.selected.cp.address.zip
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  recList =  this.props.selected.recList.map(it => {
    const dateString2 = new Date(it.dtDue).toLocaleDateString()
    const valString = new Number(this.props.selected.val).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
    return (<li key={it._id}>{dateString2} : {valString}</li>)
  })

  render() {
    const selected = this.props.selected
    return (
      <div className="modal">
        <form>
        <div className="modal-content">
          <h2>Invoice</h2>
          <div>
            <label>
              Doc:
              <input name="cod" value={this.state.cod} onChange={(e) => this.handleChange(e)} />
            </label>
          </div>
          <div>
            <label>
              Val:
              <input name="val" value={this.state.val} onChange={(e) => this.handleChange(e)} className="val" />
            </label>
          </div>
          <div>
          <label>
              Std:
              <input name="std" value={this.state.std} onChange={(e) => this.handleChange(e)} />
            </label>
          </div>
          <div>
            <label>
              Date:
              <input name="dtString" value={this.state.dtString} onChange={(e) => this.handleChange(e)} />
            </label>
          </div>
          <p>Client</p>
          <div>
            <label>
              Name:
              <input name="cpName" value={this.state.cpName} onChange={(e) => this.handleChange(e)} />
            </label> 
          </div>
          <div>
            <label>
              Cod:
              <input name="cpCod" value={this.state.cpCod} onChange={(e) => this.handleChange(e)} />
            </label> 
          </div>
          <div>
            <label>
            Address:
              <input name="cpAddressAddr" value={this.state.cpAddressAddr} onChange={(e) => this.handleChange(e)} />
            </label>     
          </div>
          <div>
            <label>
            Address:
              <input name="cpAddressCity" value={this.state.cpAddressCity} onChange={(e) => this.handleChange(e)} />
            </label>
          </div>
          <div>
            <label>
              Neighborhood:
              <input name="cpAddressNeigh" value={this.state.cpAddressNeigh} onChange={(e) => this.handleChange(e)} />
            </label>
          </div>
          <div>
            <label>
              State:
              <input name="cpAddressState" value={this.state.cpAddressState} onChange={(e) => this.handleChange(e)} />
            </label>
          </div>
          <div>
            <label>
              Zip:
              <input name="cpAddressZip" value={this.state.cpAddressZip} onChange={(e) => this.handleChange(e)} />
            </label>
          </div>
          <ul>{this.recList}</ul>
          <nav>
            <button type="submit" value="Ok" className="btn btn-primary" onClick={(e) => {e.preventDefault(); this.props.modalSubmit(selected)}}>Ok</button>
          </nav>
        </div>
        </form>
      </div>
    )
  }
}

export default InvoiceModal