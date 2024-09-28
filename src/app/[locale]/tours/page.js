import ToursPage from "@/containers/ToursPage/ToursPage"
import { unstable_setRequestLocale } from "next-intl/server";

const Page = ({params: {locale}}) => {
  unstable_setRequestLocale(locale);

  return (
    <ToursPage />
  )
}

export default Page