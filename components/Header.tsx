import Link from "next/link"

const Header =() =>{
    return (
      <div className="w-full h-full">
        <nav className="flex">
            <ul className="flex align-middle">
                <li> <Link href='/films'>  Movies  </Link> </li>
                <li> <Link href='/actors'>Actors</Link></li>
                <li> <Link href='/premiers'> Preimiers</Link></li>
            </ul>
        
        </nav>
      </div>
    )
}


export {Header}