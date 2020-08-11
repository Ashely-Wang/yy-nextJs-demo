import React from 'react'
import {getData, postTopics} from '../API/post'
import { th } from 'date-fns/locale'
import Link from 'next/link'
class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            user: '',
            title: ''
            // i: React.createRef()
        }
    }
    getUser = (e) => {
        this.setState({
            user: e.target.value
        }) 
    }
    getTitle = (e) => {
        this.setState({
            title: e.target.value
        }) 
    }
    pt = (e) => {
        e.preventDefault()
        // const pic = document.querySelector("#ee")
        const ooo = document.querySelector("#ooo")
        // console.log(pic.files[0].name)
        // let ppgod = pic.files.map(val => {
        //     return val.name
        // })
        
        const infor = {
            user: this.state.user,
            picture: ["t.png"],
            introduction: "Join in 2020.8.10",
            title: this.state.title,
        }
        // let formData = new FormData()
        // formData.append("picture", pic.files)
        // formData.append("otherInfor", infor)
        postTopics("http://127.0.0.1:3100/topics", infor)
        // console.log(formData)
        ooo.click()
    }
    render() {
        return <form action="" onSubmit={this.pt}>
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" onChange={this.getUser} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">With textarea</span>
            </div>
            <textarea className="form-control" onChange={this.getTitle} aria-label="With textarea"></textarea>
        </div>
        <div className="input-group-prepend">
            <input id="ee" type="file"/>
        </div>
        <button type="submit" id="sm" className="btn btn-success">发表</button>
        <Link href="/post">
            <a id="ooo">ddd</a>
        </Link>
    </form>
    }
}
export default Form