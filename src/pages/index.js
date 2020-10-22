import React from 'react';
import Link from 'next/link';

export default () => {
    return (
        <div>
            <Link href={'/colors'}>
                Colors
            </Link>

            <Link href={'/colors/red'}>
                Red
            </Link>

            <Link href={'/colors/blue'}>
                Blue
            </Link>
        </div>
    );
}
