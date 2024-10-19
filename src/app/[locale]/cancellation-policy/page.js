import CancellationPolicyPage from '@/containers/CancellationPolicyPage/CancellationPolicyPage'
import { unstable_setRequestLocale } from 'next-intl/server'

const getCancellationPolicyData = async (locale) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}pages/cancellation-policy`, {
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

const data = await getCancellationPolicyData()

export const metadata = {
  title: data?.seo_title,
  description: data?.seo_description,
  keywords: data?.seo_keywords,
};

const Page = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale)

  const cancellationPolicyData = await getCancellationPolicyData(locale)

  return (
    <CancellationPolicyPage data={cancellationPolicyData} />
  )
}

export default Page