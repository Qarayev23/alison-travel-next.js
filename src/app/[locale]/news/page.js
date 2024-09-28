import NewsPage from '@/containers/NewsPage/NewsPage'
import { unstable_setRequestLocale } from 'next-intl/server';

const Page = ({params: {locale}}) => {
  unstable_setRequestLocale(locale);

  return (
    <NewsPage />
  )
}

export default Page