export type LoginInputs = {
  username: string;
  password: string;
  remember: boolean;
};

export type RegisterInputs = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type LoginResponse = {
  name: string;
  token: string;
  username: string;
}
