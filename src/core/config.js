import configuration from '../../flowbite.config'

const Default = {
    prefix: ''
}

class Config {
    constructor(options) {
        this.options = { ...Default, ...options }
    }

    getPrefix() {
        return this.options.prefix
    }

    setPrefix(prefix) {
        this.options.prefix = prefix
    }

}

export default new Config(configuration)