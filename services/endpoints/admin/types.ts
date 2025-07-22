export interface AdminAttributesResponse {
  data: {
    admin: {
      id: string;
      name: string;
      password: string;
      email: string;
      active: boolean;
      permissions: [];
    };
    token: string;
  };
}

export interface AdminAttributesLoginParamsType {
  fullName: string
  email: string
  phone: string
  terms: boolean
}

export interface AdminUpdatePasswordParamsType {
  oldPassword: string;
  newPassword: string;
}

