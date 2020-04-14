import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../src/components/Login';
import Timeline from '../src/components/Timeline';

const screens = {
    Login: {
        screen: Login
    },
    Timeline: {
        screen: Timeline
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);