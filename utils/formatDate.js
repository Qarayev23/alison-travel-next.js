import { formatDistanceToNow } from 'date-fns';
import { enUS, ru, ar, zhCN } from 'date-fns/locale';  // Lazım olan lokalları import edin

/**
 * Verilmiş tarixi lokalizasiya edilmiş "n vaxt əvvəl" formatında qaytarır.
 *
 * @param {string} dateStr - ISO 8601 tarix formatında olan string
 * @param {string} locale - Lokal parametri (məs. 'en', 'ru', 'ar', 'zhCN')
 * @returns {string} Tarixi ifadə edən string
 */
function formatDate(dateStr, locale = 'en') {
    const locales = { en: enUS, ru: ru, ar: ar, zhCN: zhCN }; // Dillər üçün locale mapping
    const date = new Date(dateStr);
    return formatDistanceToNow(date, { addSuffix: true, locale: locales[locale] || enUS });
}

export default formatDate;
