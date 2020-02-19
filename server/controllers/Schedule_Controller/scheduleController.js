let crowd_level = (req, res) => {
    const db = req.app.get('database');
    const {month} = req.params
    db.Formula.crowd_level(month).then(level => {
        res.status(200).json(level)
    }).catch(error => {
        console.log(error)
        res.status(500).json('Cannot process your request at this time.')
    })
}

let selected_ride_types_MK = (req, res) => {
    const db = req.app.get('database');
    const {ride_type1, ride_type2, ride_type3, ride_type4} = req.query;
    db.Formula.Ride_Type_Moderate.ride_type_selection_MK([ride_type1, ride_type2, ride_type3, ride_type4]).then(rides => {
        res.status(200).json(rides)
    }).catch(error => {
        console.log(error)
        res.status(500).json('Cannot process your request at this time.')
    })
}

let selected_ride_types_HS = (req, res) => {
    const db = req.app.get('database');
    const {ride_type1, ride_type2, ride_type3, ride_type4} = req.query;
    db.Formula.Ride_Type_Moderate.ride_type_selection_HS([ride_type1, ride_type2, ride_type3, ride_type4]).then(rides => {
        res.status(200).json(rides)
    }).catch(error => {
        console.log(error)
        res.status(500).json('Cannot process your request at this time.')
    })
}

let selected_ride_types_EC = (req, res) => {
    const db = req.app.get('database');
    const {ride_type1, ride_type2, ride_type3, ride_type4} = req.query;
    db.Formula.Ride_Type_Moderate.ride_type_selection_EC([ride_type1, ride_type2, ride_type3, ride_type4]).then(rides => {
        res.status(200).json(rides)
    }).catch(error => {
        console.log(error)
        res.status(500).json('Cannot process your request at this time.')
    })
}

let selected_ride_types_AK = (req, res) => {
    const db = req.app.get('database');
    const {ride_type1, ride_type2, ride_type3, ride_type4} = req.query;
    db.Formula.Ride_Type_Moderate.ride_type_selection_AK([ride_type1, ride_type2, ride_type3, ride_type4]).then(rides => {
        res.status(200).json(rides)
    }).catch(error => {
        console.log(error)
        res.status(500).json('Cannot process your request at this time.')
    })
}

let selected_ride_types_US = (req, res) => {
    const db = req.app.get('database');
    const {ride_type1, ride_type2, ride_type3, ride_type4} = req.query;
    db.Formula.Ride_Type_Moderate.ride_type_selection_US([ride_type1, ride_type2, ride_type3, ride_type4]).then(rides => {
        res.status(200).json(rides)
    }).catch(error => {
        console.log(error)
        res.status(500).json('Cannot process your request at this time.')
    })
}

let selected_ride_types_IOA = (req, res) => {
    const db = req.app.get('database');
    const {ride_type1, ride_type2, ride_type3, ride_type4} = req.query;
    db.Formula.Ride_Type_Moderate.ride_type_selection_IOA([ride_type1, ride_type2, ride_type3, ride_type4]).then(rides => {
        res.status(200).json(rides)
    }).catch(error => {
        console.log(error)
        res.status(500).json('Cannot process your request at this time.')
    })
}

module.exports = {
    crowd_level,
    selected_ride_types_MK,
    selected_ride_types_HS,
    selected_ride_types_EC,
    selected_ride_types_AK,
    selected_ride_types_US,
    selected_ride_types_IOA
}