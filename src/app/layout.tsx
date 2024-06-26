import { Montserrat } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
	title: "V-Sekai",
	description: "Your virtual reality platform, on your game engine."
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
