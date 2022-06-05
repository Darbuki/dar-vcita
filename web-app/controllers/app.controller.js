// get req body and parses it correctly from it's original JSON form
exports.post_post = (req,res) => {
    const answer = (JSON.stringify(req.body).split(':')[0])
    const temp = answer.substring(
        answer.indexOf('"') +1,
        answer.lastIndexOf('"') 
    )
    console.log(temp)

    res.json(temp)
}