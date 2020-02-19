import React, {useEffect} from 'react';
import { useSelector, connect } from 'react-redux'
import {updateRides} from '../redux/reducers/FormulaReducer/formulaReducer'

const ScheduleFormula = (props) => {
    const selectedRides = useSelector(state => state.userInputReducer.selecedRides)

//have them all show up at the moment

    useEffect(() => {
        props.updateRides()

    },[])

    return (
        <div>Schedule Formula</div>
    )
}

const mapStateToProps = state => {
    const {park, month, expressPass, parkHopperPass, selecedRides} = state.userInputReducer;
    return {
        park: park,
        month: month,
        expressPass: expressPass,
        parkHopperPass: parkHopperPass,
        selectedRides: selecedRides
    }
}

export default connect(mapStateToProps, {
    updateRides
})(ScheduleFormula)