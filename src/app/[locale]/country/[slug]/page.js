import ToursPage from "@/containers/ToursPage/ToursPage"
import { unstable_setRequestLocale } from "next-intl/server";

const getToursData = async (locale, slug, searchParams) => {
    if (!searchParams.size) {
        searchParams.size = 2
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}tours?country=${slug}&${new URLSearchParams(searchParams)}`, {
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

const Page = async ({ params: { locale, slug }, searchParams }) => {
    unstable_setRequestLocale(locale);

    const toursData = await getToursData(locale, slug, searchParams);

    return (
        <ToursPage data={toursData} />
    )
}

export default Page