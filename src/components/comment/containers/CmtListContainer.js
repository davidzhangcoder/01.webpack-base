import { connect } from 'react-redux';

import CmtList from '../CmtList';
import {addcomment} from '../redux/actions';

console.log('addComment : ' + addcomment);

export default connect(state => ({
    data: state.data
    }),
    {addComment:addcomment}
)(CmtList)