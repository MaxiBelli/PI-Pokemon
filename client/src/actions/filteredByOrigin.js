export const FILTERED_BY_ORIGIN = "FILTERED_BY_ORIGIN"

const filteredByOrigin = (payload) => {
    return {
        type: FILTERED_BY_ORIGIN,
        payload
    }
}

export default filteredByOrigin;