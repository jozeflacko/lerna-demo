import YesNoService, { Answer } from './YesNoService';

it('testing getAnswerPromise returns expected object', () => {
    expect.assertions(3);
    const service = new YesNoService();
    
    return service.getAnswerPromise().then(data => {
        doAssert(data.data);
    });
});

it('testing getAnswer returns success function', (done) => {
    expect.assertions(3);
    const service = new YesNoService();    
    
    return service.getAnswer((data: Answer) => {        
        doAssert(data);
        done();
    }, (error: any) => {});
});

function doAssert(data: Answer) {
    const answer: string = data.answer;
    const isExpectedAnswer = answer === "yes" || answer === "no";
    const forced: boolean = data.forced;
    const image: string = data.image;
    
    expect(isExpectedAnswer).toEqual(true);
    expect(forced).toEqual(false);
    expect(image.indexOf(".gif") > -1).toEqual(true);
}

