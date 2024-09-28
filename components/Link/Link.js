'use client';

import { Link } from '@/src/i18n/routing';

export default function CustomLink({ href, ...rest }) {
    return (
        <Link
            href={href}
            {...rest}
        />
    );
}