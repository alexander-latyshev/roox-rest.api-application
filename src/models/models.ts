export interface IGeo {
  lat: string;
  lng: string;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  address: IAddress;
  email: string;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IValidationFields {
  name: string;
  username: string;
  email: string;
  street: string;
  city: string;
  zipcode: number;
  phone: string;
  website: string;
}

export interface IError {
  type: string;
  message: string;
  ref: any;
}

export interface IValidationError {
  name?: IError | {};
  username?: IError | {};
  email?: IError | {};
  street?: IError | {};
  city?: IError | {};
  zipcode?: IError | {};
  phone?: IError | object;
  website?: IError | {};
}
