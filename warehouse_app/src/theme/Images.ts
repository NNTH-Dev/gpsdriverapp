import { ThemeVariables } from 'types/theme';

// eslint-disable-next-line
export default function ({}: ThemeVariables) {
  return {
    logo: require('./assets/images/tom_light.png'),
    igapLogo: require('./assets/images/igap_logo.png'),
    loginBackground: require('./assets/images/ic_slashscreen.png'),
    defaultAvatar: require('./assets/images/default_avatar.png'),
    sparkles: {
      topLeft: require('./assets/images/sparkles-top-left.png'),
      top: require('./assets/images/sparkles-top.png'),
      topRight: require('./assets/images/sparkles-top-right.png'),
      right: require('./assets/images/sparkles-right.png'),
      bottomRight: require('./assets/images/sparkles-bottom-right.png'),
      bottom: require('./assets/images/sparkles-bottom.png'),
      bottomLeft: require('./assets/images/sparkles-bottom-left.png'),
    },
    icons: {
      colors: require('./assets/images/colorswatch.png'),
      send: require('./assets/images/send.png'),
      translate: require('./assets/images/translate.png'),
      location: require('./assets/images/location.png'),
      planning: require('./assets/images/planning.png'),
      driver: require('./assets/images/driver.png'),
      deliveryTime: require('./assets/images/delivery-time.png'),
      userChecked: require('./assets/images/user_checked.png'),
      checklist: require('./assets/images/checklist.png'),
      notes: require('./assets/images/notes.png'),
      padlock: require('./assets/images/padlock.png'),
      trash: require('./assets/images/delete.png'),
      email: require('./assets/images/email.png'),
      pin: require('./assets/images/push-pin.png'),
      pinActive: require('./assets/images/push-pin-active.png'),
      pdf: require('./assets/images/pdf-file.png'),
      order: require('./assets/images/order.png'),
      history: require('./assets/images/notepad.png'),
      time: require('./assets/images/clock.png'),
      driver_basic: require('./assets/images/driver_basic.png'),
      location_access: require('./assets/images/location_access.png'),
      back: require('./assets/images/back.png'),
    },
  };
}
