import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "IFE — Internet Feasibility Engine",
  description:
    "Evaluate the feasibility of online ventures using demand signals, competition density, and structural constraints.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
