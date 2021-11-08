export const FILTERED_BY_POWER = "FILTERED_BY_POWER"

const filterByPower = (payload) => {
    return {
        type: FILTERED_BY_POWER,
        payload
    }
}

export default filterByPower;