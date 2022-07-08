import config from '../core/config'

const prefix = config.getClassesPrefix()

export const getPrefixedClassName = value => {
    console.log(value.replaceAll('%prefix%', prefix))
    return value.replaceAll('%prefix%', prefix)
}

export const getPrefixedClassNames = values => {
    let prefixedValues = ''
    values.split(" ").map(v => {
        prefixedValues += getPrefixedClassName(v) + ' '
    })
    console.log(prefixedValues.trim())
    return prefixedValues.trim()
}