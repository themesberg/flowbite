import fbConfig from '../../flowbite.config';
import twConfig from '../../tailwind.config';

const Default = {
    flowbiteConfig: {
        prefix: 'fwb-',
    },
    tailwindConfig: {
        prefix: 'fwb-',
    },
};

class Config {
    constructor(fbConfig, twConfig) {
        this.fbConfig = { ...Default.flowbiteConfig, ...fbConfig };
        this.twConfig = { ...Default.tailwindConfig, ...twConfig };
    }

    getSelectorsPrefix() {
        return this.fbConfig.prefix;
    }

    getClassesPrefix() {
        return this.twConfig.prefix;
    }
}

export default new Config(fbConfig, twConfig);
