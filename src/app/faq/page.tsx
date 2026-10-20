import { staticSeries } from "@/components/SeriesPage";

const built = staticSeries("en", "faq");

export const metadata = built.metadata;

export default built.Page;
