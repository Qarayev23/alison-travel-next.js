import ContactPage from '@/containers/ContactPage/ContactPage'
import { unstable_setRequestLocale } from 'next-intl/server'

const Page = ({params: {locale}}) => {
  unstable_setRequestLocale(locale)
  
  return (
    <ContactPage />
  )
}

export default Page