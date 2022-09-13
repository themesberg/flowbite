import config from '../core/config'

const prefix = config.getClassesPrefix()

export const getPrefixedClassName = (value: string) => {
    return value.replaceAll('%p%', prefix)
}

export const getPrefixedClassNames = (values: string) => {
    let prefixedValues: string = ''
    values.split(" ").map(v => {
        prefixedValues += getPrefixedClassName(v) + ' '
    })
    return prefixedValues.trim()
}