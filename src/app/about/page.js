'use client'

import Link from 'next/link'

export default function About() {

  console.log("color inn abt", )
  return (<>
    <h1 style={{'color': "red"}}>Main page </h1>
    <p>Current color: red</p>
    <button>Set color to blue</button>
    <p><Link href="contact">Goto conatct page</Link></p>
  </>)
}