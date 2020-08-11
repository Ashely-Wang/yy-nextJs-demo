import Link from 'next/link' 
import getBlogData from '../API/blog'
export default function Home(props) {
    return <div className="container">
        alkffjkasfnck
    <h2>{props.name}</h2>
    <h2>{props.hobbies}</h2>
    <style jsx>
        {`
        h2 {
            color: red
        }

        `}
    </style>
    </div>
}
export async function getStaticProps() {
    const blogData = await getBlogData("http://127.0.0.1:3100/wawa")
    console.log(blogData.data)
    return {
        props: {
            name: blogData.data.name,
            hobbies: blogData.data.hobbies
        }
    }
}