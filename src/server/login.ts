import request from "../utils/request";
type loginType = {
  username: string;
  password: string;
};
type loginDataType = {
  data: {
    id: string;
    rid: string;
    username: string;
    mobile: string;
    email: string;
    token: string;
  };
  meta: {
    msg: string;
    status: number;
  };
};
export const loginHttp = (data: loginType): Promise<loginDataType> => {
  return request.post("/api/private/v1/login", data).then(({ data }) => {
    return data;
  });
};
