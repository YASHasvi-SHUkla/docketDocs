import React, { useRef } from 'react';
import Card from './Card';
import { motion } from "framer-motion"

function Foreground() {

    const ref = useRef(null);
    const data = [
        {
            desc: "Passsing via Props oye",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: 'Download Now',
                tagColor: 'green'
            }
        },
        {
            desc: "Passsing via Props oye",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: 'Download Now',
                tagColor: 'blue'
            }
        },
        {
            desc: "Passsing via Props oye",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: 'Download Now',
                tagColor: 'green'
            }
        },

    ]
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item, index) =>(
                <Card data={item} reference={ref} />
            ))}
        </div>
    )
}
export default Foreground;