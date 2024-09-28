import { unstable_setRequestLocale } from "next-intl/server"

const Page = ({params: {locale}}) => {
  unstable_setRequestLocale(locale)
  return (
    <></>
  )
}

export default Page