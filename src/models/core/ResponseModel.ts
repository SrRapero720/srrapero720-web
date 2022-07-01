export default class ResponseModel {
    private readonly status: number;
    private readonly message: string;
    private readonly content?: any;
    constructor(s: number, m: string, c?: any) {
        this.status = s;
        this.message = m;
        this.content = c;
    }
}