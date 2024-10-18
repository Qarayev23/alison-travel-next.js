import HotelDetailPage from "@/containers/HotelDetailPage/HotelDetailPage";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

const getHotelData = async (locale, slug) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}hotels/${slug}`, {
      method: 'GET',
      headers: {
        'Accept-Language': locale,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    })
    return await res.json();
  } catch (error) {
    console.error("Error in getHotelData", error.message);
    return null;
  }
}

const getReservationData = async (locale) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}reservation-services`, {
      method: 'GET',
      headers: {
        'Accept-Language': locale,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    })
    return await res.json();
  } catch (error) {
    console.error("Error in getHotelData", error.message);
    return null;
  }
}

const Page = async ({ params: { locale, slug } }) => {
  unstable_setRequestLocale(locale);

  const results = await Promise.allSettled([
    getHotelData(locale, slug),
    getReservationData(locale),
  ]);

  const hotelData = results[0].status === 'fulfilled' ? results[0].value : null;
  const reservationData = results[1].status === 'fulfilled' ? results[1].value : null;

  if (hotelData.error === "Tour not found") {
    return notFound()
  }

  return (
    <HotelDetailPage data={hotelData} reservationData={reservationData} />
  )
}

export default Page