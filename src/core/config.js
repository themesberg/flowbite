import fbConfig from '../../flowbite.config'
import twConfig from '../../tailwind.config'

const Default = {
    flowbiteConfig: {
        prefix: 'fb'
    },
    tailwindConfig: {
        prefix: ''
    }
}

class Config {
    constructor(fbConfig, twConfig) {
        this.fbConfig = { ...Default.flowbiteConfig, ...fbConfig }
        this.twConfig = { ...Default.tailwindConfig, ...twConfig }
    }

    getSelectorsPrefix() {
        return this.fbConfig.prefix
    }

    getClassesPrefix() {
        return this.twConfig.prefix
    }

}

export default new Config(fbConfig, twConfig)