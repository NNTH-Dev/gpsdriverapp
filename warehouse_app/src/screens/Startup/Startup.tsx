import React, { useEffect } from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import { useSelector } from 'react-redux';
import { ApplicationScreenProps } from 'types/navigation';

import Brand from '@/components/atoms/Brand';
import { useTheme } from '@/hooks';
// import { isLoggedIn } from '@/store/auth';
import { setDefaultTheme } from '@/store/theme';
import { SafeAreaView, StyleSheet, View } from 'react-native';

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
    <Layout className="bg-red-500">
      <Text className=" text-red-500">HOME</Text>
    </Layout>
  );
};

const layoutStyles = 'flex: 1, justifyContent: center, alignItems: center';

export default Startup;
