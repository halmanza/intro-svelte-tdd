import Button from "../../components/button.svelte";
import { screen, render, cleanup } from "@testing-library/svelte";
import { MockedFunction } from "vitest";

describe('General button component', () => {
    beforeEach(() => render(Button, { content: 'test', idValue:'test_id'}));
    afterEach(() => cleanup());

    it('loads properly', async () => {
        const button = await screen.findByRole('button');
        
        expect(button).not.toBeNull();
    })

    it('has content value', async () => {
        const button = await screen.findByRole('button');

        expect(button.textContent).toEqual('test');
    })

    it('has applied id name', async ()=> {
        const button = await screen.findByRole('button');

        expect(button.id).toEqual('test_id');
    })

    it('when clicked it uses provided path', () => {
        const path = '/about';
        //todo: calls button component with provided path
    })
})