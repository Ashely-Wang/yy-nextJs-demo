import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Header from 'next/head'
import Date from '../../components/Date.jsx'
export default function Post({postData, testContent}) {
    return <Layout>
             <Header>
                 <title>
                    {postData.title}
                 </title>
             </Header>
            <br />
            {postData.id}
            <br />
            <Date dateString={postData.date}></Date>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <div dangerouslySetInnerHTML={{ __html: testContent }} />
    </Layout>
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}
  
export async function getStaticProps({ params }) {
    // console.log(params);
    // Fetch necessary data for the blog post using params.id
    const testContent = "<div><h1>笑傲江湖</h1><hr/><p>令狐冲</p></div>"
    const postData = await getPostData(params.id)
    console.log(postData)
    return {
        props: {
            postData,
            testContent: testContent
        }
    }
}