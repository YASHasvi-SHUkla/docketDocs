import React, { useRef } from 'react';
import Card from './Card';
import { motion } from "framer-motion"

function Foreground() {

    const ref = useRef(null);
    const data = [
        {
            desc: "Go buy some veggies",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: 'Download Now',
                tagColor: 'green'
            }
        },

        {
            desc: "Do the laundary",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: 'Download Now',
                tagColor: 'blue'
            }
        }

    ]
    return (
        <>        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))}
        </div>
            <footer className='fixed left-5 bottom-5 text-white '>Note: All the notes card are draggable !</footer>
        </>

    )
}
export default Foreground;