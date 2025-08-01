import { registerWebModule, NativeModule } from 'expo';

import { ReactNativeMediapackModuleEvents } from './ReactNativeMediapack.types';

class ReactNativeMediapackModule extends NativeModule<ReactNativeMediapackModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ReactNativeMediapackModule, 'ReactNativeMediapackModule');
