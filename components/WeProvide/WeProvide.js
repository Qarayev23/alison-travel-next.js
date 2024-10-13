import Image from 'next/image'
import styles from './WeProvide.module.scss'

const WeProvide = ({ data }) => {
    return (
        <div className={styles.weProvide}>
            <div className="g-container">
                <h2 className="section-title">
                    {data?.section_title}
                </h2>
                <p className="section-text">
                    {data?.section_subtitle}
                </p>
                <div className={styles.weProvide__list}>
                    {
                        data?.data?.map((item, index) => (
                            <div className={styles.weProvide__item} key={index}>
                                <Image src={item.icon} width={32} height={32} alt={item.title} />
                                <div className={styles.weProvide__item__content}>
                                    <h3 className={styles.weProvide__item__title}>{item.title}</h3>
                                    <p className={styles.weProvide__item__desc}>{item.subtitle}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WeProvide