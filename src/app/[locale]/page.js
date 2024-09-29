import HomePage from "@/containers/HomePage/HomePage";
import { unstable_setRequestLocale } from "next-intl/server";

const getDestinationsData = async (locale) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}home-destinations`, {
      method: 'GET',
      headers: {
        'Accept-Language': locale,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });
    return await res.json();
  } catch (error) {
    console.error("Error in getDestinationsData", error.message);
    return null;
  }
}

const getWeProvideData = async (locale) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}home-we-provide`, {
      method: 'GET',
      headers: {
        'Accept-Language': locale,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });
    return await res.json();
  } catch (error) {
    console.error("Error in getWeProvideData", error.message);
    return null;
  }
}

const getCityTours = async (locale, city) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}home-city-detail/${city ? city : "baku" }`, {
      method: 'GET',
      headers: {
        'Accept-Language': locale,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });
    return await res.json();
  } catch (error) {
    console.error("Error in getCityTours", error.message);
    return null;
  }
}

const Page = async ({ params: { locale, city } }) => {
  unstable_setRequestLocale(locale);

  const results = await Promise.allSettled([
    getDestinationsData(locale),
    getWeProvideData(locale),
    getCityTours(locale, city)
  ]);

  const destinationsData = results[0].status === 'fulfilled' ? results[0].value : null;
  const weProvideData = results[1].status === 'fulfilled' ? results[1].value : null;
  const cityToursData = results[2].status === 'fulfilled' ? results[2].value : null;

  return (
    <HomePage
      destinationsData={destinationsData}
      weProvideData={weProvideData}
      cityToursData={cityToursData}
      locale={locale} />
  );
}

export default Page