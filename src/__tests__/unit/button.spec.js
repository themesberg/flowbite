const { createButton } = require('../../stories/button')
const { configureAxe, toHaveNoViolations } = require('jest-axe')

const axe = configureAxe({
	rules: {
		// disabled landmark rules when testing isolated components.
		'region': { enabled: false }
	}
})

expect.extend(toHaveNoViolations)

describe('Button', () => {
	it('should be accessible', async () => {
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
