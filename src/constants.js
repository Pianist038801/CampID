import I18n from 'react-native-i18n';
import { Icons } from '@theme';

const constants = {
  IP_BUTTONS: [
    { key: 0, label: I18n.t('TAKE_PHOTO') },
    { key: 1, label: I18n.t('PICK_FROM_LIBRARY') },
    { key: 2, label: I18n.t('CANCEL') },
  ],
  HOME_TABS: [
    { id: 0, title: 'WHO', icon: 'who' },
    { id: 1, title: 'WHAT', icon: 'what' },
    { id: 2, title: 'AN10NA', icon: 'an10na' },
    { id: 3, title: 'WATCH', icon: 'watch' },
    { id: 4, title: 'SHARE', icon: 'share' },
  ],
  FLAG_REASONS: [
    { id: 0, name: I18n.t('SPAM') },
    { id: 1, name: I18n.t('FRAUD') },
    { id: 2, name: I18n.t('ABUSIVE') },
    { id: 3, name: I18n.t('PROBLEMATIC') },
    { id: 4, name: I18n.t('OTHER') },
  ],
  AGE: {
    MIN: 1,
    MAX: 30,
  },
  GRADE: {
    MIN: 1,
    MAX: 30,
  },
};

export default constants;