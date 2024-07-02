import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://portfolio-next-js-dusky-three.vercel.app/"),

	title:"Rahul Bhati",
	authors: {
		name: "Rahul Bhati",
	},

	description:
  "I'm a Skilled Frontend Developer building modern web applications.",
	openGraph: {
		title: "Rahul Bhati",
		description:
    "I'm a Skilled Frontend Developer building modern web applications.",
		url: "https://portfolio-next-js-dusky-three.vercel.app/",
		siteName: "rahul-portfolio",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
