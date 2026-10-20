import { staticSeries } from "@/components/SeriesPage";

const built = staticSeries("en", "about");

export const metadata = built.metadata;

export default built.Page;
