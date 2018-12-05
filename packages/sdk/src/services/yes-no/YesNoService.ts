import HttpClient from '../http-client/HttpClient';

export interface Answer {
    answer: string,
    forced: string,
    image: string
}

export default class YesNoService extends HttpClient {

    getPrefix(): string {
        return "https://yesno.wtf/api";
    };
    
    getPostfix(): string {
        return "";        
    };

    private async getAnswerPromise() {
        return await this.get<Answer>("");
    }

    public getAnswer(onSuccess: (answer:Answer) => void, onfail: any): void {
        this.getAnswerPromise().then((res)=>{
            const data: Answer = res.data;
            onSuccess(data);
        }).catch((reason)=>{
            onfail(reason);
        });        
    }
}