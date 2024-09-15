import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import styles from './NewsDetailPage.module.scss'

const NewsDetailPage = () => {
    return (
        <>
            <Breadcrumb />
            <div className={styles.news}>
                <div className="g-container">
                    <div className={styles.news__wrapper}>
                        <div className={styles.news__left}>
                        </div>
                        <div className={styles.news__right}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsDetailPage