<template>
  <div class="document-bussiness py-lg-3 py-1" v-if="activePage === '0'">
    <div
      class="overview"
      v-bind:class="{ 'display-block': activeContent === '00' }"
    >
      <div>
        <h2>Tổng quan</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="introduction" id="introduction-section">
        <h3 class="title">Giới thiệu</h3>
        <div class="title-sub">
          Hệ thống Hóa đơn tiếp nhận và xử lý các thông tin
        </div>

        <div class="list-item">Thông tin của shop đăng ký nhận hóa đơn</div>
        <div class="list-item-sub">
          <span>Mã shop</span> <span>Một mã số duy nhất của shop.</span>
        </div>
        <div class="list-item-sub">
          <span>Nhận hóa đơn</span> <span>Có tích nhận hóa đơn hay không?</span>
        </div>
        <div class="list-item-sub">
          <span>Trạng thái</span>
          <span>Chờ xác nhận, Từ chối, Đã xác nhận.</span>
        </div>
        <div class="list-item-sub">
          <span>Tên công ty</span> <span>Tên công ty mà shop hoạt động.</span>
        </div>
        <div class="list-item-sub">
          <span>Mã số thuế</span>
          <span>Là mã số mà shop đăng ký với bưu cục thuế.</span>
        </div>
        <div class="list-item-sub">
          <span>Số điện thoại</span> <span>Số điện thoại liên lạc.</span>
        </div>
        <div class="list-item-sub">
          <span>Email</span> <span>Email liên lạc.</span>
        </div>
        <div class="list-item-sub">
          <span>Địa chỉ</span> <span>Địa chỉ shop.</span>
        </div>
        <div class="list-item-sub">
          <span>Thời gian tạo đăng ký</span>
          <span>Thời gian shop thao tác đăng ký nhận hóa đơn.</span>
        </div>

        <div class="list-item">Thông tin của hóa đơn</div>
        <div class="list-item-sub">
          <span>Mã hóa đơn</span> <span>Một mã số duy nhất của hóa đơn.</span>
        </div>
        <div class="list-item-sub">
          <span>Thông tin khách hàng</span>
          <span>Thông tin của khách hàng đăng ký nhận hóa đơn.</span>
        </div>
        <div class="list-item-sub">
          <span>Thời gian</span>
          <span>Thời gian bắt đầu, Thời gian kết thúc.</span>
        </div>
        <div class="list-item-sub">
          <span>Trạng thái</span>
          <span
            >Chờ xác nhận, Đã xác nhận, Quá hạn, Đã hủy, Đã phát hành, Phát hành
            lỗi.</span
          >
        </div>
        <div class="list-item-sub">
          <span>Dữ liệu đơn</span>
          <span>File exel gồm các thông tin chi tiết.</span>
        </div>
        <div class="list-item-sub">
          <span>Chi tiết</span> <span>Các khoản tiền của hóa đơn.</span>
        </div>
        <div class="list-item-sub">
          <span>Loại hóa đơn</span> <span>Loại của hóa đơn.</span>
        </div>
        <div class="list-item-sub">
          <span>Mẫu hóa đơn</span> <span>Mẫu của hóa đơn.</span>
        </div>
        <div class="list-item-sub">
          <span>Kí hiệu hóa đơn</span> <span>Kí hiệu của hóa đơn.</span>
        </div>
        <div class="list-item-sub">
          <span>Số hóa đơn</span> <span>Số hóa đơn.</span>
        </div>
        <div class="list-item-sub">
          <span>Ngày lập hóa đơn</span> <span>Ngày lập hóa đơn.</span>
        </div>
        <div class="list-item-sub">
          <span>Hóa đơn</span> <span>Có thể xem hóa đơn trực tiếp.</span>
        </div>
        <div class="list-item-sub">
          <span>Mã dịch vụ</span> <span>Mã của dịch vụ.</span>
        </div>
        <div class="list-item-sub">
          <span>Tên dịch vụ</span> <span>Tên của dịch vụ.</span>
        </div>
        <div class="list-item-sub">
          <span>Số lượng</span> <span>Số lượng vật phẩm.</span>
        </div>
        <div class="list-item-sub">
          <span>Đơn vị</span> <span>Đơn vị.</span>
        </div>
        <div class="list-item-sub">
          <span>Thuế</span> <span>Tính theo đơn vị phần trăm.</span>
        </div>
        <div class="list-item-sub">
          <span>Tiền thuế</span> <span>Tiền thuế phải nộp.</span>
        </div>
        <div class="list-item-sub">
          <span>Thành tiền</span> <span>Tổng tiền trong hóa đơn.</span>
        </div>
      </div>

      <div class="feature" id="feature-section">
        <h3 class="title">Tính năng</h3>
        <div class="title-sub">Hỗ trợ Kế toán trong các công việc</div>
        <div class="list-item-other">
          Lưu trữ và kiểm duyệt các thông tin của các shop đăng ký nhận hóa đơn
        </div>
        <div class="list-item-other">
          Lưu trữ và kiểm duyệt các thông tin của hóa đơn
        </div>
        <div class="list-item-other">Tạo hóa đơn trên hệ thống</div>
        <div class="list-item-other">Phát hành hóa đơn</div>
        <div class="list-item-other">Chỉnh sửa hóa đơn</div>
        <div class="list-item-other">Hủy bỏ hóa đơn</div>
        <div class="list-item-other">Thống kê shop</div>
        <div class="list-item-other">Thống kê hóa đơn</div>
      </div>
    </div>

    <div
      class="flow-function"
      v-bind:class="{ 'display-block': activeContent === '01' }"
    >
      <div>
        <h2>Luồng chức năng</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="diagram" id="diagram-section">
        <h3 class="title">Sơ đồ luồng chức năng</h3>
        <img
          src="public/assets/DocumentBussiness.png"
          alt=""
          class="img-fluid"
        />
      </div>
    </div>

    <div
      class="quick-start"
      v-bind:class="{ 'display-block': activeContent === '02' }"
    >
      <div>
        <h2>Bắt đầu nhanh</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="list-shop" id="qs1">
        <h3 class="title">Xem danh sách shop</h3>
        <div class="title-sub">
          Truy cập vào mục <span class="menu-item">Shop/Danh sách</span> để xem
          danh sách shop đã đăng ký.
        </div>

        <div class="title-sub">
          Truy vập vào mã số trong cột <span class="menu-item">Code</span> để
          xem thông tin chi tiết của mỗi shop. Mỗi shop có một mã code duy nhất.
        </div>

        <div class="title-sub">
          Nếu khó khăn trong việc tra cứu, sử dụng
          <span class="menu-item">Thanh tìm kiếm </span> để tiết kiệm thời gian.
        </div>
      </div>

      <div class="check-shop" id="qs2">
        <h3 class="title">Kiểm duyệt thông tin shop</h3>
        <div class="title-sub">
          Kế toán sau khi kiểm tra các thông tin đăng ký của shop sẽ thực hiện
          các thao tác <span class="menu-item">Xác nhận/Hủy bỏ</span> để kiểm
          duyệt.
        </div>
        <div class="title-sub">
          Nếu nghi ngờ thông tin chưa chính xác, shop thực hiện thao tác
          <span class="menu-item"> Chat với shop </span> để trao đổi lại.
        </div>
      </div>

      <div class="list-invoice" id="qs3">
        <h3 class="title">Xem danh sách hóa đơn</h3>
        <div class="title-sub">
          Truy cập vào mục <span class="menu-item">Hóa đơn/Danh sách</span> để
          xem danh sách hóa đơn.
        </div>
        <div class="title-sub">
          Truy vập vào mã số trong cột
          <span class="menu-item">Mã hóa đơn</span> để xem thông tin chi tiết
          của mỗi hóa đơn. Mỗi hóa đơn có một mã số duy nhất.
        </div>
        <div class="title-sub">
          Nếu khó khăn trong việc tra cứu, sử dụng
          <span class="menu-item">Thanh tìm kiếm </span> để tiết kiệm thời gian.
        </div>
      </div>

      <div class="check-invoice" id="qs4">
        <h3 class="title">Kiểm duyệt thông tin hóa đơn</h3>
        <div class="title-sub">
          Kế toán sau khi kiểm tra các thông tin của hóa đơn sẽ thực hiện các
          thao tác <span class="menu-item">Phát hành hóa đơn</span>.
        </div>
        <div class="title-sub">
          Nếu nghi ngờ thông tin chưa chính xác, shop thực hiện thao tác
          <span class="menu-item"> Chat với shop </span> để trao đổi lại.
        </div>
      </div>

      <div class="release-invoice" id="qs5">
        <h3 class="title">Phát hành hóa đơn</h3>
        <div class="title-sub">
          Sau khi kế toán thực hiện thao tác
          <span class="menu-item">Phát hành hóa đơn</span>, hóa đơn sẽ ở trạng
          thái <span class="menu-item">Đã phát hành</span>.
        </div>
        <div class="title-sub">
          Trường hợp sau khi phát hành hóa đơn, shop báo sai thông tin, kế toán
          thực hiện thao tác <span class="menu-item">Hủy bỏ hóa đơn</span> và
          tiến hành <span class="menu-item">Chỉnh sửa hóa đơn</span>.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DocumentBussiness",
  data() {
    return {};
  },
  props: {
    activePage: String,
    activeContent: String,
  },
};
</script>

<style>
.logo-ghtk {
  display: flex;
  align-items: center;
  font-style: italic;
  font-size: 15px;
  margin-top: 0px;
}

.document-bussiness > div {
  display: none;
}

.logo-ghtk img {
  width: 25%;
}

.document-bussiness .overview > div {
  margin-bottom: 30px;
}
.document-bussiness .flow-function > div {
  margin-bottom: 30px;
}
.document-bussiness .quick-start > div {
  margin-bottom: 30px;
}

.title {
  padding: 5px 0px;
  border-bottom: 1px solid rgb(231, 229, 229);
  margin-bottom: 20px;
  font-size: 1.6rem;
}
.list-item {
  padding: 10px 25px 5px 25px;
  font-weight: bold;
  color: #2c3e50;
}

.list-item-other {
  padding: 10px 25px 5px 25px;

  color: #42b983;
}
.list-item-sub {
  padding: 5px 50px;
  color: #42b983;
  display: flex;
  align-items: center;
}
.list-item-sub span:first-child {
  display: inline-block;
  width: 174px;
}
.list-item-sub span:last-child {
  color: #2c3e50;
  display: inline-block;
  width: calc(100% - 174px);
}
.menu-item {
  color: #42b983;
  font-weight: bold;
}
</style>