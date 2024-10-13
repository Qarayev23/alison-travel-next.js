import TourDetailPage from "@/containers/TourDetailPage/TourDetailPage"
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

const getTourData = async (locale, slug) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}tours/${slug}`, {
      method: 'GET',
      headers: {
        'Accept-Language': locale,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    })
    return await res.json();
  } catch (error) {
    console.error("Error in getTourData", error.message);
    return null;
  }
}

const Page = async ({ params: { locale, slug } }) => {
  unstable_setRequestLocale(locale);

  const tourData = await getTourData(locale, slug);

  if (tourData.error === "Tour not found") {
    return notFound()
  }

  return (
    <TourDetailPage data={tourData} />
  )
}

export default Page