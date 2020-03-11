import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ChartBlock from '../components/ChartBlock/ChartBlock';
import { changeStartIndex, changeEndIndex } from '../redux/action';

function countTotalActivity(walkings) {
    let methods = walkings.reduce(function(walking, value) {
        let date = value.date.substr(0, 10);
        walking[date] = walking[date] ? walking[date] + value.distance 
        : value.distance;
        return walking;
      }, {});          
      let i = 0;
      let walks = Object.keys(methods).map(function(date) {
        ++i;
        return { id: i,
                 date: date, 
                 distance: methods[date] };
      });
      return walks;
};

const mapStateToProps = (state, walkingsData) => ({
    walkingsDataTotal: countTotalActivity(walkingsData.walkingsData),
    startIndex: state.indexChart.startIndex,
    endIndex: state.indexChart.endIndex
})

const mapDispatchToProps = (dispatch) => ({
    changeStartIndex: bindActionCreators(changeStartIndex, dispatch),
    changeEndIndex: bindActionCreators(changeEndIndex, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ChartBlock);