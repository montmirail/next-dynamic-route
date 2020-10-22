import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

export default () => {
    const router = useRouter()
    const { type } = router.query;

    return (
        <div>
            <Link href={'/'}>
                Home
            </Link>

            <Link href={'/colors/red'}>
                Red
            </Link>

            <Link href={'/colors/blue'}>
                Blue
            </Link>

            <div>
                {type ? (
                    `Type: ${type}`
                ) : (
                    'no type'
                )}
            </div>
        </div>
    );
}
