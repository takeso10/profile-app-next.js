import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/header'

export default function Home() {
  return (
    <div>
      <Header/>
      <h1>こんにちは！　竹内颯汰です！</h1>
      <div>
        <Link href={'./profile'}>
          <h2>自己紹介</h2>
        </Link>
        <Link href={'./sns'}>
          <h2>SNS</h2>
        </Link>
        <Link href={'./job'}>
          <h2>仕事</h2>
        </Link>
        <Link href={'./private'}>
          <h2>プライベート</h2>
        </Link>
        <Link href={'./products'}>
          <h2>成果物</h2>
        </Link>
      </div>
    </div>
  )
}
