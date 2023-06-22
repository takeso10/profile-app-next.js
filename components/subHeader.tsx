import Link from "next/link";

export default function SubHeader (){
    return(
        <div>
            <Link href='/'>
                Home
            </Link>
            <div>
                <Link href='./profile'>
                   自己紹介
                </Link>
                <Link href='./sns'>
                    SNS
                </Link>
                <Link href='./job'>
                    仕事
                </Link>
                <Link href='./private'>
                    プライベート
                </Link>
                <Link href='./products'>
                    成果物
                </Link>
            </div>
        </div>
    )
}