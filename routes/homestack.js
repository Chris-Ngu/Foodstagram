import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../src/components/Login';
import Timeline from '../src/components/Timeline/Timeline';

import Registration from '../src/components/Login/Registration';

import Sample from '../src/components/Login/sample';

const screens = {
    Login: {
        screen: Login
    },
    Timeline: {
        screen: Sample
    },
    Registration: {
        screen: Registration
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);