import { localeSeries } from "@/components/SeriesPage";

const built = localeSeries("size");

export const dynamicParams = false;
export const generateStaticParams = built.generateStaticParams;
export const generateMetadata = built.generateMetadata;

export default built.Page;
