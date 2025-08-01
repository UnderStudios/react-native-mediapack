import { requireNativeView } from 'expo';
import * as React from 'react';

import { ReactNativeMediapackViewProps } from './ReactNativeMediapack.types';

const NativeView: React.ComponentType<ReactNativeMediapackViewProps> =
  requireNativeView('ReactNativeMediapack');

export default function ReactNativeMediapackView(props: ReactNativeMediapackViewProps) {
  return <NativeView {...props} />;
}
