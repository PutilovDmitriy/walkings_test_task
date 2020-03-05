import { createStore} from 'redux';
import walkingApp from './reducers';

const store = createStore(walkingApp);

import { addWalking } from './action';

