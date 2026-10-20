import { staticSeries } from "@/components/SeriesPage";

const built = staticSeries("zh", "about");

export const metadata = built.metadata;

export default built.Page;
