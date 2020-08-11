import MyApp from "./_app";
import getData from '../API/post'
import {useRouter} from 'next/router'
export default function Post({allTopics}) {
    const style = {
        style1: {width: "18rem"},
        style2: {width: "1200px"}
    }
    const router = useRouter()
    // const toThisTopic =(e) => {
    //     e.preventDefault()
    //     // router.push(`topics\\${title}`)
    //     console.log("sggg")
    // }
    let posts = allTopics.map(val => {
        return  <div className="card" style={style.style1} key={allTopics.indexOf(val)}>
                <div className="card-body">
                    <h5 className="card-title">{val.user}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{val.introduction}</h6>
                    <p className="card-text">{val.title}</p>
                    <a href="" onClick={(e) => {
                        e.preventDefault()
                        router.push(`/topics/${val.id}`, undefined, { shallow: true })
                    }} className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
                </div>
    })
return <div className="container">
        <div className="jumbotron" style={style.style2}>
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <div className="container">
                {/* <div className="card" style={style.style1}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text"></p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
                </div> */}
                {posts}
            </div>
            <a className="btn btn-primary btn-lg" id="rt" href="#" role="button">Learn more</a>
        </div>
    </div>
}

//#########################################################

export async function getServerSideProps() {
    const mu = await getData("http://127.0.0.1:3100/topics")
    return {
        props: {
            allTopics: mu.data.allTopics
        }
    }
}   