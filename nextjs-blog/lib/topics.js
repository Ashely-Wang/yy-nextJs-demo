import axios from 'axios'

export default async function getTopics(id) {
    console.log(id)
    const url = "http://127.0.0.1:3100/topic/" + id
    console.log(url)
    const ret = await axios.get(url)
    return ret
}