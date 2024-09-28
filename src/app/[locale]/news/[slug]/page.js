import NewsDetailPage from '@/containers/NewsDetailPage/NewsDetailPage'
import { unstable_setRequestLocale } from 'next-intl/server';

const Page = ({params: {locale}}) => {
  unstable_setRequestLocale(locale);
  
  return (
    <NewsDetailPage />
  )
}

export default Page