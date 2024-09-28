import AboutUsPage from '@/containers/AboutUsPage/AboutUsPage'
import { unstable_setRequestLocale } from 'next-intl/server'

const Page = ({params: {locale}}) => {
  unstable_setRequestLocale(locale)
  
  return (
    <AboutUsPage />
  )
}

export default Page