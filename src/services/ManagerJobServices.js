import { baseService } from "./baseService";

export class ManagerJobServices extends baseService {
  constructor() {
    super();
  }

  // API Lấy menu loại công việc
  getJobTypeMenu = () => {
    return this.get(`api/cong-viec/lay-menu-loai-cong-viec`);
  };

  // API Lấy danh sách công việc
  getListJob = () => {
    return this.get(`api/cong-viec`);
  };
}

export const managerJobServices = new ManagerJobServices();
