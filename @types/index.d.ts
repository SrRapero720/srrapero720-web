declare namespace NodeJS {
    interface Dict<T> {
        readonly PORT: number;
        readonly ADDRESS: string;
        readonly STATIC_PATH?: string;
    }
}