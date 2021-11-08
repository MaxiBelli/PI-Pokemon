export const FILTERED_BY_TYPES = "FILTERED_BY_TYPES"

const filteredByTypes = (payload) => {
    return {
        type: FILTERED_BY_TYPES,
        payload
    }
}

export default filteredByTypes;