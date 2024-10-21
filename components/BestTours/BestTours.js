import { useRouter } from '@/src/i18n/routing';
import TourCard from '../TourCard/TourCard'
import ShowMore from '../UI/ShowMore/ShowMore'
import styles from './BestTours.module.scss'

const BestTours = ({ data }) => {
    const router = useRouter();

    const handleShowMore = () => {
        router.push(`/tours?best_seller=true`);
    }

    return (
        <div className={styles.tour}>
            <div className='g-container'>
                <h2 className="section-title">
                    {data?.section_title}
                </h2>
                <p className="section-text">
                    {data?.section_subtitle}
                </p>
                <div className={styles.tour__list}>
                    {
                        data?.data?.map((item, i) => (
                            <TourCard key={i} data={item} />
                        ))
                    }
                </div>
                <ShowMore handleShowMore={handleShowMore} />
            </div>
        </div>
    )
}

export default BestTours