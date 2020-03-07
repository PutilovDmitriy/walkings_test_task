import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Home from '../components/Home';
import { addWalking, updateWalkings, changeSortDate, changeSortDistance } from '../redux/action'



const mapStateToProps = state => ({
    walkingsData: state.walkings,
    sortDate: state.sortWalkings.sortDate,
    sortDistance: state.sortWalkings.sortDistance
  })

const mapDispatchToProps = (dispatch) => ({
    addWalking: bindActionCreators(addWalking, dispatch),
    updateWalkings: bindActionCreators(updateWalkings, dispatch),
    changeSortDate: bindActionCreators(changeSortDate, dispatch),
    changeSortDistance: bindActionCreators(changeSortDistance, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);

