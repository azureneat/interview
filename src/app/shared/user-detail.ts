export interface UserDetail {
    username: string,
    email: string,
    name: string,
    city: string,
    website: string,
    phone: number,



}
export interface APIResult {
    result: any;
    message: string;
    error: boolean;
    code: number | string;
    label?: string;
}
