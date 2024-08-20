import { StyleSheet } from 'react-native';

import { CommonParams } from 'types/theme';

export default function <C>({ Colors, Layout, FontSize }: CommonParams<C>) {
  const base = {
    backgroundColor: Colors.primary,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
  };
  const rounded = {
    ...base,
    borderRadius: 10,
  };
  const circle = {
    ...Layout.center,
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: Colors.circleButtonBackground,
    color: Colors.circleButtonColor,
    fill: Colors.circleButtonColor,
  };
  const label = {
    color: Colors.white,
    fontSize: FontSize.small,
  };

  return StyleSheet.create({
    // base,
    label,
    // rounded,
    circle,
    // outline: {
    //   ...base,
    //   backgroundColor: Colors.transparent,
    //   borderWidth: 2,
    //   borderColor: Colors.primary,
    // },
    // outlineRounded: {
    //   ...rounded,
    //   backgroundColor: Colors.transparent,
    //   borderWidth: 2,
    //   borderColor: Colors.primary,
    // },
  });
}
