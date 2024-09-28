import CancellationPolicyPage from '@/containers/CancellationPolicyPage/CancellationPolicyPage'
import { unstable_setRequestLocale } from 'next-intl/server'

const Page = ({params: {locale}}) => {
  unstable_setRequestLocale(locale)
  
  return (
    <CancellationPolicyPage />
  )
}

export default Page