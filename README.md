# React Native Mediapack

A tiny, **Expo Modules**–based library that bundles together a few media-related helpers:

* 🎬 **Video → Audio extractor** – extract the audio track from a local video file on-device (iOS for now)

---

## Installation

```bash
# with npm
npm install react-native-mediapack

# or with Yarn
yarn add react-native-mediapack

# or with pnpm
pnpm add react-native-mediapack
```

Because the module is written with the **Expo Modules API**, no extra native steps are required – it is autolinked on iOS/Android and works out-of-the-box with bare React-Native **and** managed Expo projects.

## Usage

```tsx
import React from 'react';
import { Button, View } from 'react-native';
import {
  Video,
} from 'react-native-mediapack';

export default function Example() {

  const extract = async () => {
    try {
      // Supports plain file paths or "file://" URIs
      const { outputUri } = await new Video().extractAudio('/path/to/video.mp4');
      console.log('Audio saved at →', outputUri);
    } catch (err: any) {
      if (err?.code === 'ERR_FILE_NOT_FOUND') {
        console.warn('Given video file does not exist');
      } else {
        console.error(err);
      }
    }
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>

      <Button title="Extract audio" onPress={extract} />

    </View>
  );
}
```

---

## API


### `class Video`

Extract the audio track from a local video file.

```ts
const { outputUri } = await new Video().extractAudio('/path/to/video.mp4');
```

**Returns** `Promise<{ outputUri: string }>` – the temporary path to the extracted `m4a` file.

##### Errors

| code | message | when |
|------|---------|------|
| `ERR_FILE_NOT_FOUND` | "No file exists at given path" | The given file path/URI does not exist |
| `ERR_EXPORT_SESSION` | "Failed to create export session" | AVFoundation export session could not be set up |
| `ERR_EXPORT_FAILED` | AVFoundation error | Export failed |
| `ERR_EXPORT_CANCELLED` | "Export cancelled" | User/system cancelled the export |
| `ERR_UNKNOWN` | "Unknown export error" | Fallback for any other case |

> Currently implemented on **iOS** only. PRs for Android are welcome! ✌️


## Contributing

1.  Fork / clone the repo
2.  `npm install` in both root and the `example` directory
3.  Run the example – `cd example && npm run ios` / `npm run android`
4.  Make your changes and submit a PR 🚀

Please make sure to run `npm run lint` and `npm run test` (if applicable) before opening a pull request.

---

## License

MIT © 2025 Jan Jiráň / Under Studios

