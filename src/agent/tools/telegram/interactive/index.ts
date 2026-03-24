import { telegramCreatePollTool, telegramCreatePollExecutor } from "./create-poll.js";
import { telegramCreateQuizTool, telegramCreateQuizExecutor } from "./create-quiz.js";
import { telegramReplyKeyboardTool, telegramReplyKeyboardExecutor } from "./reply-keyboard.js";
import { telegramReactTool, telegramReactExecutor } from "./react.js";
import { telegramSendDiceTool, telegramSendDiceExecutor } from "./send-dice.js";
import type { ToolEntry } from "../../types.js";

export { telegramCreatePollTool, telegramCreatePollExecutor };
export { telegramCreateQuizTool, telegramCreateQuizExecutor };
export { telegramReplyKeyboardTool, telegramReplyKeyboardExecutor };
export { telegramReactTool, telegramReactExecutor };
export { telegramSendDiceTool, telegramSendDiceExecutor };

export const tools: ToolEntry[] = [
  {
    tool: telegramCreatePollTool,
    executor: telegramCreatePollExecutor,
    requiredMode: "user",
    tags: ["social"],
  },
  {
    tool: telegramCreateQuizTool,
    executor: telegramCreateQuizExecutor,
    requiredMode: "user",
    tags: ["social"],
  },
  {
    tool: telegramReplyKeyboardTool,
    executor: telegramReplyKeyboardExecutor,
    requiredMode: "user",
    tags: ["social"],
  },
  {
    tool: telegramReactTool,
    executor: telegramReactExecutor,
    tags: ["core"],
  },
  {
    tool: telegramSendDiceTool,
    executor: telegramSendDiceExecutor,
    tags: ["media"],
  },
];
