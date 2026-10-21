"use client";

import { track } from "@vercel/analytics";
import { analyticsAllowed, readConsent } from "./consent.mjs";

export const TOOL_EVENTS = ["tool_start", "tool_complete", "result_view"];

export function trackTool(event, properties = {}) {
  if (typeof window === "undefined" || !analyticsAllowed(readConsent())) return;
  try {
    track(event, properties);
  } catch {
    // A blocked analytics script must not break a tool.
  }
}
