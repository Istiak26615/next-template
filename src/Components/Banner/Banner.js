'use client'
import { useThemeContext } from '@/context/theme';
import Link from 'next/link'

export default function Banner() {
  const { color, setColor} = useThemeContext();
  console.log("color inn abt", color)
  return (<>
    <h1 style={{'color': color}}>Main page </h1>
    <p>Current color: {color}</p>
    <button onClick={()=> setColor('red')}>Set color to blue</button>
    <p><Link href="contact">Goto conatct page</Link></p>
  </>)
}