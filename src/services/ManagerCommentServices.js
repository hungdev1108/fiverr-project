import { baseService } from "./baseService";

export class ManagerCommentServices extends baseService {
  constructor() {
    super();
  }

  // API Danh sách bình luận theo mã công việc
  getBinhLuanTheoMaCongViec = (maCongViec) => {
    return this.get(`api/binh-luan/lay-binh-luan-theo-cong-viec/${maCongViec}`);
  };

  // API Danh sách bình luận theo mã công việc
  postBinhLuan = (thongTinBinhLuan) => {
    return this.get(`api/binh-luan/${thongTinBinhLuan}`);
  };
}

export const managerCommentServices = new ManagerCommentServices();
