import { ThemeWrapper } from "@/components/Global/ThemeWrapper";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={params.locale}>
            <body className={inter.className}>
                <ThemeWrapper>{children}</ThemeWrapper>
            </body>
        </html>
    );
}
