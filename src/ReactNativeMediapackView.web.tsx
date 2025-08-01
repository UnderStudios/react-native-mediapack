import * as React from 'react';

import { ReactNativeMediapackViewProps } from './ReactNativeMediapack.types';

export default function ReactNativeMediapackView(props: ReactNativeMediapackViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
