export namespace DataResponse {
  export interface Response {
    inputFields: InputField[];
  }

  export interface InputField {
    id: string;
    label: string;
    placeholder: string;
    type: string;
    maxLength?: number;
  }

  export interface Sumbmission {
    Name: string
    Surname: string
    Age: number | string
  }
}
