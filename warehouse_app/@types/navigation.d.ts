import { DrawerScreenProps } from '@react-navigation/drawer';
import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type TripParamsList = {
  Trips: {
    date: string;
  };
  Epod: undefined;
  Signature: undefined;
};

export type MainParamsList = {
  Menu: undefined;
  Home: undefined;
};

export type HomeParamsList = {
  PlanningOrder: undefined;
  History: undefined;
};

export type AuthParamsList = {
  Login: undefined;
  ForgotPassword: undefined;
};

export type ApplicationStackParamList = {
  Startup: undefined;
  Main: NavigatorScreenParams<MainParamsList>;
  Auth: NavigatorScreenParams<AuthParamsList>;
  Notification: undefined;
  TripsNavigator: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;

export type AuthScreenProps = StackScreenProps<AuthStackParamList>;

export type MainScreenProps = StackScreenProps<MainParamsList>;

export type MainDrawerScreenProps = DrawerScreenProps<MainParamsList>;

export type TripScreenProps = StackScreenProps<TripParamsList>;

export type HomeScreenProps = DrawerScreenProps<HomeParamsList>;
