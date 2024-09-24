import "@/assets/styles/main.scss";
import Footer from "@/components/Layout/Footer/Footer";
import Navbar from "@/components/Layout/Navbar/Navbar";
import initTranslations from '../i18n';
import TranslationsProvider from "@/components/TranslationsProvider/TranslationsProvider";

export const viewport = {
  initialScale: 1.0,
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: "no"
}

const i18nNamespaces = ['common'];

export default async function RootLayout({ children, params: { locale } }) {
  console.log(locale, "asdas");
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <html>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </TranslationsProvider>
  );
}