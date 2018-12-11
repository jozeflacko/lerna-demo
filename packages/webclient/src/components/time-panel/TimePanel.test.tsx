import TimePanel from './TimePanel';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import TimeUtils from '../../utils/TimeUtils';

// mock TimeUtils
jest.mock('../../utils/TimeUtils');
const mockedTimeUtils = TimeUtils as jest.Mocked<typeof TimeUtils>;
mockedTimeUtils.getToday.mockReturnValue("22:22:22 22.2.2022");

describe("Testing Main App Component", ()=>{


    const renderer = TestRenderer.create(<TimePanel prefixText="Hello"/>);
    const instance = renderer.getInstance();

    it.only("App will match snapshot",()=> {
        expect(renderer.toJSON()).toMatchSnapshot();
    });    

});
