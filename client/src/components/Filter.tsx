"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter()
    const pathe = usePathname();

    const handelFilter = (value: string) => {

        const params = new URLSearchParams(searchParams)
        params.set("sort", value)
        router.push(`${pathe}?${params.toString()}`)
    }

    return (
        <div className='flex items-center justify-end gap-2 text-sm text-gray-500 my-6'>
            <span>sort</span>
            <select name='sort' id='sort' className='ring ring-gray-200 shadow-md rounded-sm' onChange={(e) => handelFilter(e.target.value)}>
                <option value="newest">newest</option>
                <option value="oldeest">Oldest</option>
                <option value="asc">Price: Low to Highest</option>
                <option value="desc">Price: Highest to Low</option>
            </select>
        </div>
    )
}

export default Filter