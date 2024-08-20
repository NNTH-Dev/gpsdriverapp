import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useSelector } from 'react-redux';
import { ApplicationScreenProps } from 'types/navigation';

import Brand from '@/components/atoms/Brand';
import { useTheme } from '@/hooks';
// import { isLoggedIn } from '@/store/auth';
import { setDefaultTheme } from '@/store/theme';

const Startup = ({ navigation }: ApplicationScreenProps) => {
  const { Gutters } = useTheme();

  //   const isLogged = useSelector((state: any) => isLoggedIn(state));

  const init = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    // await setDefaultTheme({ theme: 'default', darkMode: null });
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: isLogged ? 'Main' : 'Auth' }],
    // });
  };

  useEffect(() => {
    // init();
  }, []);

  return (
    <View
    // className='flex-1 flex-col items-center justify-center bg-white'
    >
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
    </View>
  );
};

export default Startup;
