export const FILTERED_BY_NAME = "FILTERED_BY_NAME"

const filterByName = (payload) => {
    return {
        type: FILTERED_BY_NAME,
        payload
    }
}

export default filterByName;