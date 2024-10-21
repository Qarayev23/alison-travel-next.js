import HotelsPage from "@/containers/HotelsPage/HotelsPage";
import { unstable_setRequestLocale } from "next-intl/server";

const getHotelsData = async (locale, searchParams) => {
  if (!searchParams.size) {
    searchParams.size = 2
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}hotels?${new URLSearchParams(searchParams)}`, {
      method: 'GET',
      headers: {
        'Accept-Language': locale,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    })
    return await res.json();
  } catch (error) {
    console.error("Error in getHotelsData", error.message);
    return null;
  }
}

const Page = async ({ params: { locale }, searchParams }) => {
  unstable_setRequestLocale(locale);

  const hotelsData = await getHotelsData(locale, searchParams);

  return (
    <HotelsPage data={hotelsData} />
  )
}

export default Page