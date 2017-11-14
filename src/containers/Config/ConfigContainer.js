import React, { Component } from 'react'
import { connect } from 'react-redux'

import Config from '../../components/Config'

class ConfigContainer extends Component {

  render() {
    const entity = this.props.session.entity ? this.props.session.entity : {}
    const user = this.props.session.user ? this.props.session.user : {}
    return <Config
      entity={entity}
      user={user}
    />
  }
}

const mapStateToProps = state => {
  return {
    session: state.session
  }
}

export default connect(mapStateToProps)(ConfigContainer)