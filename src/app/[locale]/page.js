import HomePage from "@/containers/HomePage/HomePage";
import { unstable_setRequestLocale } from "next-intl/server";

const getHomeBannerData = async (locale) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}home/banner`, {
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

const getDestinationsData = async (locale) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}home/destinations`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}home/we-provide`, {
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

const getCityTours = async (locale) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}home/azerbaijan-tours-by-cities`, {
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

const Page = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const results = await Promise.allSettled([
    getHomeBannerData(locale),
    getDestinationsData(locale),
    getWeProvideData(locale),
    getCityTours(locale)
  ]);

  const homeBannerData = results[0].status === 'fulfilled' ? results[0].value : null;
  const destinationsData = results[1].status === 'fulfilled' ? results[1].value : null;
  const weProvideData = results[2].status === 'fulfilled' ? results[2].value : null;
  const cityToursData = results[3].status === 'fulfilled' ? results[3].value : null;

  return (
    <HomePage
      homeBannerData={homeBannerData}
      destinationsData={destinationsData}
      weProvideData={weProvideData}
      cityToursData={cityToursData}
    />
  );
}

export default Page