import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { ThemeProvider } from "~/components/layout/theme-provider";
import { CookiesProvider } from "react-cookie";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <CookiesProvider>
            <div className={GeistSans.className} suppressHydrationWarning={true}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    <Component {...pageProps} />
                    <ProgressBar height="4px" color="#f59a9f" options={{ showSpinner: false }} shallowRouting />
                </ThemeProvider>
            </div>
        </CookiesProvider>
    );
};

export default MyApp;
