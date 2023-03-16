export interface IHttpParams {
    [key: string]: string | number | boolean;
}
export interface IErrorResponse {
    localization: string;
    message: string;
    statusCode: number;
}