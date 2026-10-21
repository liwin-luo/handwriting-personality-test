import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { toolMedium, withUtm } from "./utm.mjs";

test("utm medium names the tool a link points at", () => {
  assert.equal(toolMedium("/tools/slant"), "slant");
  assert.equal(toolMedium("/tools/sample-chart"), "sample-chart");
  assert.equal(toolMedium("/zh/tools/signature"), "signature");
  assert.equal(toolMedium("/tools"), "hub");
  assert.equal(toolMedium("/zh/tools"), "hub");
  assert.equal(toolMedium("/guides/four"), "guides");
  assert.equal(toolMedium("/results/quiet-architect"), "results");
  assert.equal(toolMedium("/"), "site");
});

test("utm tags a call to action with source, medium, and position", () => {
  assert.equal(
    withUtm("/tools/slant", "cta"),
    "/tools/slant?utm_source=free-tools&utm_medium=slant&utm_content=cta",
  );
  assert.equal(
    withUtm("/zh/tools/signature", "related-tool"),
    "/zh/tools/signature?utm_source=free-tools&utm_medium=signature&utm_content=related-tool",
  );
});

test("utm keeps an existing query and a hash", () => {
  assert.equal(
    withUtm("/?c=10000", "cta"),
    "/?c=10000&utm_source=free-tools&utm_medium=site&utm_content=cta",
  );
  assert.equal(
    withUtm("/tools/sample-chart#four-4", "figure"),
    "/tools/sample-chart?utm_source=free-tools&utm_medium=sample-chart&utm_content=figure#four-4",
  );
});

test("utm leaves an outside link alone", () => {
  assert.equal(withUtm("https://example.com/page", "cta"), "https://example.com/page");
});

const source = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("the three tool events are the only ones the site sends", () => {
  const analytics = source("../lib/analytics.mjs");
  assert.match(analytics, /export const TOOL_EVENTS = \["tool_start", "tool_complete", "result_view"\]/);
});

test("every tool reports a start and a completion", () => {
  const tools = {
    "../components/Quiz.tsx": "tool_start",
    "../components/SlantTool.tsx": "tool_start",
    "../components/SignatureTool.tsx": "tool_start",
    "../components/Chart.tsx": "tool_start",
  };
  for (const [path, event] of Object.entries(tools)) {
    const code = source(path);
    assert.match(code, new RegExp(`trackTool\\("${event}"`), path);
    assert.match(code, /trackTool\("tool_complete"/, path);
  }
});

test("every result page reports a result view", () => {
  for (const path of ["../components/Result.tsx", "../components/ZhResult.tsx", "../components/LatinResult.tsx"]) {
    assert.match(source(path), /trackTool\("result_view"/, path);
  }
});

test("the call to action carries a utm position", () => {
  const parts = source("../components/seo/PageParts.tsx");
  assert.match(parts, /withUtm\(href, "cta"\)/);
  assert.match(parts, /position="related-tool"/);
  assert.match(parts, /position="related-guide"/);
  assert.match(parts, /withUtm\(tool\.href, "hub-tool"\)/);
});
