import App from './index';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import * as ShallowRenderer from 'react-test-renderer/shallow';

describe("Testing Main App Component", ()=>{

    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<App />);

    it("App will match snapshot",()=> {
        expect(renderer).toMatchSnapshot();
    });

    it('Parent is div',()=>{
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
    });

});
