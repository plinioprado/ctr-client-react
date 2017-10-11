import { connect } from 'react-redux'

import { getUsers } from '../../redux/modules/user'
import UserList from '../../components/User/UserList'

const mapStateToProps = state => {
  return {
    list: state.user.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
