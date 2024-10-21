import { useCallback } from 'react';
import styles from './style.module.scss';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

function Checkbox({ title, param, value, isSelected }) {
    console.log(isSelected, title);
    
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleChange = (event) => {
        const { checked, value, name } = event.target;

        const newValues = toggleArrayItem(searchParams.get(name)?.split(','), value);

        debouncedUpdateRouter(name, newValues.join(','));
    };

    // Helper function to add or remove values from an array
    const toggleArrayItem = (arr, item) => {
        arr = arr || [];
        const index = arr.indexOf(item);
        if (index > -1) {
            arr.splice(index, 1);
        } else {
            arr.push(item);
        }
        return arr;
    };

    const createQueryString = useCallback((name, value) => {
        const params = new URLSearchParams(searchParams.toString());
        value ? params.set(name, value) : params.delete(name);

        return params.toString();
    }, [searchParams]);

    const debouncedUpdateRouter = useCallback((name, value) => {
        router.push(`${pathname}?${createQueryString(name, value)}`, { scroll: false });
    }, [createQueryString, pathname, router]);

    return (
        <label className={styles.checkbox}>
            <span>{title}</span>
            <input
                type="checkbox"
                name={param}
                value={value}
                onChange={handleChange}
                checked={isSelected}
            />
            <div className={styles.checkbox__mark}></div>
        </label>
    );
}

export default Checkbox;