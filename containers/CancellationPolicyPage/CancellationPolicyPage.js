import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import styles from './CancellationPolicyPage.module.scss'

const CancellationPolicyPage = () => {
  return (
    <>
      <Breadcrumb />
      <div className={styles.page}>
        <div className='g-container'>
          <h1 class="page-title">
            Cancellation policy
          </h1>
          <p className='section-text'>Let’s contact!</p>
          <div className={`${styles.page__content} rich-content`}>
            <p>As Alison Travel, we know and understand that your plans can change or sometimes you may need to cancel your booking. We have prepared a policy in order to protect the interests of our valued customers and our company. Please review our cancellation policy below before making any kind of transaction such as reservation, reservation and purchase.</p>
            <br />
            <p><strong>In terms of transactions that are paid at the time of booking</strong></p>
            <br />
            <p>• If you cancel 15 days or more before the start of your booking, you will receive a full refund.</p>
            <p>• If you cancel between 2 to 3 days before the start of your booking, you will receive a partial refund of 90 % of the booking fee. &nbsp;</p>
            <p>• If you cancel after 1 day or less before the start of your booking, you will not be eligible for a refund.</p>
            <br />
            <p>Your booking may also be canceled by the Company, provided that you are notified of the reason, in compulsory situations such as unforeseen circumstances, force majeure situations, natural disasters, suspect of fraudulent activity, etc. In such cases, you will receive a full refund.</p>
            <br />
            <p>If you need to cancel your booking, please contact us as soon as possible to avoid any forfeiture. You can directly e-mail your cancellation demand to <a href="mailto:reservation@alisontravel.eu" target="_blank" rel="noopener">reservation@alisontravel.eu</a></p>
            <br />
            <p>Please do not forget to add your reservation or booking code so that we can process your transaction. Please contact us for further information.</p>
            <br />
            <p>Thank you for choosing us, and we hope to see you again in the future.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CancellationPolicyPage