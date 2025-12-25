function steamrollArray(arr) {
    const result = [];

    function flatten(item) {
        if (Array.isArray(item)) {
            for (const el of item) {
                flatten(el);
            }
        } else {
            result.push(item);
        }
    }

    flatten(arr);
    return result;
}
