import React from 'react';
import {View, Image, ViewStyle, StyleProp} from 'react-native';

export interface BlockProps {
  style?: StyleProp<ViewStyle>;
  source?: any;
}

const Block = (props: BlockProps) => {
  const {style, source} = props;

  return (
    <View style={style}>
      <Image
        source={source}
        style={{
          width: 30,
          height: 30,
        }}
        resizeMethod="auto"
        resizeMode="contain"
      />
    </View>
  );
};

export default Block;
