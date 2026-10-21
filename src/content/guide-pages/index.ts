import type { Guide } from "./types";
import { ampersand } from "./ampersand";
import { a } from "./a";
import { four } from "./four";
import { g } from "./g";
import { i } from "./i";
import { one } from "./one";
import { seven } from "./seven";
import { slant } from "./slant";
import { spacing } from "./spacing";
import { t } from "./t";
import { y } from "./y";
import { zero } from "./zero";

export const guides: Guide[] = [four, seven, a, g, zero, ampersand, slant, spacing, one, t, i, y];

export const guideBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide])) as Record<string, Guide>;

export type { Guide, GuideFigure, GuideLink } from "./types";
