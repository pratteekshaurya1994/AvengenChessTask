import React from 'react';
import {View, Image, Dimensions, ViewStyle, StyleProp} from 'react-native';

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
          width: 20,
          height: 20,
          // width: Dimensions.get('window').width / 9,
          // height: Dimensions.get('window').width / 9,
        }}
        resizeMethod="auto"
        resizeMode="contain"
      />
    </View>
  );
};

export default Block;
