let moderate_times = (req, res) => {
    const db = req.app.get('database');
    db.Islands_of_Adventure.moderate_times().then(times => {
        res.status(200).json(times)
    }).catch(error => {
        console.log(error)
        res.status(500).json('Cannot process your request at this time.')
    })
}

module.exports = {
    moderate_times
}