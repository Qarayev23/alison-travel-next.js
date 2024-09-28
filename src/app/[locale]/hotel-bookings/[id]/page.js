import HotelDetailPage from "@/containers/HotelDetailPage/HotelDetailPage"
import { unstable_setRequestLocale } from "next-intl/server";

const Page = ({ params: { locale } }) => {
    unstable_setRequestLocale(locale);

    return (
        <HotelDetailPage />
    )
}

export default Page