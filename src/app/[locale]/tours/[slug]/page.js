import TourDetailPage from "@/containers/TourDetailPage/TourDetailPage"
import { unstable_setRequestLocale } from "next-intl/server";

const Page = ({params: {locale}}) => {
  unstable_setRequestLocale(locale);
  
  return (
    <TourDetailPage />
  )
}

export default Page