import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

import { fontSizePercentage } from './src/utils';

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: fontSizePercentage(18),
  },
});

export default () => {
  const oldTextRender = Text.render;
  Text.render = function (...args) {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };

  const oldTextInputRender = TextInput.render;
  TextInput.render = function (...args) {
    const origin = oldTextInputRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
};
