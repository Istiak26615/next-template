'use client'

import Link from 'next/link'

export default function Banner() {
  console.log("color inn abt", )
  return (<>
    <h1 >Main page </h1>
    <p>Current color:</p>
    <button >Set color to blue</button>
    <p><Link href="contact">Goto conatct page</Link></p>
  </>)
}