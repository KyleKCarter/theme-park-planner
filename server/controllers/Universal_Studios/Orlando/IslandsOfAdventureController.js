let getJanTimes_Moderate = (req, res) => {
    const db = req.app.get('database');
    db.Islands_of_Adventure.january_times_moderate().then(times => {
        res.status(200).json(times)
    }).catch(error => {
        console.log(error)
        res.status(500).json('Cannot process your request at this time.')
    })
}

module.exports = {
    getJanTimes_Moderate
}