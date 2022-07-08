import config from '../core/config'

const prefix = config.getClassesPrefix()

export const getPrefixedClassName = value => {
    return value.replaceAll('%p%', prefix)
}

export const getPrefixedClassNames = values => {
    let prefixedValues = ''
    values.split(" ").map(v => {
        prefixedValues += getPrefixedClassName(v) + ' '
    })
    return prefixedValues.trim()
}