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

	// check style types
	args.argTypes.style.options.map(s => {
		it(`${s} should be accessible`, async () => {
			const render = () => createButton({
				style: s,
				size: 'md',
				label: 'Default'
			})
	
			// pass anything that outputs html to axe
			const html = render()
	
			expect(await axe(html)).toHaveNoViolations()
		})
	})

	// check button sizes
	args.argTypes.size.options.map(s => {
		it(`${s} should be accessible`, async () => {
			const render = () => createButton({
				style: 'default',
				size: s,
				label: 'Default'
			})
	
			// pass anything that outputs html to axe
			const html = render()
	
			expect(await axe(html)).toHaveNoViolations()
		})
	})

})
