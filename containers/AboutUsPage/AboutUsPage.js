"use client"

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import styles from './AboutUsPage.module.scss'
import WeProvide from '@/components/WeProvide/WeProvide'
import OurTeam from '@/components/OurTeam/OurTeam'
import { HtmlContent } from '@/utils/HTMLcontent'

const AboutUsPage = ({ aboutUsData, weProvideData, teamMembersData }) => {
    return (
        <>
            <Breadcrumb data={[{ name: 'About us', url: '/about-us' }]} />
            <div className={styles.about}>
                <div className='g-container'>
                    <h1 className='page-title'>
                        {aboutUsData?.title}
                    </h1>
                    <p className='section-text'>{aboutUsData?.subtitle}</p>
                    <HtmlContent
                        html={aboutUsData?.body}
                        className={`${styles.about__content} rich-content`}
                    />
                </div>
                {
                    !!weProvideData.data?.length && <WeProvide data={weProvideData} />
                }
                {
                    !!teamMembersData?.data?.length && <OurTeam data={teamMembersData} />
                }
            </div>
        </>
    )
}

export default AboutUsPage