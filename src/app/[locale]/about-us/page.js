import AboutUsPage from '@/containers/AboutUsPage/AboutUsPage'
import { unstable_setRequestLocale } from 'next-intl/server'

const getAboutUsData = async (locale) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}pages/about`, {
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

const getTeamMembersData = async (locale) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}team-members`, {
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

const data = await getAboutUsData()

export const metadata = {
  title: data?.seo_title,
  description: data?.seo_description,
  keywords: data?.seo_keywords,
};

const Page = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale)

  const results = await Promise.allSettled([
    getAboutUsData(locale),
    getWeProvideData(locale),
    getTeamMembersData(locale),
  ]);

  const aboutUsData = results[0].status === 'fulfilled' ? results[0].value : null;
  const weProvideData = results[1].status === 'fulfilled' ? results[1].value : null;
  const teamMembersData = results[2].status === 'fulfilled' ? results[2].value : null;

  return (
    <AboutUsPage
      aboutUsData={aboutUsData}
      weProvideData={weProvideData}
      teamMembersData={teamMembersData}
    />
  )
}

export default Page