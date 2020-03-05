import { createStore} from 'redux';
import walkingApp from './redux/reducers';
import { addWalking } from './redux/action';


const store = createStore(walkingApp);