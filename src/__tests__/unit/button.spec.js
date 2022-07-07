// const { args } = require('../../stories/button.stories')
// const { createButton } = require('../../stories/button')
// const { configureAxe, toHaveNoViolations } = require('jest-axe')

import args from '../../stories/button.stories'
import { createButton } from '../../stories/button'
import {configureAxe, toHaveNoViolations} from 'jest-axe'

const axe = configureAxe({
	rules: {
		// disabled landmark rules when testing isolated components.
		'region': { enabled: false }
	}
})

expect.extend(toHaveNoViolations)

describe('Button', () => {
	it('should be accessible', async () => {
		console.log(args)
		const render = () => createButton({
			style: 'default',
			size: 'md',
			label: 'Default'
		})

		// pass anything that outputs html to axe
		const html = render()

		expect(await axe(html)).toHaveNoViolations()
	})
})
