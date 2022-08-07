import { IStyled } from "./IStyled";

export interface IWarning extends IStyled {
  message: string,
  title: string,
  state: (value: React.SetStateAction<IWarning>) => void,
}