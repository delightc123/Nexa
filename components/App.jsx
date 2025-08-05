import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import Shop from '../app/(roots)/(tabs)/shop';
import Menu from '../app/(screens)/menu';

const Drawer = createDrawerNavigator();

export default function App() {
  const screenWidth = Dimensions.get('window').width;

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front', // slides over content
        overlayColor: 'rgba(0,0,0,0.5)', // semi-transparent overlay
        drawerStyle: {
          width: screenWidth * 0.7, // 70% width drawer
        },
      }}
    >
      <Drawer.Screen name="home" component={Shop} />
      <Drawer.Screen name="menu" component={Menu} />
    </Drawer.Navigator>
  );
}
