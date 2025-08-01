//
//  ReactNativeMediapackVideoModule.swift
//  ReactNativeMediapack
//
//  Created by Honza Jiráň on 8/1/25.
//

import ExpoModulesCore
import AVFoundation

public class ReactNativeMediapackVideoModule: Module {
  public func definition() -> ModuleDefinition {
    
    Name("ReactNativeMediapackVideoModule")

    // AsyncFunction("extractAudio") { (url: String) in
    //   // Send an event to JavaScript.
    //  self.sendEvent("onChange", [
    //    "value": "audio url"
    //  ])
        
    //   return "audio url"
    // }

     AsyncFunction("extractAudio") { (videoUri: String, promise: Promise) in
      // Create a local file URL from the incoming string. First handle the common
      // "file://" prefix, otherwise treat the string as a plain file-system path.
      let videoUrl: URL
      if videoUri.hasPrefix("file://") {
        videoUrl = URL(fileURLWithPath: videoUri.replacingOccurrences(of: "file://", with: ""))
      } else {
        videoUrl = URL(fileURLWithPath: videoUri)
      }

      // Ensure the file actually exists before proceeding.
      guard FileManager.default.fileExists(atPath: videoUrl.path) else {
        promise.reject("ERR_FILE_NOT_FOUND", "No file exists at given path")
        return
      }

      let asset = AVURLAsset(url: videoUrl)
      guard let exportSession = AVAssetExportSession(asset: asset, presetName: AVAssetExportPresetAppleM4A) else {
        promise.reject("ERR_EXPORT_SESSION", "Failed to create export session")
        return
      }

      let tempDirectory = FileManager.default.temporaryDirectory
      let outputUrl = tempDirectory.appendingPathComponent(UUID().uuidString).appendingPathExtension("m4a")

      exportSession.outputURL = outputUrl
      exportSession.outputFileType = .m4a

      exportSession.exportAsynchronously {
        switch exportSession.status {
        case .completed:
          promise.resolve(["outputUri": outputUrl.absoluteString])
        case .failed:
          promise.reject("ERR_EXPORT_FAILED", exportSession.error?.localizedDescription ?? "Export failed")
        case .cancelled:
          promise.reject("ERR_EXPORT_CANCELLED", "Export cancelled")
        default:
          promise.reject("ERR_UNKNOWN", "Unknown export error")
        }
      }
    }
  }
}
