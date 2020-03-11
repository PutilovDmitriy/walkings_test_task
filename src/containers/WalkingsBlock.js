import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import WalkingsBlock from '../components/WalkingsBlock/WalkingsBlock';
import {changeNewWalkingDate, changeNewWalkingDistance, changeValidDate ,changeValidDistance} from '../redux/action';

const mapStateToProps = (state, walkingsData)  => ({      
    walkingsData: walkingsData.walkingsData,
    newWalkingDate: state.newWalking.date,
    newWalkingDistance: state.newWalking.distance,
    validDate: state.validAddForm.date,
    validDistance: state.validAddForm.distance
  })

const mapDispatchToProps = (dispatch) => ({
  changeNewWalkingDate: bindActionCreators(changeNewWalkingDate, dispatch),
  changeNewWalkingDistance: bindActionCreators(changeNewWalkingDistance, dispatch),
  changeValidDate: bindActionCreators(changeValidDate, dispatch),
  changeValidDistance: bindActionCreators(changeValidDistance, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(WalkingsBlock);