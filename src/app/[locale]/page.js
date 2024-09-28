import HomePage from "@/containers/HomePage/HomePage";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Page({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <HomePage />
  );
}
