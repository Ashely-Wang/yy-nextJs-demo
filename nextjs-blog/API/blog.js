import axios from 'axios'

export default async function getBlogData(url) {
    const ret = await axios.post(url, {name: "蔡徐坤", password: 123})
    console.log(ret.data);
    return ret
}


