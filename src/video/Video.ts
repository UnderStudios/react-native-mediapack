import VideoModule from "./VideoModule";

export default class Video {
    public async extractAudio(url: string): Promise<{ outputUri: string }> {
        return await VideoModule.extractAudio(url);
    }
}