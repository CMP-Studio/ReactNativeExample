
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RootScreen from '../components/rootScreen';

import { addToCounter,
         subFromCounter,
         newCounter,
         deleteCounter,
       } from '../actions/counter';

const mapStateToProps = (state) => {
  return {
    counters: state.countState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions:
      bindActionCreators({
        addToCounter,
        subFromCounter,
        newCounter,
        deleteCounter,
      }, dispatch),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen);
