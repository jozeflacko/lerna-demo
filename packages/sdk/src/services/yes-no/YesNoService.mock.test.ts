import YesNoService, { Answer } from './YesNoService';
import axios, { AxiosPromise } from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("mock axios",()=>{
    it('get mocked answer', async () => {
        const service = new YesNoService();
        const answer: Answer = { answer:"yes", forced:false, image:"image.gif" };
        mockedAxios.get.mockReturnValueOnce({ data: answer });

        const result = await service.getAnswerPromise();
        expect(result.data).toBe(answer);
    });
});

