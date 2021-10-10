import React, { VFC, memo } from 'react';
import tw from 'tailwind-rn';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

type Props = {
  printMsg: () => void;
};

const ChildMemo: VFC<Props> = ({ printMsg }) => {
  console.log('Child rendered');
  return (
    <View>
      <Text style={tw('my-3')}>Child</Text>
      <Button title="Print" onPress={printMsg} />
    </View>
  );
};
export const Child = memo(ChildMemo);
