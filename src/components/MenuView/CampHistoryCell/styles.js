import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts, Styles } from '@theme/';

export default StyleSheet.create({
  name: { ...Fonts.style.h4, color: Colors.textPrimary },
  period: { ...Fonts.style.h5, color: Colors.textSecondary },
  active: { ...Fonts.style.h6, color: Colors.textRed},
  inactive: { ...Fonts.style.h6, color: Colors.textSecondary}
});
