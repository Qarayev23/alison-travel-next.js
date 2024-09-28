import TransferPage from "@/containers/TransferPage/TransferPage"
import { unstable_setRequestLocale } from "next-intl/server";

const Page = ({params: {locale}}) => {
  unstable_setRequestLocale(locale);

  return (
    <TransferPage />
  )
}

export default Page