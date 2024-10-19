import { useCallback } from 'react';
import styles from './style.module.scss';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { debounce } from 'lodash';

function Checkbox({ title, param, value }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleChange = (event) => {
        const { checked, value, name } = event.target;

        if (checked) {
            debouncedUpdateRouter(name, value);
        } else {
            debouncedUpdateRouter(name, '');
        }
    };

    const createQueryString = useCallback((name, value) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value)

        return params.toString()
    }, [searchParams])

    const debouncedUpdateRouter = useCallback((name, value) => {
        router.push(pathname + '?' + createQueryString(name, value), { scroll: false });
    }, [createQueryString, pathname, router]);

    return (
        <label className={styles.checkbox}>
            <span>{title}</span>
            <input
                type="checkbox"
                name={param}
                value={value}
                onChange={handleChange}
            />
            <div className={styles.checkbox__mark}></div>
        </label>
    );
}

export default Checkbox;
