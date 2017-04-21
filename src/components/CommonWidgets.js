import React from 'react';
import {
  Platform,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from 'react-native-i18n';
import { MKButton, MKSwitch, MKCheckbox } from 'react-native-material-kit';

import { Metrics, Styles, Icons, Colors, Fonts, Images } from '@theme/';
import Utils from '@src/utils';
import styles from './styles';

const CommonWidgets = {
  renderStatusBar(color) {
    return (
      (Platform.OS === 'android')
      ?
        <StatusBar
          backgroundColor={color}
          barStyle={'light-content'}
          translucent />
      :
        <StatusBar
          backgroundColor={color}
          barStyle={'light-content'}
          translucent />
    );
  },

  renderNavBarHeader(headerText, onPress = null) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={Styles.center}>
          <Text
            style={[Fonts.style.h2,
              { textAlign: 'center',
                width: Metrics.screenWidth * 0.7,
                color: Colors.textTitle }]}
            numberOfLines={1}>
            {headerText}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  renderDivider(size = 2) {
    return (
      <View style={{ height: size, width: Metrics.screenWidth, backgroundColor: Colors.textSecondary }} />
    );
  },

  renderSpacer(count, bkColor) {
    if (bkColor === undefined) bkColor = 'transparent';
    return (
      <View style={{ backgroundColor: bkColor, height: (Metrics.screenHeight * (count / 1135.0)) }} />
    );
  },

  renderNormalButton(text, color = Colors.brandPrimary, onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={Styles.normalButton} backgroundColor={color} borderRadius={13}>
          <Text style={Fonts.style.buttonText}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },
  renderSmallButton(text, color = Colors.brandPrimary, onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={Styles.smallButton} backgroundColor={color} borderRadius={13}>
          <Text style={Fonts.style.buttonText}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },
  renderMaterialButton(text, color = Colors.brandPrimary, onPress, _width) {
    let _style;
    if (_width === undefined) { _style = Styles.button; } else { _style = [Styles.button, { width: _width }]; }
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={_style} backgroundColor={color} borderRadius={7}>
          <Text style={Fonts.style.buttonText}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },
  renderRateBtn(text, bClicked,  onPress, _width, _key) {
    let _style;
    var color = Colors.brandPrimary,
      txtColor = 'white',
      borderColor = Colors.brandPrimary;
    if (bClicked === false) {
      color = 'transparent';
      txtColor = borderColor = Colors.rateBtnDisabled;
    }

    if (_width === undefined) { _style = Styles.button; } else { _style = [Styles.button, { width: _width - 5 }]; }
    return (
      <TouchableOpacity key={_key} onPress={onPress}>
        <View style={Styles.rowContainer}>
          <View style={_style} borderColor={borderColor} borderWidth={1} backgroundColor={color} borderRadius={7}>
            <Text style={{ ...Fonts.style.buttonText, color: txtColor }}>
              {text}
            </Text>
          </View>
          <View style={{ width: 5 }} />
        </View>
      </TouchableOpacity>
    );
  },

  renderTextButton(text, _style, onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={[Fonts.style.hyperBottomText, _style]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  },
  renderRightButton(text, _style, onPress) {
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={Styles.center}>
          <Text
            style={[Fonts.style.h2,
              { textAlign: 'right',
                
                color: Colors.textTitle }]}
            numberOfLines={1}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  renderAddButton(text, color, onPress) {
    return (
      <TouchableOpacity
        style={[Styles.center,
          { width: Metrics.screenWidth * 0.15, backgroundColor: color, position: 'absolute', right: 0, bottom: 0, borderRadius: 3 }]}
        backgroundColor={color}
        onPress={onPress}>
        <Text style={[Fonts.style.h6, { color: Colors.textPrimary }]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  },

  renderCloseButton(onPress) {
    return (
      <TouchableOpacity
        style={{ position: 'absolute', left: 20, top: Platform.OS === 'android' ? 25 : 30 }}
        onPress={onPress}>
        <Icon name="times" size={20} color={Colors.textPrimary} />
      </TouchableOpacity>
    );
  },

  renderBigText(text) {
    return (
      <Text style={[Fonts.style.h3, Styles.txtLeftMargin]}>
        {text}
      </Text>
    );
  },
  renderText(style, text) {
    return (
      <Text style={style}>
        {text}
      </Text>
    );
  },
  renderTextWithMargin(style, text) {
    return (
      <Text style={[style, { marginHorizontal: Metrics.textLeftMargin }]}>
        {text}
      </Text>
    );
  },

  renderAvatar(imgUri, onPress) {
    let _src = { uri: imgUri };
    if (!isNaN(imgUri)) { _src = imgUri; } // require('Avatar')1
    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.imgAvatar}
          source={_src} />
      </TouchableOpacity>
    );
  },
  renderScheduleTabItem(title, bClicked = false, onPress) {
    return (
      bClicked === false ?
      (
        <TouchableOpacity onPress={onPress}>
          <Text style={{ ...Fonts.style.h4, color: Colors.textPrimary, marginRight: Metrics.scheduleTabMargin }}>{title}</Text>
        </TouchableOpacity>
      )
      :
      (
        <TouchableOpacity onPress={onPress}>
          <View style={{ flexDirection: 'column', alignItems: 'center', flex: 1, marginRight: Metrics.scheduleTabMargin }}>
            <Text style={{ ...Fonts.style.h4, color: Colors.brandPrimary }}>{title}</Text>
            <Icon name={'sort-desc'} size={30} style={{ backgroundColor: 'transparent', marginTop: -20 }} color={Colors.brandPrimary} />
          </View>
        </TouchableOpacity>
      )
    );
  },
  renderScheduleItem(when, what) {
    return (
      <View>
        <View style={Styles.rowContainer}>
          <Text style={{ width: 150, ...Fonts.style.h4, color: Colors.textSecondary }}>
            {when}
          </Text>
          <Text style={{ ...Fonts.style.h4, color: Colors.textSecondary }}>
            {what}
          </Text>
        </View>
        {CommonWidgets.renderSpacer(10)}
      </View>
    );
  },
  renderSizedAvatar(imgUri, onPress, size) {
    let _src = { uri: imgUri };
    if (!isNaN(imgUri)) { _src = imgUri; } // require('Avatar')1
    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{ width: size,
            height: size,
            borderRadius: size / 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={_src} />
      </TouchableOpacity>
    );
  },
  renderNavBarLeftButton(onPress, icon = 'back') {
    let iconName = 'chevron-left';
    if (icon === 'menu') iconName = 'bars';
    if (icon === 'search') iconName = 'search';
    return (
      <TouchableOpacity
        style={{ paddingBottom: Platform.OS === 'android' ? 5 : 5 }}
        onPress={onPress} >
        {(isNaN(icon)) ?
          <Icon name={iconName} size={25} color={Colors.textTitle} />
        :
          <Image style={{ width: 20, height: 20, resizeMode: 'stretch' }} source={icon} />
        }
      </TouchableOpacity>
    );
  },
  renderIcon(onPress, icon = 'back') {
    const iconName = 'chevron-circle-right';
    return (
      <TouchableOpacity
        style={{ paddingBottom: Platform.OS === 'android' ? 5 : 5 }}
        onPress={onPress} >
        <Icon name={iconName} size={30} color={Colors.brandPrimary} />
      </TouchableOpacity>
    );
  },
  renderVideoClip(onPress, imgPath, caption) {
    return (
      <TouchableOpacity onPres={onPress} style={{ marginHorizontal: 10, flexDirection: 'column', alignItems: 'center' }}>
        <Image source={3} style={styles.videoClipSize} />
        <Text style={[{ color: Colors.brandPrimary }, Fonts.style.h4]}>
          {caption}
        </Text>

      </TouchableOpacity>
    );
  },
  renderImgBtn(onPress, style, img) {
    return (
      <TouchableOpacity
        style={{ paddingBottom: Platform.OS === 'android' ? 5 : 5 }}
        onPress={onPress} >
        <View>
          <Image style={[{ width: Metrics._real(90), height: Metrics._real(90), resizeMode: 'stretch' }, style]} source={img} />
        </View>
      </TouchableOpacity>
    );
  },

  renderListHeader(text, backColor, textColor) {
    return (
      <View style={[styles.listHeaderContainer, { backgroundColor: backColor }]} >
        <Text style={[styles.listHeaderTitle, { letterSpacing: 0.5, color: textColor }]} >
          {text}
        </Text>
      </View>
    );
  },

  renderFloatButton(onPress) {
    return (
      <MKButton
        style={{ position: 'absolute', bottom: 10, right: 10, padding: 15 }}
        backgroundColor={Colors.brandPrimary}
        shadowRadius={2}
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.5}
        shadowColor={'black'}
        fab
        onPress={onPress}>
        <Image
          pointerEvents="none"
          source={Icons.trend}
          style={{ width: 30, height: 30 }}
          resizeMode={'contain'} />
      </MKButton>
    );
  },

  renderForwardIcon() {
    return (
      <View style={styles.forwardIconContainer}>
        <Icon
          style={{ marginTop: 5 }}
          name={'chevron-right'}
          size={20}
          color={Colors.textThird}
        />
      </View>
    );
  },

  renderTopicListItem(item, onPress) {
    return (
      <MKButton
        key={item.id}
        style={Styles.listItemContainer}
        backgroundColor={Colors.backgroundSecondary}
        onPress={onPress}>

        <View style={Styles.horzCenter}>
          <View style={[Styles.center, { flex: 3 }]}>
            {item.isTop10 ?
              this.renderApple(0, 'big') : this.renderApple(2, 'big')}
          </View>
          <View style={{ flex: 12 }}>
            <Text style={Fonts.style.listItemTitleText} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={Fonts.style.listItemDescriptionText} numberOfLines={1}>
              3{I18n.t('TIPS_FOUND')}
            </Text>
          </View>
          {this.renderForwardIcon()}
        </View>
      </MKButton>
    );
  },

  renderCheckboxTopicListItem(item, onPress) {
    return (
      <MKButton
        key={item.id}
        style={Styles.listItemContainer}
        backgroundColor={Colors.backgroundSecondary}
        onPress={onPress}>
        <View style={Styles.horzCenter}>
          <View style={[Styles.center, { flex: 3 }]}>
            {item.isTop10 ?
              this.renderApple(0, 'big') : this.renderApple(2, 'big')}
          </View>
          <View style={{ flex: 12 }}>
            <Text style={Fonts.style.listItemTitleText} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={Fonts.style.listItemDescriptionText} numberOfLines={1}>
              3{I18n.t('TIPS_FOUND')}
            </Text>
          </View>
          <View style={styles.checkboxIconContainer}>
            <MKCheckbox
              checked={false}
            />
          </View>
        </View>
      </MKButton>
    );
  },

  renderTipListItem(item, onPress) {
    return (
      <MKButton
        key={item.id}
        style={Styles.listItemContainer}
        backgroun dColor={Colors.backgroundSecondary}
        onPress={onPress}>
        <View style={Styles.horzCenter}>
          <View style={[Styles.horzCenter, { flex: 10 }]}>
            {this.renderTipDetails(item, false, () => {})}
          </View>
          {this.renderForwardIcon()}
        </View>
      </MKButton>
    );
  },

  renderSettingSwitchGroup(title, desc, onChange) {
    return (
      <View>
        <View style={Styles.horzCenter}>
          <Text style={[Fonts.style.fieldInput, { flex: 4 }]}>
            {title}
          </Text>
          <MKSwitch
            style={{ flex: 1 }}
            checked
            trackSize={25}
            trackLength={50}
            onColor={Colors.rippleSecondary}
            thumbOnColor={Colors.brandSEcondary}
            thumbOffColor={Colors.textThird}
            rippleColor={Colors.rippleSecondary}
            onCheckedChange={onChange} />
        </View>
        <Text
          style={[Fonts.style.listItemDescriptionText, {
            lineHeight: 14,
            color: Colors.fieldPlaceholder,
            marginTop: Platform.OS === 'ios' ? -Metrics.defaultMargin / 2 : -Metrics.defaultMargin }]}>
          {desc}
        </Text>
      </View>
    );
  },

  renderSettingHelpButtons(text, onPress) {
    return (
      <View>
        {this.renderSpacer(0.5)}
        <TouchableOpacity onPress={onPress}>
          <Text style={Fonts.style.fieldInput}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
};

export default CommonWidgets;
