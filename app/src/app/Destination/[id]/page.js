<<<<<<< HEAD
"use client"
import { useRouter } from 'next/router'

export default function Destination({params}) {
   
   console.log(params)
    return (
        <div>
            <h1>Destination is {params.id}</h1>
            <p>Details about {params.id}</p>
            {/* <img src={params.image}></img> */}
        </div>
    )
=======
"use client"
import { useRouter } from 'next/router'

export default function Destination({params}) {
   
   console.log(params)
    return (
        <div>
            <h1>Destination is {params.id}</h1>
            <p>Details about {params.id}</p>
            {/* <img src={params.image}></img> */}
        </div>
    )
>>>>>>> db58dd4fb1d626277ffae8e034dc9027420dff6a
}