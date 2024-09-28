import FavoritesPage from '@/containers/FavoritesPage/FavoritesPage'
import { unstable_setRequestLocale } from 'next-intl/server'

const Page = ({params: {locale}}) => {
  unstable_setRequestLocale(locale)
  
  return (
    <FavoritesPage />
  )
}

export default Page