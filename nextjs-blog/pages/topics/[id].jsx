import Topic from '../../components/theTopic.jsx'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import getTopics from '../../lib/topics'
export default function ({uuu}) {
    const router = useRouter()
    const { tit } = router.query
    return <div className="container">
        <Topic>
            {uuu}
        </Topic>
       <style jsx>
            {`
                .container {
                    margin-top: 50px;
                    width: 580px;
                }
            `}
        </style>
    </div>
}

export async function getServerSideProps({params}) {
    console.log(params)
    const thisTopic = await getTopics(params.id)
    const uuu = thisTopic.data
    console.log(thisTopic)
    return {
        props: {
            uuu
        }
    }
}

