import postTopics from '../API/post'
import Form from '../components/post'
export default function() {
    return <div className="container">
        <Form />
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