import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Home from '../components/Home';
import { fetchWalkings } from '../redux/action/fetchAction'
import { addWalking, updateWalking, deliteWalking, changeSortDate, changeSortDistance, openAddWalkingForm, closeAddWalkingForm } from '../redux/action';



const changeFormatDate = (walkingsData) => {  
  const nWalkingsData = walkingsData.map(walking => {
    return Object.assign({}, {id: walking.id, date: walking.date.slice(0,10), distance: walking.distance});
  })  
  return nWalkingsData;
}

const getDisplayWalkings = (walkingsData, sortDate, sortDistance) => {
  if (sortDate !== null) {
    switch(sortDate) {
      case false:
        return walkingsData.sort((a, b) => a.date > b.date ? 1 : -1)
      case true: 
        return walkingsData.sort((a, b) => a.date < b.date ? 1 : -1)
      default:
        return walkingsData; 
    }
  };
  if (sortDistance !== null) {
    switch(sortDistance) {
      case false: 
        return walkingsData.sort((a, b) => a.distance > b.distance ? 1 : -1)
      case true:
        return walkingsData.sort((a, b) => a.distance < b.distance ? 1 : -1)
      default:
        return walkingsData; 
    }
  }else return walkingsData;
}



const mapStateToProps = state => ({    
    walkingsData: getDisplayWalkings(changeFormatDate(state.walkings.walks), state.sortWalkings.sortDate, state.sortWalkings.sortDistance),
    sortDate: state.sortWalkings.sortDate,
    sortDistance: state.sortWalkings.sortDistance,
    walkingAddForm: state.addWalkingForm
  })

const mapDispatchToProps = (dispatch) => ({
    fetchWalkings: bindActionCreators(fetchWalkings, dispatch),
    addWalking: bindActionCreators(addWalking, dispatch),
    updateWalking: bindActionCreators(updateWalking, dispatch),
    deliteWalking: bindActionCreators(deliteWalking, dispatch),
    changeSortDate: bindActionCreators(changeSortDate, dispatch),
    changeSortDistance: bindActionCreators(changeSortDistance, dispatch),
    openWalkingForm: bindActionCreators(openAddWalkingForm, dispatch),
    closeWalkingForm: bindActionCreators(closeAddWalkingForm, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);

