import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import styles from './CancellationPolicyPage.module.scss'
import { HtmlContent } from '@/utils/HTMLcontent'

const CancellationPolicyPage = ({ data }) => {
  return (
    <>
      <Breadcrumb data={[{ name: 'Cancellation policy', url: '/cancellation-policy' }]} />
      <div className={styles.page}>
        <div className='g-container'>
          <h1 className="page-title">
            {data.title}
          </h1>
          <p className='section-text'>{data.subtitle}</p>
          <HtmlContent
            html={data.body}
            className={`${styles.page__content} rich-content`}
          />
        </div>
      </div>
    </>
  )
}

export default CancellationPolicyPage