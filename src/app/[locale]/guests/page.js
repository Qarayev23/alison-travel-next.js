import GuestsPage from '@/containers/GuestsPage/GuestsPage'
import { unstable_setRequestLocale } from 'next-intl/server';

const Page = ({params: {locale}}) => {
  unstable_setRequestLocale(locale);
  
  return (
    <GuestsPage />
  )
}

export default Page