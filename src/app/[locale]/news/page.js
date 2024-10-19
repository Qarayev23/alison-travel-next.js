import NewsPage from '@/containers/NewsPage/NewsPage'
import { unstable_setRequestLocale } from 'next-intl/server';

const getNews = async (locale) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}pages/news`, {
      method: 'GET',
      headers: {
        'Accept-Language': locale,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });
    return await res.json();
  } catch (error) {
    console.error("Error in getNews", error.message);
    return null;
  }
}

const Page = async ({params: {locale}}) => {
  unstable_setRequestLocale(locale);

  const newsData = await getNews(locale);

  return (
    <NewsPage data={newsData} />
  )
}

export default Page