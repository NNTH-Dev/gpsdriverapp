import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MMKV } from 'react-native-mmkv';

// import { ThemeProvider } from '@/theme';
import EStyleSheet from 'react-native-extended-stylesheet';

import ApplicationNavigator from './navigators/Application';
import './translations';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';
import { PaperProvider } from 'react-native-paper';

EStyleSheet.build;

export const queryClient = new QueryClient();

export const storage = new MMKV();

function App() {
  return (
    <Provider store={store}>
      {/* <QueryClientProvider client={queryClient}>
        <ThemeProvider storage={storage}>
        <ApplicationNavigator />
        </ThemeProvider>
      </QueryClientProvider> */}
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          {/* <ThemeProvider storage={storage}> */}
          <ApplicationNavigator />
          {/* </ThemeProvider> */}
          {/* <ApplicationNavigator /> */}
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
