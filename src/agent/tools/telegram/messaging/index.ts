import { telegramSendMessageTool, telegramSendMessageExecutor } from "./send-message.js";
import { telegramEditMessageTool, telegramEditMessageExecutor } from "./edit-message.js";
import { telegramDeleteMessageTool, telegramDeleteMessageExecutor } from "./delete-message.js";
import { telegramForwardMessageTool, telegramForwardMessageExecutor } from "./forward-message.js";
import {
  telegramScheduleMessageTool,
  telegramScheduleMessageExecutor,
} from "./schedule-message.js";
import { telegramSearchMessagesTool, telegramSearchMessagesExecutor } from "./search-messages.js";
import {
  telegramPinMessageTool,
  telegramPinMessageExecutor,
  telegramUnpinMessageTool,
  telegramUnpinMessageExecutor,
} from "./pin.js";
import { telegramQuoteReplyTool, telegramQuoteReplyExecutor } from "./quote-reply.js";
import { telegramGetRepliesTool, telegramGetRepliesExecutor } from "./get-replies.js";
import {
  telegramGetScheduledMessagesTool,
  telegramGetScheduledMessagesExecutor,
} from "./get-scheduled-messages.js";
import {
  telegramDeleteScheduledMessageTool,
  telegramDeleteScheduledMessageExecutor,
} from "./delete-scheduled-message.js";
import {
  telegramSendScheduledNowTool,
  telegramSendScheduledNowExecutor,
} from "./send-scheduled-now.js";
import type { ToolEntry } from "../../types.js";

export { telegramSendMessageTool, telegramSendMessageExecutor };
export { telegramEditMessageTool, telegramEditMessageExecutor };
export { telegramDeleteMessageTool, telegramDeleteMessageExecutor };
export { telegramForwardMessageTool, telegramForwardMessageExecutor };
export { telegramScheduleMessageTool, telegramScheduleMessageExecutor };
export { telegramSearchMessagesTool, telegramSearchMessagesExecutor };
export {
  telegramPinMessageTool,
  telegramPinMessageExecutor,
  telegramUnpinMessageTool,
  telegramUnpinMessageExecutor,
};
export { telegramQuoteReplyTool, telegramQuoteReplyExecutor };
export { telegramGetRepliesTool, telegramGetRepliesExecutor };
export { telegramGetScheduledMessagesTool, telegramGetScheduledMessagesExecutor };
export { telegramDeleteScheduledMessageTool, telegramDeleteScheduledMessageExecutor };
export { telegramSendScheduledNowTool, telegramSendScheduledNowExecutor };

export const tools: ToolEntry[] = [
  {
    tool: telegramSendMessageTool,
    executor: telegramSendMessageExecutor,
    tags: ["core"],
  },
  {
    tool: telegramQuoteReplyTool,
    executor: telegramQuoteReplyExecutor,
    requiredMode: "user",
    tags: ["core"],
  },
  {
    tool: telegramGetRepliesTool,
    executor: telegramGetRepliesExecutor,
    requiredMode: "user",
    tags: ["social"],
  },
  {
    tool: telegramEditMessageTool,
    executor: telegramEditMessageExecutor,
    tags: ["core"],
  },
  {
    tool: telegramScheduleMessageTool,
    executor: telegramScheduleMessageExecutor,
    requiredMode: "user",
    tags: ["automation"],
  },
  {
    tool: telegramGetScheduledMessagesTool,
    executor: telegramGetScheduledMessagesExecutor,
    requiredMode: "user",
    tags: ["automation"],
  },
  {
    tool: telegramDeleteScheduledMessageTool,
    executor: telegramDeleteScheduledMessageExecutor,
    requiredMode: "user",
    tags: ["automation"],
  },
  {
    tool: telegramSendScheduledNowTool,
    executor: telegramSendScheduledNowExecutor,
    requiredMode: "user",
    tags: ["automation"],
  },
  {
    tool: telegramSearchMessagesTool,
    executor: telegramSearchMessagesExecutor,
    requiredMode: "user",
    tags: ["social"],
  },
  {
    tool: telegramPinMessageTool,
    executor: telegramPinMessageExecutor,
    tags: ["admin"],
  },
  {
    tool: telegramUnpinMessageTool,
    executor: telegramUnpinMessageExecutor,
    requiredMode: "user",
    tags: ["admin"],
  },
  {
    tool: telegramForwardMessageTool,
    executor: telegramForwardMessageExecutor,
    tags: ["social"],
  },
  {
    tool: telegramDeleteMessageTool,
    executor: telegramDeleteMessageExecutor,
    tags: ["core"],
  },
];
