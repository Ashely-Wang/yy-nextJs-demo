import Link from 'next/link' 


export default function Main() {
    return <div>
        <img src="/vercel.svg" alt=""/>
        <h2 className="titleNeedToChange">死uhfh</h2>
        <Link href="/">
            <button>back to home</button>
        </Link>
<style jsx>{`
    .titleNeedToChange {
        color: skyblue;
    }
`}</style>
    </div>
}