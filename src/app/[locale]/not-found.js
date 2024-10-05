import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import NotFoundPage from '@/containers/NotFoundPage/NotFoundPage'

const NotFound = () => {
  return (
    <>
      <Breadcrumb data={[{ name: "Not found", url: "/" }]} />   
      <NotFoundPage />
    </>
  )
}

export default NotFound