import React from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';

import { useFlipper } from '@react-navigation/devtools';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApplicationStackParamList } from 'types/navigation';

// import AuthNavigator from './Auth';
// import MainNavigator from './Main';
import { rootNavigationRef } from './RootNavigation';
// import TripsNavigator from './TripsNavigator';

import { useTheme } from '@/hooks';
// import Notification from '@/screens/Notification';
// import Startup from '@/screens/Startup';
import { Colors } from '@/theme/Variables';
import { Startup } from '@/screens';
import LoginScreen from '@/screens/LoginScreen';

const Stack = createStackNavigator<ApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  useFlipper(rootNavigationRef);

  return (
    <SafeAreaView
      style={[
        Layout.fill,
        {
          backgroundColor: Platform.OS === 'ios' ? Colors.primary : colors.card,
        },
      ]}
    >
      <NavigationContainer theme={NavigationTheme} ref={rootNavigationRef}>
        <StatusBar backgroundColor={Colors.blue} barStyle={'light-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* <Stack.Screen name="Main" component={MainNavigator} />
          <Stack.Screen name="Auth" component={AuthNavigator} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="TripsNavigator" component={TripsNavigator} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
