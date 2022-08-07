import { IncomingHttpHeaders } from 'http';

declare module 'http' {
  interface IncomingHttpHeaders{
    email: string,
    name: string,
    nick: string,
    password: string,
    key: string,
    action: IActions
  }
}
