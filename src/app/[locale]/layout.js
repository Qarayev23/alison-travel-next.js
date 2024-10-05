import "@/assets/styles/main.scss";
import Footer from "@/components/Layout/Footer/Footer";
import Navbar from "@/components/Layout/Navbar/Navbar";
import ClientProvider from "@/providers/ClientProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import { routing } from "@/src/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';

export const viewport = {
  initialScale: 1.0,
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: "no"
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <ReduxProvider>
          <ClientProvider>
            <NextTopLoader
              color="#E63561"
              height={2}
              showSpinner={false}
              shadow="none"
            />
            <NextIntlClientProvider messages={messages}>
              <Navbar />
              {children}
              <Footer />
            </NextIntlClientProvider>
          </ClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}