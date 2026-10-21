import assert from "node:assert/strict";
import test from "node:test";
import { analyticsAllowed, consentCopy } from "./consent.mjs";

const langs = ["en", "zh", "es", "pt", "fr", "de", "id", "vi", "it", "tr"];

test("cookie banner copy has a choice in every page language", () => {
  for (const lang of langs) {
    const text = consentCopy(lang);
    assert.ok(text.before.length > 10);
    assert.ok(text.emphasis.length > 5);
    assert.ok(text.accept);
    assert.ok(text.reject);
    assert.ok(text.privacy);
  }
  assert.equal(consentCopy("zh").accept, "接受");
  assert.equal(consentCopy("zh").reject, "拒绝非必要的");
  assert.equal(consentCopy("nope").accept, consentCopy("en").accept);
});

test("analytics stays off until the visitor accepts", () => {
  assert.equal(analyticsAllowed(null), false);
  assert.equal(analyticsAllowed("essential"), false);
  assert.equal(analyticsAllowed("all"), true);
});
