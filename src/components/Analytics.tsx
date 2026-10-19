"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

export function Analytics() {
  return (
    <VercelAnalytics
      beforeSend={(event) => {
        event.url = event.url.replace(/\/r\/[^/?#]+/, "/r/redacted");
        return event;
      }}
    />
  );
}
