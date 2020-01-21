export class WPTReport {
    public wptreportString:string = 'https://www.webpagetest.org/result/';
    public title:string;
    public report:string;
    
    constructor(
        public ticket:string,
        public harString:string,
        public platform:string[],
        public website:string
        ) { }
}
