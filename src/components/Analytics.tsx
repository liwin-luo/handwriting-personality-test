"use client";

import { useEffect, useState } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { CONSENT_EVENT, analyticsAllowed, readConsent } from "@/lib/consent.mjs";

export function Analytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = (event?: Event) => {
      const detail = event instanceof CustomEvent ? event.detail : undefined;
      setAllowed(analyticsAllowed(detail ?? readConsent()));
    };
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  if (!allowed) return null;

  return (
    <VercelAnalytics
      beforeSend={(event) => {
        event.url = event.url.replace(/\/r\/[^/?#]+/, "/r/redacted");
        return event;
      }}
    />
  );
}
