import { createStackNavigator } from '@react-navigation/stack';
import CreateTask from '../screens/CreateTask';
import HandleTask from '../screens/HandleTask';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreateTask" component={CreateTask} />
      <Stack.Screen name="HandleTask" component={HandleTask} />
    </Stack.Navigator>
  );
}