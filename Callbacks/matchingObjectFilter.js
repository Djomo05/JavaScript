/**
 * Implement a Matching Object Filter
 *
 * @param param1: {first: string|null; last: string|null}[]
 * @param param2: {first: string|null; last: string|null}
 *
 * @return {first: string|null; last: string|null}[] | []
 */
function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);

    return collection.filter(obj =>
        sourceKeys.every(key =>
            obj.hasOwnProperty(key) && obj[key] === source[key]
        )
    );
}
