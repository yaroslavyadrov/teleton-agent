import { telegramSendPhotoTool, telegramSendPhotoExecutor } from "./send-photo.js";
import { telegramSendVoiceTool, telegramSendVoiceExecutor } from "./send-voice.js";
import { telegramSendStickerTool, telegramSendStickerExecutor } from "./send-sticker.js";
import { telegramSendGifTool, telegramSendGifExecutor } from "./send-gif.js";
import { telegramDownloadMediaTool, telegramDownloadMediaExecutor } from "./download-media.js";
import { visionAnalyzeTool, visionAnalyzeExecutor } from "./vision-analyze.js";
import {
  telegramTranscribeAudioTool,
  telegramTranscribeAudioExecutor,
} from "./transcribe-audio.js";
import type { ToolEntry } from "../../types.js";

export { telegramSendPhotoTool, telegramSendPhotoExecutor };
export { telegramSendVoiceTool, telegramSendVoiceExecutor };
export { telegramSendStickerTool, telegramSendStickerExecutor };
export { telegramSendGifTool, telegramSendGifExecutor };
export { telegramDownloadMediaTool, telegramDownloadMediaExecutor };
export { visionAnalyzeTool, visionAnalyzeExecutor };
export { telegramTranscribeAudioTool, telegramTranscribeAudioExecutor };

export const tools: ToolEntry[] = [
  {
    tool: telegramSendPhotoTool,
    executor: telegramSendPhotoExecutor,
    tags: ["media"],
  },
  {
    tool: telegramSendVoiceTool,
    executor: telegramSendVoiceExecutor,
    requiredMode: "user",
    tags: ["media"],
  },
  {
    tool: telegramSendStickerTool,
    executor: telegramSendStickerExecutor,
    requiredMode: "user",
    tags: ["media"],
  },
  {
    tool: telegramSendGifTool,
    executor: telegramSendGifExecutor,
    requiredMode: "user",
    tags: ["media"],
  },
  {
    tool: telegramDownloadMediaTool,
    executor: telegramDownloadMediaExecutor,
    requiredMode: "user",
    tags: ["media"],
  },
  {
    tool: visionAnalyzeTool,
    executor: visionAnalyzeExecutor,
    requiredMode: "user",
    tags: ["media"],
  },
  {
    tool: telegramTranscribeAudioTool,
    executor: telegramTranscribeAudioExecutor,
    requiredMode: "user",
    tags: ["media"],
  },
];
