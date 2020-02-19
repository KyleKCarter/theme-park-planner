const moderate_times = (req, res) => {
    const db = req.app.get('database');
    db.Universal_Studios.moderate_times().then(times => {
        res.status(200).json(times)
    }).catch(error => {
        console.log(error)
        res.status(500).json('Cannot process your request at this time.')
    })
}



const moderate_ride_times_asc_nine_am = (req, res) => {
    const db = req.app.get('database');
    db.Universal_Studios.Schedule_Moderate.nine_am().then(times => {
        res.status(200).json(times)
    }).catch(error => {
        console.log(error)
        res.status(500).json('Cannot process your request at this time.')
    })
}

module.exports = {
    moderate_times,
    moderate_ride_times_asc_nine_am
}