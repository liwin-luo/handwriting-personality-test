import type { Metadata } from "next";
import { RootDocument } from "@/components/RootDocument";
import { rootMetadata } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = rootMetadata;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
