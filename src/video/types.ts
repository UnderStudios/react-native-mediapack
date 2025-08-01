export interface IReactNativeMediapackVideoModule {
  /*
   * Extracts the audio from a video file.
   * @param url - The URL of the video file in the file system.
   * @returns A promise that resolves to the URL of the exported audio file.
   */
  extractAudio(url: string): Promise<string>;
}

export type IReactNativeMediapackVideoModuleEvents = {
  onProgress: (progress: number) => void;
}