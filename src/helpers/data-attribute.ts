export const getPrefixedAttribute = (value, prefix = null) => {
    if (prefix === null || prefix === '') {
        return `data-${value}`;
    }

    return `data-${prefix}${value}`;
};

export const getPrefixedDataAttributes = (values, prefix) => {
    const prefixedValues = {};
    for (const key in values) {
        prefixedValues[key] = getPrefixedAttribute(values[key], prefix);
    }
    return prefixedValues;
};
