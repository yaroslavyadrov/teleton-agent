// src/errors.ts
var PluginSDKError = class extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
  name = "PluginSDKError";
};

// src/index.ts
var SDK_VERSION = "1.0.0";
export {
  PluginSDKError,
  SDK_VERSION
};
