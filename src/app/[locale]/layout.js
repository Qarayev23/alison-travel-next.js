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

const getData = async (locale) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}home/header-and-footer`, {
      method: 'GET',
      headers: {
        'Accept-Language': locale,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });
    return await res.json();
  } catch (error) {
    console.error("Error in getCityTours", error.message);
    return null;
  }
}

export default async function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  const data = await getData(locale);

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
              <Navbar data={data} />
              {children}
              <Footer data={data} />
            </NextIntlClientProvider>
          </ClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}