export const getDataAttribute = (value, prefix = null) => {
    if (prefix === null || prefix === '') {
        return `data-${value}`
    }

    return `data-${prefix}-${value}`
}

export const getDataAttributes = (values, prefix) => {
    const prefixedValues = {}
    for (const key in values) {
        prefixedValues[key] = getDataAttribute(values[key], prefix)
    }
    return prefixedValues
}