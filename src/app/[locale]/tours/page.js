import ToursPage from "@/containers/ToursPage/ToursPage"
import { unstable_setRequestLocale } from "next-intl/server";

const getToursData = async (locale) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}tour-list`, {
      method: 'GET',
      headers: {
        'Accept-Language': locale,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    })
    return await res.json();
  } catch (error) {
    console.error("Error in getToursData", error.message);
    return null;
  }
}

const Page = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const toursData = await getToursData(locale);

  return (
    <ToursPage data={toursData} />
  )
}

export default Page