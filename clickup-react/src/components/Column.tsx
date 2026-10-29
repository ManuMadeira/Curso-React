import type { ReactNode } from 'react';

interface ColumnProps{
    title:string
    count:number;
    children: ReactNode;

}

function Column({ title, count, children}:ColumnProps){
    return(
        <section className= "rounded-lg bg-gray-200 p-4 ">
            <h2 className='mb-3 flex items-center justify-between font-bold text-gray-700'>
                {title}
                <span className='bg-white px-2 rounded-full text-sm'>
                    {count} items
                </span>
            </h2>
            <div className = 'flex flex-col gap-3'>
            {children}
            </div>
        </section>
    )
        
    }
    export default Column