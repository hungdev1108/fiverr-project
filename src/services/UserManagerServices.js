import { baseService } from "./baseService";

export class UserManagerServices extends baseService {
  constructor() {
    super();
  }

  signinSystem = (infoSignin) => {
    // {
    //     "email": "string",
    //     "password": "string"
    //   }
    return this.post(`api/auth/signin`, infoSignin);
  };

  signupSystem = (infoSignup) => {
    // {
    // USE
    //     "email": "string",
    //     "password": "string",
    //     "name": "string",
    //     "phone": "string",
    //
    //     "id": 0,
    //     "birthday": "string",
    //     "gender": true,
    //     "role": "string",
    //     "skill": [
    //       "string"
    //     ],
    //     "certification": [
    //       "string"
    //     ]
    //   }
    return this.post(`api/auth/signup`, infoSignup);
  };

  getUserInfo = (id) => {
    return this.get(`api/users/${id}`);
  };

  putUserInfo = (id) => {
    return this.put(`api/users/${id}`);
  };

  getHireJobList = () => {
    return this.get(`api/thue-cong-viec/lay-danh-sach-da-thue`);
  };

  bookingJob = (infoBooking) => {
    return this.post(`api/thue-cong-viec`, infoBooking);
  };
}

export const userManagerServices = new UserManagerServices();
