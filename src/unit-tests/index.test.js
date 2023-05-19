import { cleanup, render, screen } from '@testing-library/svelte';
import Page from '../routes/+page.svelte';
import * as About from '../routes/about/+page.svelte';

describe('index page', () => {
	/**
	 * Unit testing using @testing-library/svelte to create DOM elements with the Page component.
	 * We then test against that DOM and try to find the elements present for our heading and intro paragraph
	 * We would be using these unit tests to develop small testable changes and could ensure these tests run
	 * for each commit to the repository.
	 */
	beforeEach(() => {
		//render page
		render(Page);
	});

	afterEach(() => {
		//clean up testing dom to not have repeat elements
		cleanup();
	});

	it('has a welcome heading', async () => {
		const heading = await screen.findByRole('heading');
		const headingContent = heading.textContent;

		expect(heading).to.not.be.empty;
		expect(headingContent).toEqual('Business Page Heading');
	});

	it('has an intro paragraph element', async () => {
		const welcomeParagraph = await screen.findByText('A intro paragraph');

		expect(welcomeParagraph.textContent).to.not.be.empty;
	});
});

describe('about page', () => {
	beforeEach(() => {
		render(About);
	})
	afterEach(()=> cleanup());
	
	it('has a about title', async () => {
		const aboutHeading = await screen.findByRole('heading')

		expect(aboutHeading.textContent).not.toBeNull;
		expect(aboutHeading.textContent).toEqual("About Page");
		
	})
})
