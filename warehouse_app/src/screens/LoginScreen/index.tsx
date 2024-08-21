import React, { memo, useState } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import Background from '@/components/organisms/Background';
import Logo from '@/components/organisms/Logo';
import Header from '@/components/organisms/Header';
import Button from '@/components/atoms/Button';
import TextInput from '@/components/atoms/TextInput';
import BackButton from '@/components/atoms/BackButton';
// import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '@/utils/validates';
import { Navigation } from '@/types/types';
import { StyleSheet } from 'react-native';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate('Dashboard');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Welcome back.</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        // autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Layout style={styles.forgotPassword}>
        <Text
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
          style={styles.label}
        >
          Forgot your password?
        </Text>
      </Layout>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <Layout style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <Text
          onPress={() => navigation.navigate('RegisterScreen')}
          style={styles.link}
        >
          Sign up
        </Text>
      </Layout>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    // color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    // color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
