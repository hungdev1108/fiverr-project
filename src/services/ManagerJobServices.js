import { baseService } from "./baseService";

export class ManagerJobServices extends baseService {
  constructor() {
    super();
  }

  // API Lấy menu loại công việc
  getJobTypeMenu = () => {
    return this.get(`api/cong-viec/lay-menu-loai-cong-viec`);
  };

  // API Lấy chi tiết loại công việc
  getChiTietLoaiCongViec = (id) => {
    return this.get(`api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
  };

  // API Lấy danh sách công việc theo chi tiết loại
  getCongViecTheoChiTietLoai = (id) => {
    return this.get(`api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`);
  };

  // API Lấy chi tiết công việc
  getCongViecChiTiet = (id) => {
    return this.get(`api/cong-viec/lay-cong-viec-chi-tiet/${id}`);
  };

  // API Lấy danh sách công việc theo tên
  getDanhSachCongViecTheoTen = (tenCongViec) => {
    return this.get(`api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenCongViec}`);
  };
}

export const managerJobServices = new ManagerJobServices();
