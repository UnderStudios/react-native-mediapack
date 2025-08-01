import { NativeModule, requireNativeModule } from 'expo';
import { IReactNativeMediapackVideoModuleEvents } from './types';

declare class ReactNativeMediapackVideoModule extends NativeModule<IReactNativeMediapackVideoModuleEvents> {
  /**
   * Extracts audio from the given video file and returns the path to the resulting audio.
   */
  extractAudio(url: string): Promise<{ outputUri: string }>;
}

export default requireNativeModule<ReactNativeMediapackVideoModule>('ReactNativeMediapackVideoModule');
