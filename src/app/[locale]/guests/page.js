import GuestsPage from '@/containers/GuestsPage/GuestsPage'
import { unstable_setRequestLocale } from 'next-intl/server';

const getGuestsData = async (locale) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}pages/guest`, {
      method: 'GET',
      headers: {
        'Accept-Language': locale,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    })
    return await res.json();
  } catch (error) {
    console.error("Error in getGuestsData", error.message);
    return null;
  }
}

const Page = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const guestsData = await getGuestsData(locale);

  return (
    <GuestsPage data={guestsData} />
  )
}

export default Page