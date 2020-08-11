import axios from 'axios'
export default async function getData(url) {
    const ret = await axios.get(url)
    return ret
}

export async function postTopics(url, newTopics) {
    // const ret = await axios.post(url, newTopics, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data'
    //     }
    // })
    const ret = await axios.post(url, newTopics)
    return ret
} 