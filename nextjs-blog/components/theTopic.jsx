
import React from 'react'

class Topic extends React.Component {
    constructor() {
        super()
        this.state = {
            style1: {maxWidth: "18rem"},
            style2: {maxWidth: "18rem"}
        }
    }
    render() {
        let allImages = this.props.children.picture.map(val => {
            return <div className="card" style={this.state.style1} key={this.props.children.picture.indexOf(val)}>
            <img src={"http://127.0.0.1:3100/" + val} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">...</p>
            </div>
            </div>
        })
        console.log(allImages)
        return <div className="container">
        {/* <div className="card text-white bg-success mb-3" style={this.state.style1}>
        <div className="card-header">{this.props.children.user}</div>
        <div className="card-body">
            <h5 className="card-title">{this.props.children.title}</h5>
            <p className="card-text">死亡如风，常伴吾身</p>
            <img src="http://127.0.0.1:3100/0.png" alt=""/>
        </div>
        </div> */}
        <div className="jumbotron">
    <h1 className="display-4">{this.props.children.user}</h1>
            <p className="lead">{this.props.children.introduction}</p>
            <hr className="my-4" />
            <p>{this.props.children.title}</p>
            <div id="niubi" className="container">
                {allImages}
                {/* ## */}
            </div>
        </div>
    </div>
    }
}
export default Topic
// export default function Topic(props) {
//     // const [] = useState()
//     return <div className="container">
//         <div className="modal" tabindex="-1" role="dialog">
//         <div className="modal-dialog">
//             <div className="modal-content">
//             <div className="modal-header">
//                 <h5 className="modal-title">Modal title</h5>
//                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//                 </button>
//             </div>
//             <div className="modal-body">
//                 {/* <p>{this.props.children}</p> */}
//             </div>
//             <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                 <button type="button" className="btn btn-primary">Save changes</button>
//             </div>
//             </div>
//         </div>
//         </div>
//     </div>
// }