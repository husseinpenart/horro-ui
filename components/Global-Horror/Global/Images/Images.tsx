import {View, Text, Image, useWindowDimensions} from 'react-native';
import React, {memo} from 'react';
import {ImageViewProps} from '../../../../types/Type';

const Images = ({
  uri,
  imgS,
  imgH,
  style,
  alignSelf,
  borderRadius,
  mode,
  require,
  blur,
}: ImageViewProps) => {
  return (
    <View>
      <Image
        source={!uri ? require : {uri: uri}}
        resizeMode={!mode ? null : mode}
        blurRadius={!blur ? 0 : blur}
        style={[
          {
            width: !imgS ? 200 : imgS,
            height: !imgH ? 100 : imgH,
            alignSelf: !alignSelf ? 'center' : alignSelf,
            borderRadius: !borderRadius ? 0 : borderRadius,
            ...style,
          },
        ]}
      />
    </View>
  );
};

export default memo(Images);
