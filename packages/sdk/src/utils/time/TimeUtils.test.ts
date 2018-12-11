import TimeUtils from './TimeUtils';

describe("Testing Time Utils", ()=>{

    it("Test getDate",()=>{
        const date = TimeUtils.getToday();
        const dateArray = date.split(".");
        expect(dateArray.length).toBe(3);
    });
});
