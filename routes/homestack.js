import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Timeline from '../src/components/Timeline/Timeline';

import Registration from '../src/components/Login/Registration';
import Login from '../src/components/Login/Login';


const screens = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Login",
            header: false
        }
    },
    Registration: {
        screen: Registration,
        navigationOptions: {
            title: 'Registration',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#ffcc66'
            }
        }
    }
})

export default createAppContainer(screens);