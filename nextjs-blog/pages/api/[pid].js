export default (req, res) => {
    const {
      query: { pid },
    } = req
    console.log(req.body)
    res.end(`Post: ${pid + req.query.a +req.body}`)
}