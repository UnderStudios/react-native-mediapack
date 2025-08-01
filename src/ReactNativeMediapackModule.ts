import { NativeModule, requireNativeModule } from 'expo';

import { ReactNativeMediapackModuleEvents } from './ReactNativeMediapack.types';

declare class ReactNativeMediapackModule extends NativeModule<ReactNativeMediapackModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ReactNativeMediapackModule>('ReactNativeMediapack');
