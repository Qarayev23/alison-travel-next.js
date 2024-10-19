import ToursPage from "@/containers/ToursPage/ToursPage"
import { unstable_setRequestLocale } from "next-intl/server";

const getToursData = async (locale, searchParams) => {
  if (!searchParams.size) {
    searchParams.size = 1
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}tours?${new URLSearchParams(searchParams)}`, {
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

const Page = async ({ params: { locale }, searchParams }) => {
  unstable_setRequestLocale(locale);

  const toursData = await getToursData(locale, searchParams);

  return (
    <ToursPage data={toursData} />
  )
}

export default Page