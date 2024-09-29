import NewsDetailPage from '@/containers/NewsDetailPage/NewsDetailPage'
import { unstable_setRequestLocale } from 'next-intl/server';

const getNews = async (locale, slug) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}news/${slug}`, {
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

const Page = async ({ params: { locale, slug } }) => {
  unstable_setRequestLocale(locale);

  const newsData = await getNews(locale, slug);

  return (
    <NewsDetailPage data={newsData} />
  )
}

export default Page