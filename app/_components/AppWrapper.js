import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import GlobalStyles from "../_styles/GlobalStyles";
import Robt from "../_components/Robt";

export default async function HomePage({ params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

  return (
    <>
      <GlobalStyles />
      <Robt />
      <NextIntlClientProvider messages={messages} locale={locale}>
        <Header />
        <main>
          {/* محتوى الصفحة هنا */}
        </main>
        <Footer />
      </NextIntlClientProvider>
    </>
  );
}