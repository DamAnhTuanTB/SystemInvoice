<template>
  <div class="document-api py-lg-3 py-1" v-if="activePage === '1'">
    <div
      class="shop0"
      v-bind:class="{ 'display-block': activeContent === '10' }"
    >
      <div>
        <h2>Host</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="shop01" id="s01">
        <h3 class="title">Host List</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Env</th>
                <th>URL</th>
                <th>Người thực hiện duyệt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">Test</td>
                <td>
                  <a href="https://ginvoices.ghtklab.com"
                    >https://ginvoices.ghtklab.com</a
                  >
                </td>
                <td>Ready</td>
              </tr>
              <tr>
                <td style="text-align: center">Prod</td>
                <td></td>
                <td>Not Ready</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!--   <div class="shop2" v-bind:class="{ 'display-block': activeContent === '11' }">
      <div>
        <h2>API KT Create Shop Info</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>
      
      <div class="shop11">
        <h3 class="title">URL</h3>
        <div class="title-sub">
        
        </div>
      </div>
    </div> -->

    <div
      class="shop1"
      v-bind:class="{ 'display-block': activeContent === '11' }"
    >
      <div>
        <h2>KT Create</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="shop11" id="s11">
        <h3 class="title">URL</h3>
        <div class="title-sub">
          <blockquote>
            <p>{<strong>host</strong>}/api/v1/shops</p>
          </blockquote>
        </div>
      </div>

      <div class="shop12" id="s12">
        <h3 class="title">Tham số của data</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th style="text-align: center">Bắt buộc (Y/N)</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">code</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Mã shop</td>
              </tr>
              <tr>
                <td style="text-align: center">name</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Tên shop</td>
              </tr>
              <tr>
                <td style="text-align: center">tax_code</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Mã số thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">address</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Địa chỉ shop</td>
              </tr>
              <tr>
                <td style="text-align: center">email</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Email của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">subscribe</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Đăng ký nhận hóa đơn hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">phone</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>SĐT shop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="shop13" id="s13">
        <h3 class="title" id="abcde">Request data ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json"><span class="hljs-comment">#POST</span>
- Authorization (<span class="hljs-keyword">Bearer </span>Token):<span class="hljs-string">"eyJhbGciOiJFUzI1NiIsImtpZCI6IjAxRUhWRVI4SlZYNVpHQzQwNEtHM0s0VkRLXzE1OTk3MjMwMjAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoIiwiZXhwIjoxNjA4Mjg2NDMzLCJqdGkiOiIwMUVTU1NaWkNKRVFaWUdOQVBQTUhEQVMxRCIsImlhdCI6MTYwODI1NzYzMywiaXNzIjoiaHR0cHM6Ly9hdXRoLmdodGtsYWIuY29tIiwic3ViIjoiMDFFUURBR1IzRUJTM1FBMUgyVlFLUFNUV0oiLCJzY3AiOlsib2ZmbGluZV9hY2Nlc3MiLCJvcGVuaWQiXSwic2lkIjoiR0JwUXN1STI3a3ZENUZrdG5xamxKTFFSVmpmUk5wOG0iLCJjbGllbnRfaWQiOiIwMUVIVkVSOEpWWDVaR0M0MDRLRzNLNFZESyJ9.7l1bCrCHQMkTlJue5uWPt4F5bRkUR-qdgLouaCyPvZBLmdzzZyWAlEJQ9-ez09t80ZK2Dj27p2issIYGzR8plA"</span>
- <span class="hljs-keyword">Body
</span>{
    <span class="hljs-string">"shop_id"</span>: <span class="hljs-string">"5f74535e-c5d0-4d4a-b4b4-4a2c0a784c19"</span>,
    <span class="hljs-string">"code"</span>: <span class="hljs-string">"S17016010"</span>,
    <span class="hljs-string">"name"</span>: <span class="hljs-string">"CÔNG TY CỔ PHẦN LAVENZA NUTRITION &amp; HEALTH"</span>,
    <span class="hljs-string">"tax_code"</span>: <span class="hljs-string">"0109210647"</span>,
    <span class="hljs-string">"address"</span>: <span class="hljs-string">"Tầng 2 Tòa Nhà Trung Yên 1, Khu Đô Thị Trung Yên, Phường Trung Hòa, Quận Cầu Giấy, TP Hà Nội, Việt Nam"</span>,
    <span class="hljs-string">"email"</span>: <span class="hljs-string">"ketoan@lavenza.com.vn"</span>,
    <span class="hljs-string">"subscribe"</span>: <span class="hljs-string">"yes"</span>,
    <span class="hljs-string">"phone"</span>: <span class="hljs-string">"0917133889"</span>
}
</code></pre>
        </div>
      </div>

      <div class="shop14" id="s14">
        <h3 class="title">Tham số của response</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">Int64</td>
                <td>ID của bản ghi trong DB</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">channel_id</td>
                <td style="text-align: center">String</td>
                <td>ID của kênh chat trên ightk</td>
              </tr>
              <tr>
                <td style="text-align: center">status</td>
                <td style="text-align: center">String</td>
                <td>
                  Trạng thái của shop (pending, approved, rejected, deleted)
                </td>
              </tr>
              <tr>
                <td style="text-align: center">subscribe</td>
                <td style="text-align: center">String</td>
                <td>Đăng ký nhận hóa đơn hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">code</td>
                <td style="text-align: center">String</td>
                <td>Mã shop</td>
              </tr>
              <tr>
                <td style="text-align: center">tax_code</td>
                <td style="text-align: center">String</td>
                <td>Mã số thuế của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">address</td>
                <td style="text-align: center">String</td>
                <td>Địa chỉ của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">email</td>
                <td style="text-align: center">String</td>
                <td>Email của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">phone</td>
                <td style="text-align: center">String</td>
                <td>Số điện thoại của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">created_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian tạo shop</td>
              </tr>
              <tr>
                <td style="text-align: center">created_by</td>
                <td style="text-align: center">String</td>
                <td>Người tạo shop</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_by</td>
                <td style="text-align: center">String</td>
                <td>Thời gian cập nhật shop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="shop15" id="s15">
        <h3 class="title">Response ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json">{
    <span class="hljs-attr">"success"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"id"</span>: <span class="hljs-number">8</span>,
        <span class="hljs-attr">"shop_id"</span>: <span class="hljs-string">"5f74535e-c5d0-4d4a-b4b4-4a2c0a784c19"</span>,
        <span class="hljs-attr">"channel_id"</span>: <span class="hljs-string">"52C5B4B62DC5"</span>,
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"pending"</span>,
        <span class="hljs-attr">"subscribe"</span>: <span class="hljs-string">"yes"</span>,
        <span class="hljs-attr">"code"</span>: <span class="hljs-string">"S17016010"</span>,
        <span class="hljs-attr">"name"</span>: <span class="hljs-string">"CÔNG TY CỔ PHẦN LAVENZA NUTRITION &amp; HEALTH"</span>,
        <span class="hljs-attr">"tax_code"</span>: <span class="hljs-string">"0109210647"</span>,
        <span class="hljs-attr">"address"</span>: <span class="hljs-string">"Tầng 2 Tòa Nhà Trung Yên 1, Khu Đô Thị Trung Yên, Phường Trung Hòa, Quận Cầu Giấy, TP Hà Nội, Việt Nam"</span>,
        <span class="hljs-attr">"email"</span>: <span class="hljs-string">"ketoan@lavenza.com.vn"</span>,
        <span class="hljs-attr">"phone"</span>: <span class="hljs-string">"0917133889"</span>,
        <span class="hljs-attr">"created_at"</span>: <span class="hljs-string">"2020-12-24T17:47:13.309466097+07:00"</span>,
        <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>,
        <span class="hljs-attr">"updated_at"</span>: <span class="hljs-string">"2020-12-24T17:47:13.309466198+07:00"</span>
    }
}
</code></pre>
        </div>
      </div>
    </div>

    <div
      class="shop2"
      v-bind:class="{ 'display-block': activeContent === '12' }"
    >
      <div>
        <h2>CS Create</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="shop21" id="s21">
        <h3 class="title">URL</h3>
        <div class="title-sub">
          <blockquote>
            <p>{<strong>host</strong>}/api/v1/shops/cs</p>
          </blockquote>
        </div>
      </div>

      <div class="shop22" id="s22">
        <h3 class="title">Tham số của data</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th style="text-align: center">Bắt buộc (Y/N)</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">code</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Mã shop</td>
              </tr>
              <tr>
                <td style="text-align: center">name</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Tên shop</td>
              </tr>
              <tr>
                <td style="text-align: center">tax_code</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">N</td>
                <td>Mã số thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">address</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Địa chỉ shop</td>
              </tr>
              <tr>
                <td style="text-align: center">email</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Email của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">subscribe</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Đăng ký nhận hóa đơn hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">phone</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>SĐT shop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="shop23" id="s23">
        <h3 class="title">Request data ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json"><span class="hljs-comment">#POST</span>
- Authorization (<span class="hljs-keyword">Bearer </span>Token):<span class="hljs-string">"eyJhbGciOiJFUzI1NiIsImtpZCI6IjAxRUhWRVI4SlZYNVpHQzQwNEtHM0s0VkRLXzE1OTk3MjMwMjAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoIiwiZXhwIjoxNjA4Mjg2NDMzLCJqdGkiOiIwMUVTU1NaWkNKRVFaWUdOQVBQTUhEQVMxRCIsImlhdCI6MTYwODI1NzYzMywiaXNzIjoiaHR0cHM6Ly9hdXRoLmdodGtsYWIuY29tIiwic3ViIjoiMDFFUURBR1IzRUJTM1FBMUgyVlFLUFNUV0oiLCJzY3AiOlsib2ZmbGluZV9hY2Nlc3MiLCJvcGVuaWQiXSwic2lkIjoiR0JwUXN1STI3a3ZENUZrdG5xamxKTFFSVmpmUk5wOG0iLCJjbGllbnRfaWQiOiIwMUVIVkVSOEpWWDVaR0M0MDRLRzNLNFZESyJ9.7l1bCrCHQMkTlJue5uWPt4F5bRkUR-qdgLouaCyPvZBLmdzzZyWAlEJQ9-ez09t80ZK2Dj27p2issIYGzR8plA"</span>
- <span class="hljs-keyword">Body
</span>{
    <span class="hljs-string">"shop_id"</span>: <span class="hljs-string">"5f74535e-c5d0-4d4a-b4b4-4a2c0a784c19"</span>,
    <span class="hljs-string">"code"</span>: <span class="hljs-string">"S17016010"</span>,
    <span class="hljs-string">"name"</span>: <span class="hljs-string">"CÔNG TY CỔ PHẦN LAVENZA NUTRITION &amp; HEALTH"</span>,
    <span class="hljs-string">"tax_code"</span>: <span class="hljs-string">"0109210647"</span>,
    <span class="hljs-string">"address"</span>: <span class="hljs-string">"Tầng 2 Tòa Nhà Trung Yên 1, Khu Đô Thị Trung Yên, Phường Trung Hòa, Quận Cầu Giấy, TP Hà Nội, Việt Nam"</span>,
    <span class="hljs-string">"email"</span>: <span class="hljs-string">"ketoan@lavenza.com.vn"</span>,
    <span class="hljs-string">"subscribe"</span>: <span class="hljs-string">"yes"</span>,
    <span class="hljs-string">"phone"</span>: <span class="hljs-string">"0917133889"</span>
}
</code></pre>
        </div>
      </div>

      <div class="shop24" id="s24">
        <h3 class="title">Tham số của response</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">Int64</td>
                <td>STT của bản ghi trong DB</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">channel_id</td>
                <td style="text-align: center">String</td>
                <td>ID của kênh chat trên ightk</td>
              </tr>
              <tr>
                <td style="text-align: center">status</td>
                <td style="text-align: center">String</td>
                <td>
                  Trạng thái của shop (pending, approved, rejected, deleted)
                </td>
              </tr>
              <tr>
                <td style="text-align: center">subscribe</td>
                <td style="text-align: center">String</td>
                <td>Đăng ký nhận hóa đơn hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">code</td>
                <td style="text-align: center">String</td>
                <td>Mã shop</td>
              </tr>
              <tr>
                <td style="text-align: center">tax_code</td>
                <td style="text-align: center">String</td>
                <td>Mã số thuế của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">address</td>
                <td style="text-align: center">String</td>
                <td>Địa chỉ của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">email</td>
                <td style="text-align: center">String</td>
                <td>Email của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">phone</td>
                <td style="text-align: center">String</td>
                <td>Số điện thoại của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">created_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian tạo shop</td>
              </tr>
              <tr>
                <td style="text-align: center">created_by</td>
                <td style="text-align: center">String</td>
                <td>Người tạo shop</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_by</td>
                <td style="text-align: center">String</td>
                <td>Thời gian cập nhật shop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="shop25" id="s25">
        <h3 class="title">Response ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json">{
    <span class="hljs-attr">"success"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"id"</span>: <span class="hljs-number">8</span>,
        <span class="hljs-attr">"shop_id"</span>: <span class="hljs-string">"5f74535e-c5d0-4d4a-b4b4-4a2c0a784c19"</span>,
        <span class="hljs-attr">"channel_id"</span>: <span class="hljs-string">"52C5B4B62DC5"</span>,
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"pending"</span>,
        <span class="hljs-attr">"subscribe"</span>: <span class="hljs-string">"yes"</span>,
        <span class="hljs-attr">"code"</span>: <span class="hljs-string">"S17016010"</span>,
        <span class="hljs-attr">"name"</span>: <span class="hljs-string">"CÔNG TY CỔ PHẦN LAVENZA NUTRITION &amp; HEALTH"</span>,
        <span class="hljs-attr">"tax_code"</span>: <span class="hljs-string">"0109210647"</span>,
        <span class="hljs-attr">"address"</span>: <span class="hljs-string">"Tầng 2 Tòa Nhà Trung Yên 1, Khu Đô Thị Trung Yên, Phường Trung Hòa, Quận Cầu Giấy, TP Hà Nội, Việt Nam"</span>,
        <span class="hljs-attr">"email"</span>: <span class="hljs-string">"ketoan@lavenza.com.vn"</span>,
        <span class="hljs-attr">"phone"</span>: <span class="hljs-string">"0917133889"</span>,
        <span class="hljs-attr">"created_at"</span>: <span class="hljs-string">"2020-12-24T17:47:13.309466097+07:00"</span>,
        <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>,
        <span class="hljs-attr">"updated_at"</span>: <span class="hljs-string">"2020-12-24T17:47:13.309466198+07:00"</span>
    }
}
</code></pre>
        </div>
      </div>
    </div>

    <div
      class="shop3"
      v-bind:class="{ 'display-block': activeContent === '13' }"
    >
      <div>
        <h2>Get List</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="shop31" id="s31">
        <h3 class="title">URL</h3>
        <div class="title-sub">
          <blockquote>
            <p>{<strong>host</strong>}/api/v1/shops</p>
          </blockquote>
        </div>
      </div>

      <div class="shop32" id="s32">
        <h3 class="title">Tham số của data</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th style="text-align: center">Bắt buộc (Y/N)</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">page</td>
                <td style="text-align: center">Int64</td>
                <td style="text-align: center">N</td>
                <td>Phân trang của list</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="shop33" id="s33">
        <h3 class="title">Request data ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json"><span class="hljs-attr">#GET
- Authorization (Bearer Token):"eyJhbGciOiJFUzI1</span><span class="hljs-symbol">NiIsImtpZCI6</span>IjAxRUhWRVI<span class="hljs-number">4</span>SlZY<span class="hljs-symbol">NVpHQzQwNEtHM0</span>s<span class="hljs-number">0</span>VkRLXzE<span class="hljs-number">1</span>OTk<span class="hljs-number">3</span>MjMwMjAiLCJ<span class="hljs-number">0</span>eXAiOiJKV<span class="hljs-number">1</span>QifQ.eyJhdWQiOiJhdXRoIiwiZXhwIjox<span class="hljs-symbol">NjA4</span>Mj<span class="hljs-name">g2</span><span class="hljs-symbol">NDMzLCJqdGkiOiIwMUVTU1</span><span class="hljs-symbol">NaWkNKRVFaWUdOQVBQTUhEQVMxRCIsImlhdCI6</span>MTYwODI<span class="hljs-number">1</span><span class="hljs-symbol">NzYzMywiaXNzIjoiaHR0</span>cH<span class="hljs-name">M6</span>Ly<span class="hljs-number">9</span>hdXRoLmdodGtsYWIuY<span class="hljs-number">29</span>tIiwic<span class="hljs-number">3</span>ViIjoiMDFFUURBR<span class="hljs-number">1</span>IzRUJT<span class="hljs-name">M1</span>FBMUgyVlFLUF<span class="hljs-symbol">NUV0</span>oiLCJzY<span class="hljs-number">3</span>AiOlsib<span class="hljs-number">2</span>ZmbGluZV<span class="hljs-number">9</span>hY<span class="hljs-number">2</span><span class="hljs-symbol">Nlc3</span>MiLCJ<span class="hljs-attr">vcGVuaWQiXSwic2</span>lkIjoiR<span class="hljs-number">0</span>JwUX<span class="hljs-symbol">N1</span>STI<span class="hljs-number">3</span>a<span class="hljs-number">3</span>ZE<span class="hljs-symbol">NUZrdG5</span>xamxKTFFSVmpmUk<span class="hljs-number">5</span>wO<span class="hljs-name">G0</span>iLCJjbGllb<span class="hljs-symbol">nRfaWQiOiIwMUVIVkVSOEpWWDVaR0</span><span class="hljs-name">M0</span>MDRLRz<span class="hljs-symbol">NLNFZESyJ9</span><span class="hljs-number">.7</span>l<span class="hljs-number">1</span>bCrCHQMkTlJue<span class="hljs-number">5</span>uWPt<span class="hljs-number">4</span>F<span class="hljs-number">5</span>bRkUR-qdgLouaCyPvZBLmdzzZyWAlEJQ<span class="hljs-number">9</span>-ez<span class="hljs-number">09</span>t<span class="hljs-number">80</span>ZK<span class="hljs-number">2</span>Dj<span class="hljs-number">27</span>p<span class="hljs-number">2</span>issIYGzR<span class="hljs-number">8</span>plA<span class="hljs-string">"</span>
</code></pre>
        </div>
      </div>

      <div class="shop34" id="s34">
        <h3 class="title">Tham số của response</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">success</td>
                <td style="text-align: center">Boolean</td>
                <td>Request thành công hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">Int64</td>
                <td>STT của bản ghi</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">channel_id</td>
                <td style="text-align: center">String</td>
                <td>ID của kênh chat trên ightk</td>
              </tr>
              <tr>
                <td style="text-align: center">status</td>
                <td style="text-align: center">Int64</td>
                <td>Trạng thái shop</td>
              </tr>
              <tr>
                <td style="text-align: center">subscribe</td>
                <td style="text-align: center">String</td>
                <td>Đăng ký nhận hóa đơn hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">code</td>
                <td style="text-align: center">String</td>
                <td>Mã shop</td>
              </tr>
              <tr>
                <td style="text-align: center">name</td>
                <td style="text-align: center">String</td>
                <td>Tên shop</td>
              </tr>
              <tr>
                <td style="text-align: center">tax_code</td>
                <td style="text-align: center">String</td>
                <td>Mã số thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">address</td>
                <td style="text-align: center">String</td>
                <td>Địa chỉ shop</td>
              </tr>
              <tr>
                <td style="text-align: center">email</td>
                <td style="text-align: center">String</td>
                <td>Email của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">phone</td>
                <td style="text-align: center">String</td>
                <td>SĐT của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">created_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian tạo shop info</td>
              </tr>
              <tr>
                <td style="text-align: center">created_by</td>
                <td style="text-align: center">String</td>
                <td>Người tạo shop info</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian cập nhập shop info</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_by</td>
                <td style="text-align: center">String</td>
                <td>Người cập nhập shop info</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="shop35" id="s35">
        <h3 class="title">Response ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json">{
    <span class="hljs-attr">"success"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"page_data"</span>: [
            {
                <span class="hljs-attr">"id"</span>: <span class="hljs-number">2</span>,
                <span class="hljs-attr">"shop_id"</span>: <span class="hljs-string">"5f30a78b-837c-4b2e-bcc9-48960a6e4c49"</span>,
                <span class="hljs-attr">"channel_id"</span>: <span class="hljs-string">"8C351287EDA5"</span>,
                <span class="hljs-attr">"status"</span>: <span class="hljs-string">"approved"</span>,
                <span class="hljs-attr">"subscribe"</span>: <span class="hljs-string">"yes"</span>,
                <span class="hljs-attr">"code"</span>: <span class="hljs-string">"S15403429"</span>,
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ NAHA"</span>,
                <span class="hljs-attr">"tax_code"</span>: <span class="hljs-string">"0313346912"</span>,
                <span class="hljs-attr">"address"</span>: <span class="hljs-string">"Số 281/64/2 Lê Văn Sỹ, Phường 1, Quận Tân Bình, Thành Phố Hồ Chí Minh"</span>,
                <span class="hljs-attr">"email"</span>: <span class="hljs-string">"plan@nahaco.vn"</span>,
                <span class="hljs-attr">"phone"</span>: <span class="hljs-string">"0938148828"</span>,
                <span class="hljs-attr">"created_at"</span>: <span class="hljs-string">"2020-12-24T14:26:27+07:00"</span>,
                <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"admin"</span>,
                <span class="hljs-attr">"updated_at"</span>: <span class="hljs-string">"2020-12-24T14:51:30+07:00"</span>,
                <span class="hljs-attr">"updated_by"</span>: <span class="hljs-string">"vuhk1"</span>
            },
                        {
                <span class="hljs-attr">"id"</span>: <span class="hljs-number">3</span>,
                <span class="hljs-attr">"shop_id"</span>: <span class="hljs-string">"5f436c6d-cc1c-4730-9721-4cdd0a6e4c48"</span>,
                <span class="hljs-attr">"channel_id"</span>: <span class="hljs-string">"71D91EDCCB4C"</span>,
                <span class="hljs-attr">"status"</span>: <span class="hljs-string">"rejected"</span>,
                <span class="hljs-attr">"subscribe"</span>: <span class="hljs-string">"no"</span>,
                <span class="hljs-attr">"code"</span>: <span class="hljs-string">"S15865819"</span>,
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"CÔNG TY TNHH MÁY VÀ THIẾT BỊ VĂN PHÒNG AN PHƯƠNG"</span>,
                <span class="hljs-attr">"tax_code"</span>: <span class="hljs-string">"0313787184"</span>,
                <span class="hljs-attr">"address"</span>: <span class="hljs-string">"59/41A Đường Tân Hòa Đông, Phường 14, Quận 6, Thành Phố Hồ Chí Minh"</span>,
                <span class="hljs-attr">"email"</span>: <span class="hljs-string">"huyentran67@gmail.com"</span>,
                <span class="hljs-attr">"phone"</span>: <span class="hljs-string">"0935076955"</span>,
                <span class="hljs-attr">"created_at"</span>: <span class="hljs-string">"2020-12-24T14:32:47+07:00"</span>,
                <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"admin"</span>,
                <span class="hljs-attr">"updated_at"</span>: <span class="hljs-string">"2020-12-24T17:21:21+07:00"</span>,
                <span class="hljs-attr">"updated_by"</span>: <span class="hljs-string">"lynth8"</span>
            }
        ]
    }
}
</code></pre>
        </div>
      </div>
    </div>

    <div
      class="shop4"
      v-bind:class="{ 'display-block': activeContent === '14' }"
    >
      <div>
        <h2>Get By ID</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="shop41" id="s41">
        <h3 class="title">URL</h3>
        <div class="title-sub">
          <blockquote>
            <p>{<strong>host</strong>}/api/v1/shops/{<em>shop_id</em>}</p>
          </blockquote>
        </div>
      </div>

      <div class="shop43" id="s43">
        <h3 class="title">Request data ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json"><span class="hljs-attr">#GET
- Authorization (Bearer Token):"eyJhbGciOiJFUzI1</span><span class="hljs-symbol">NiIsImtpZCI6</span>IjAxRUhWRVI<span class="hljs-number">4</span>SlZY<span class="hljs-symbol">NVpHQzQwNEtHM0</span>s<span class="hljs-number">0</span>VkRLXzE<span class="hljs-number">1</span>OTk<span class="hljs-number">3</span>MjMwMjAiLCJ<span class="hljs-number">0</span>eXAiOiJKV<span class="hljs-number">1</span>QifQ.eyJhdWQiOiJhdXRoIiwiZXhwIjox<span class="hljs-symbol">NjA4</span>Mj<span class="hljs-name">g2</span><span class="hljs-symbol">NDMzLCJqdGkiOiIwMUVTU1</span><span class="hljs-symbol">NaWkNKRVFaWUdOQVBQTUhEQVMxRCIsImlhdCI6</span>MTYwODI<span class="hljs-number">1</span><span class="hljs-symbol">NzYzMywiaXNzIjoiaHR0</span>cH<span class="hljs-name">M6</span>Ly<span class="hljs-number">9</span>hdXRoLmdodGtsYWIuY<span class="hljs-number">29</span>tIiwic<span class="hljs-number">3</span>ViIjoiMDFFUURBR<span class="hljs-number">1</span>IzRUJT<span class="hljs-name">M1</span>FBMUgyVlFLUF<span class="hljs-symbol">NUV0</span>oiLCJzY<span class="hljs-number">3</span>AiOlsib<span class="hljs-number">2</span>ZmbGluZV<span class="hljs-number">9</span>hY<span class="hljs-number">2</span><span class="hljs-symbol">Nlc3</span>MiLCJ<span class="hljs-attr">vcGVuaWQiXSwic2</span>lkIjoiR<span class="hljs-number">0</span>JwUX<span class="hljs-symbol">N1</span>STI<span class="hljs-number">3</span>a<span class="hljs-number">3</span>ZE<span class="hljs-symbol">NUZrdG5</span>xamxKTFFSVmpmUk<span class="hljs-number">5</span>wO<span class="hljs-name">G0</span>iLCJjbGllb<span class="hljs-symbol">nRfaWQiOiIwMUVIVkVSOEpWWDVaR0</span><span class="hljs-name">M0</span>MDRLRz<span class="hljs-symbol">NLNFZESyJ9</span><span class="hljs-number">.7</span>l<span class="hljs-number">1</span>bCrCHQMkTlJue<span class="hljs-number">5</span>uWPt<span class="hljs-number">4</span>F<span class="hljs-number">5</span>bRkUR-qdgLouaCyPvZBLmdzzZyWAlEJQ<span class="hljs-number">9</span>-ez<span class="hljs-number">09</span>t<span class="hljs-number">80</span>ZK<span class="hljs-number">2</span>Dj<span class="hljs-number">27</span>p<span class="hljs-number">2</span>issIYGzR<span class="hljs-number">8</span>plA<span class="hljs-string">"
- URL: {host}/api/v1/shops/5f74535e-c5d0-4d4a-b4b4-4a2c0a784c19</span>
</code></pre>
        </div>
      </div>

      <div class="shop44" id="s44">
        <h3 class="title">Tham số của response</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">success</td>
                <td style="text-align: center">Boolean</td>
                <td>Request thành công hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">Int64</td>
                <td>STT của bản ghi</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">channel_id</td>
                <td style="text-align: center">String</td>
                <td>ID của kênh chat trên ightk</td>
              </tr>
              <tr>
                <td style="text-align: center">status</td>
                <td style="text-align: center">Int64</td>
                <td>Trạng thái shop</td>
              </tr>
              <tr>
                <td style="text-align: center">subscribe</td>
                <td style="text-align: center">String</td>
                <td>Đăng ký nhận hóa đơn hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">code</td>
                <td style="text-align: center">String</td>
                <td>Mã shop</td>
              </tr>
              <tr>
                <td style="text-align: center">name</td>
                <td style="text-align: center">String</td>
                <td>Tên shop</td>
              </tr>
              <tr>
                <td style="text-align: center">tax_code</td>
                <td style="text-align: center">String</td>
                <td>Mã số thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">address</td>
                <td style="text-align: center">String</td>
                <td>Địa chỉ shop</td>
              </tr>
              <tr>
                <td style="text-align: center">email</td>
                <td style="text-align: center">String</td>
                <td>Email của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">phone</td>
                <td style="text-align: center">String</td>
                <td>SĐT của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">created_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian tạo shop info</td>
              </tr>
              <tr>
                <td style="text-align: center">created_by</td>
                <td style="text-align: center">String</td>
                <td>Người tạo shop info</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian cập nhập shop info</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_by</td>
                <td style="text-align: center">String</td>
                <td>Người cập nhập shop info</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="shop45" id="s45">
        <h3 class="title">Response ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json">{
    <span class="hljs-attr">"success"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"id"</span>: <span class="hljs-number">8</span>,
        <span class="hljs-attr">"shop_id"</span>: <span class="hljs-string">"5f74535e-c5d0-4d4a-b4b4-4a2c0a784c19"</span>,
        <span class="hljs-attr">"channel_id"</span>: <span class="hljs-string">"52C5B4B62DC5"</span>,
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"pending"</span>,
        <span class="hljs-attr">"subscribe"</span>: <span class="hljs-string">"yes"</span>,
        <span class="hljs-attr">"code"</span>: <span class="hljs-string">"S17016010"</span>,
        <span class="hljs-attr">"name"</span>: <span class="hljs-string">"CÔNG TY CỔ PHẦN LAVENZA NUTRITION &amp; HEALTH"</span>,
        <span class="hljs-attr">"tax_code"</span>: <span class="hljs-string">"0109210647"</span>,
        <span class="hljs-attr">"address"</span>: <span class="hljs-string">"Tầng 2 Tòa Nhà Trung Yên 1, Khu Đô Thị Trung Yên, Phường Trung Hòa, Quận Cầu Giấy, TP Hà Nội, Việt Nam"</span>,
        <span class="hljs-attr">"email"</span>: <span class="hljs-string">"ketoan@lavenza.com.vn"</span>,
        <span class="hljs-attr">"phone"</span>: <span class="hljs-string">"0917133889"</span>,
        <span class="hljs-attr">"created_at"</span>: <span class="hljs-string">"2020-12-24T17:47:13+07:00"</span>,
        <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>,
        <span class="hljs-attr">"updated_at"</span>: <span class="hljs-string">"2020-12-24T17:47:13+07:00"</span>
    }
}
</code></pre>
        </div>
      </div>
    </div>

    <div
      class="shop5"
      v-bind:class="{ 'display-block': activeContent === '15' }"
    >
      <div>
        <h2>Confirm</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="shop51" id="s51">
        <h3 class="title">URL</h3>
        <div class="title-sub">
          <blockquote>
            <p>{<strong>host</strong>}/api/v1/shops/{shop_id}</p>
          </blockquote>
        </div>
      </div>

      <div class="shop52" id="s52">
        <h3 class="title">Note</h3>
        <div class="title-sub">
          <ul>
            <li><em>Status mới phải khác status cũ</em></li>
          </ul>
        </div>
      </div>

      <div class="shop53" id="s53">
        <h3 class="title">Tham số của data</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th style="text-align: center">Bắt buộc (Y/N)</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">status</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Trạng thái shop (PENDING, APPROVED, DELETED, REJECTED)</td>
              </tr>
              <tr>
                <td style="text-align: center">reason</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y/N</td>
                <td>Lý do từ chối shop (Y: status = rejected)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="shop54" id="s54">
        <h3 class="title">Request data ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json"><span class="hljs-comment">#PATCH</span>
- Authorization (<span class="hljs-keyword">Bearer </span>Token):<span class="hljs-string">"eyJhbGciOiJFUzI1NiIsImtpZCI6IjAxRUhWRVI4SlZYNVpHQzQwNEtHM0s0VkRLXzE1OTk3MjMwMjAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoIiwiZXhwIjoxNjA4Mjg2NDMzLCJqdGkiOiIwMUVTU1NaWkNKRVFaWUdOQVBQTUhEQVMxRCIsImlhdCI6MTYwODI1NzYzMywiaXNzIjoiaHR0cHM6Ly9hdXRoLmdodGtsYWIuY29tIiwic3ViIjoiMDFFUURBR1IzRUJTM1FBMUgyVlFLUFNUV0oiLCJzY3AiOlsib2ZmbGluZV9hY2Nlc3MiLCJvcGVuaWQiXSwic2lkIjoiR0JwUXN1STI3a3ZENUZrdG5xamxKTFFSVmpmUk5wOG0iLCJjbGllbnRfaWQiOiIwMUVIVkVSOEpWWDVaR0M0MDRLRzNLNFZESyJ9.7l1bCrCHQMkTlJue5uWPt4F5bRkUR-qdgLouaCyPvZBLmdzzZyWAlEJQ9-ez09t80ZK2Dj27p2issIYGzR8plA"</span>
- <span class="hljs-keyword">Body
</span>{
    <span class="hljs-string">"status"</span>: <span class="hljs-string">"rejected"</span>,
    <span class="hljs-string">"reason"</span>: <span class="hljs-string">"test"</span>
}
</code></pre>
        </div>
      </div>

      <div class="shop55" id="s55">
        <h3 class="title">Tham số của response</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">success</td>
                <td style="text-align: center">Boolean</td>
                <td>Request thành công hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">Int64</td>
                <td>STT của bản ghi</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">channel_id</td>
                <td style="text-align: center">String</td>
                <td>ID của kênh chat trên ightk</td>
              </tr>
              <tr>
                <td style="text-align: center">status</td>
                <td style="text-align: center">Int64</td>
                <td>Trạng thái shop</td>
              </tr>
              <tr>
                <td style="text-align: center">subscribe</td>
                <td style="text-align: center">String</td>
                <td>Đăng ký nhận hóa đơn hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">code</td>
                <td style="text-align: center">String</td>
                <td>Mã shop</td>
              </tr>
              <tr>
                <td style="text-align: center">name</td>
                <td style="text-align: center">String</td>
                <td>Tên shop</td>
              </tr>
              <tr>
                <td style="text-align: center">tax_code</td>
                <td style="text-align: center">String</td>
                <td>Mã số thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">address</td>
                <td style="text-align: center">String</td>
                <td>Địa chỉ shop</td>
              </tr>
              <tr>
                <td style="text-align: center">email</td>
                <td style="text-align: center">String</td>
                <td>Email của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">phone</td>
                <td style="text-align: center">String</td>
                <td>SĐT của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">created_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian tạo shop info</td>
              </tr>
              <tr>
                <td style="text-align: center">created_by</td>
                <td style="text-align: center">String</td>
                <td>Người tạo shop info</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian cập nhập shop info</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_by</td>
                <td style="text-align: center">String</td>
                <td>Người cập nhập shop info</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="shop56" id="s56">
        <h3 class="title">Response ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json">{
    <span class="hljs-attr">"success"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"id"</span>: <span class="hljs-number">10</span>,
        <span class="hljs-attr">"shop_id"</span>: <span class="hljs-string">"5db7eb88-2dec-4f10-9c28-43750a0a0210"</span>,
        <span class="hljs-attr">"channel_id"</span>: <span class="hljs-string">"0C0D1258DFA2"</span>,
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"rejected"</span>,
        <span class="hljs-attr">"subscribe"</span>: <span class="hljs-string">"yes"</span>,
        <span class="hljs-attr">"code"</span>: <span class="hljs-string">"S8764972"</span>,
        <span class="hljs-attr">"name"</span>: <span class="hljs-string">"CÔNG TY TNHH THIẾT BỊ ĐIỆN MINnnnnn"</span>,
        <span class="hljs-attr">"tax_code"</span>: <span class="hljs-string">"0400888136-123"</span>,
        <span class="hljs-attr">"address"</span>: <span class="hljs-string">"Lô 9 Toà 2, Trung Tâm Thương Mại Đại Hoàng Sơn, Đường Xương Giang, Phường Ngô Quyền, TP Bắc Giang, Tỉnh Bắc Giang, Việt Namhhhhhh"</span>,
        <span class="hljs-attr">"email"</span>: <span class="hljs-string">"tuvan.3training@gmail.com"</span>,
        <span class="hljs-attr">"phone"</span>: <span class="hljs-string">"0915549468"</span>,
        <span class="hljs-attr">"created_at"</span>: <span class="hljs-string">"2020-12-24T18:30:16+07:00"</span>,
        <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"admin"</span>,
        <span class="hljs-attr">"updated_at"</span>: <span class="hljs-string">"2020-12-24T19:03:42.016288181+07:00"</span>,
        <span class="hljs-attr">"updated_by"</span>: <span class="hljs-string">"vuhk1"</span>
    }
}
</code></pre>
        </div>
      </div>
    </div>

    <div
      class="shop6"
      v-bind:class="{ 'display-block': activeContent === '16' }"
    >
      <div>
        <h2>CS Update</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="shop61" id="s61">
        <h3 class="title">URL</h3>
        <div class="title-sub">
          <blockquote>
            <p>{<strong>host</strong>}/api/v1/shops/cs/{shop_id}</p>
          </blockquote>
        </div>
      </div>

      <div class="shop62" id="s62">
        <h3 class="title">Note</h3>
        <div class="title-sub">
          <ul>
            <li>
              <em
                >Status = approved thì chỉ update được field
                &#39;subscribe&#39;</em
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="shop63" id="s63">
        <h3 class="title">Tham số của data</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th style="text-align: center">Bắt buộc (Y/N)</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">name</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Tên shop</td>
              </tr>
              <tr>
                <td style="text-align: center">tax_code</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Mã số thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">address</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Địa chỉ shop</td>
              </tr>
              <tr>
                <td style="text-align: center">email</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Email của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">subscribe</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Đăng ký nhận hóa đơn hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">phone</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">N</td>
                <td>SĐT shop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="shop64" id="s64">
        <h3 class="title">Request data ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json"><span class="hljs-comment">#PUT</span>
- Authorization (<span class="hljs-keyword">Bearer </span>Token):<span class="hljs-string">"eyJhbGciOiJFUzI1NiIsImtpZCI6IjAxRUhWRVI4SlZYNVpHQzQwNEtHM0s0VkRLXzE1OTk3MjMwMjAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoIiwiZXhwIjoxNjA4Mjg2NDMzLCJqdGkiOiIwMUVTU1NaWkNKRVFaWUdOQVBQTUhEQVMxRCIsImlhdCI6MTYwODI1NzYzMywiaXNzIjoiaHR0cHM6Ly9hdXRoLmdodGtsYWIuY29tIiwic3ViIjoiMDFFUURBR1IzRUJTM1FBMUgyVlFLUFNUV0oiLCJzY3AiOlsib2ZmbGluZV9hY2Nlc3MiLCJvcGVuaWQiXSwic2lkIjoiR0JwUXN1STI3a3ZENUZrdG5xamxKTFFSVmpmUk5wOG0iLCJjbGllbnRfaWQiOiIwMUVIVkVSOEpWWDVaR0M0MDRLRzNLNFZESyJ9.7l1bCrCHQMkTlJue5uWPt4F5bRkUR-qdgLouaCyPvZBLmdzzZyWAlEJQ9-ez09t80ZK2Dj27p2issIYGzR8plA"</span>
- <span class="hljs-keyword">Body
</span>{
    <span class="hljs-string">"name"</span>: <span class="hljs-string">"CÔNG TY TNHH THIẾT BỊ ĐIỆN MINnnnnn"</span>,
    <span class="hljs-string">"tax_code"</span>: <span class="hljs-string">"0400888136-123"</span>,
    <span class="hljs-string">"address"</span>: <span class="hljs-string">"Lô 9 Toà 2, Trung Tâm Thương Mại Đại Hoàng Sơn, Đường Xương Giang, Phường Ngô Quyền, TP Bắc Giang, Tỉnh Bắc Giang, Việt Namhhhhhh"</span>,
    <span class="hljs-string">"email"</span>: <span class="hljs-string">"tuvan.3training@gmail.com"</span>,
    <span class="hljs-string">"subscribe"</span>: <span class="hljs-string">"yes"</span>,
    <span class="hljs-string">"phone"</span>: <span class="hljs-string">"0915549468"</span>
}
</code></pre>
        </div>
      </div>

      <div class="shop65" id="s65">
        <h3 class="title">Tham số của response</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">success</td>
                <td style="text-align: center">Boolean</td>
                <td>Request thành công hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">Int64</td>
                <td>STT của bản ghi</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">channel_id</td>
                <td style="text-align: center">String</td>
                <td>ID của kênh chat trên ightk</td>
              </tr>
              <tr>
                <td style="text-align: center">status</td>
                <td style="text-align: center">Int64</td>
                <td>Trạng thái shop</td>
              </tr>
              <tr>
                <td style="text-align: center">subscribe</td>
                <td style="text-align: center">String</td>
                <td>Đăng ký nhận hóa đơn hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">code</td>
                <td style="text-align: center">String</td>
                <td>Mã shop</td>
              </tr>
              <tr>
                <td style="text-align: center">name</td>
                <td style="text-align: center">String</td>
                <td>Tên shop</td>
              </tr>
              <tr>
                <td style="text-align: center">tax_code</td>
                <td style="text-align: center">String</td>
                <td>Mã số thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">address</td>
                <td style="text-align: center">String</td>
                <td>Địa chỉ shop</td>
              </tr>
              <tr>
                <td style="text-align: center">email</td>
                <td style="text-align: center">String</td>
                <td>Email của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">phone</td>
                <td style="text-align: center">String</td>
                <td>SĐT của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">created_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian tạo shop info</td>
              </tr>
              <tr>
                <td style="text-align: center">created_by</td>
                <td style="text-align: center">String</td>
                <td>Người tạo shop info</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian cập nhập shop info</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_by</td>
                <td style="text-align: center">String</td>
                <td>Người cập nhập shop info</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="shop66" id="s66">
        <h3 class="title">Response ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json">{
    <span class="hljs-attr">"success"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"id"</span>: <span class="hljs-number">10</span>,
        <span class="hljs-attr">"shop_id"</span>: <span class="hljs-string">"5db7eb88-2dec-4f10-9c28-43750a0a0210"</span>,
        <span class="hljs-attr">"channel_id"</span>: <span class="hljs-string">"0C0D1258DFA2"</span>,
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"rejected"</span>,
        <span class="hljs-attr">"subscribe"</span>: <span class="hljs-string">"yes"</span>,
        <span class="hljs-attr">"name"</span>: <span class="hljs-string">"CÔNG TY TNHH THIẾT BỊ ĐIỆN MINnnnnn"</span>,
        <span class="hljs-attr">"tax_code"</span>: <span class="hljs-string">"0400888136-123"</span>,
        <span class="hljs-attr">"address"</span>: <span class="hljs-string">"Lô 9 Toà 2, Trung Tâm Thương Mại Đại Hoàng Sơn, Đường Xương Giang, Phường Ngô Quyền, TP Bắc Giang, Tỉnh Bắc Giang, Việt Namhhhhhh"</span>,
        <span class="hljs-attr">"email"</span>: <span class="hljs-string">"tuvan.3training@gmail.com"</span>,
        <span class="hljs-attr">"phone"</span>: <span class="hljs-string">"0915549468"</span>,
        <span class="hljs-attr">"created_at"</span>: <span class="hljs-string">"2020-12-24T18:30:16+07:00"</span>,
        <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"admin"</span>,
        <span class="hljs-attr">"updated_at"</span>: <span class="hljs-string">"2020-12-24T19:05:17.22317192+07:00"</span>,
        <span class="hljs-attr">"updated_by"</span>: <span class="hljs-string">"admin"</span>
    }
}
</code></pre>
        </div>
      </div>
    </div>

    <div class="i1" v-bind:class="{ 'display-block': activeContent === '21' }">
      <div>
        <h2>Host</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="i11" id="i11">
        <h3 class="title">Host List</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Env</th>
                <th>URL</th>
                <th>Người thực hiện duyệt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">Test</td>
                <td>
                  <a href="https://ginvoices.ghtklab.com"
                    >https://ginvoices.ghtklab.com</a
                  >
                </td>
                <td>Ready</td>
              </tr>
              <tr>
                <td style="text-align: center">Prod</td>
                <td></td>
                <td>Not Ready</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="i2" v-bind:class="{ 'display-block': activeContent === '22' }">
      <div>
        <h2>Create</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="i21" id="i21">
        <h3 class="title">URL</h3>
        <div class="title-sub">
          <blockquote>
            <p>{<strong>host</strong>}/api/v1/invoices</p>
          </blockquote>
        </div>
      </div>

      <div class="i22" id="i22">
        <h3 class="title">Tham số của data</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th style="text-align: center">Bắt buộc (Y/N)</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">payment_method</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Phương thức thanh toán (TM, CK, TM/CK, DTCN, KTT)</td>
              </tr>
              <tr>
                <td style="text-align: center">type</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">N</td>
                <td>Loại hóa đơn (01GTKT-default, 02GTTT, 03XKNB)</td>
              </tr>
              <tr>
                <td style="text-align: center">ar_url</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Link file AR</td>
              </tr>
              <tr>
                <td style="text-align: center">from</td>
                <td style="text-align: center">Int64</td>
                <td style="text-align: center">Y</td>
                <td>Xuất hóa đơn từ thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">to</td>
                <td style="text-align: center">Int64</td>
                <td style="text-align: center">Y</td>
                <td>Xuất hóa đơn đến thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.name</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Tên mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.type</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">N</td>
                <td>Loại mặt hàng (TM, CK, KM)</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.vat</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Mức thuế suất của mặt hàng (0, 5, 10, -1, -2)</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.quantity</td>
                <td style="text-align: center">Int64</td>
                <td style="text-align: center">Y</td>
                <td>Số lượng mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.sub_fee</td>
                <td style="text-align: center">Float64</td>
                <td style="text-align: center">Y</td>
                <td>Phụ phí</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.price</td>
                <td style="text-align: center">Float64</td>
                <td style="text-align: center">Y</td>
                <td>Đơn giá mặt hàng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="i23" id="i23">
        <h3 class="title">Request data ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json"><span class="hljs-comment">#POST</span>
- Authorization (<span class="hljs-keyword">Bearer </span>Token): <span class="hljs-string">"eyJhbGciOiJFUzI1NiIsImtpZCI6IjAxRUhWRVI4SlZYNVpHQzQwNEtHM0s0VkRLXzE1OTk3MjMwMjAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoIiwiZXhwIjoxNjA4NjM2NzgwLCJqdGkiOiIwMUVUNDgzUTFHNTBEQU5YVkRaRUVIM0NIMSIsImlhdCI6MTYwODYwNzk4MCwiaXNzIjoiaHR0cHM6Ly9hdXRoLmdodGtsYWIuY29tIiwic3ViIjoiMDFFUURBR1IzRUJTM1FBMUgyVlFLUFNUV0oiLCJzY3AiOlsib2ZmbGluZV9hY2Nlc3MiLCJvcGVuaWQiXSwic2lkIjoiNWhvaHNMaFAxeUhOMWVOWVVJMnRRYk5FaDBCcVkyZFIiLCJjbGllbnRfaWQiOiIwMUVIVkVSOEpWWDVaR0M0MDRLRzNLNFZESyJ9.GBfZtQyb3u6U7REYTiI3xPr6oIerO6ZsLUGTd1djZA3iTpMHF8OlNkXp0RNDb_7spj6CYP3R13KPMomNnkhdoQ"</span>
- <span class="hljs-keyword">Body
</span>{
    <span class="hljs-string">"shop_id"</span>: <span class="hljs-string">"5f74535e-c5d0-4d4a-b4b4-4a2c0a784c19"</span>,
    <span class="hljs-string">"payment_method"</span>: <span class="hljs-string">"CK"</span>,
    <span class="hljs-string">"type"</span>: <span class="hljs-string">"01GTKT"</span>,
    <span class="hljs-string">"ar_url"</span>: <span class="hljs-string">"link"</span>,
    <span class="hljs-string">"from"</span>: <span class="hljs-number">1608624296</span>,
    <span class="hljs-string">"to"</span>: <span class="hljs-number">1608633315</span>,
    <span class="hljs-string">"line_items"</span>: [
        {
            <span class="hljs-string">"type"</span>: <span class="hljs-string">"KM"</span>,
            <span class="hljs-string">"name"</span>: <span class="hljs-string">"item 1"</span>,
            <span class="hljs-string">"quantity"</span>: <span class="hljs-number">1</span>,
            <span class="hljs-string">"vat"</span>: <span class="hljs-string">"5"</span>,
            <span class="hljs-string">"sub_fee"</span>: <span class="hljs-number">20000</span>,
            <span class="hljs-string">"price"</span>: <span class="hljs-number">375000</span>
        }
    ]
}
</code></pre>
        </div>
      </div>

      <div class="i24" id="i24">
        <h3 class="title">Note</h3>
        <div class="title-sub">
          <ul>
            <li>
              <em
                >Chỉ tạo được hóa đơn đối với các shop có status = approved và
                subscribe = 1</em
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="i25" id="i25">
        <h3 class="title">Tham số của response</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">success</td>
                <td style="text-align: center">Boolean</td>
                <td>Request thành công hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">String</td>
                <td>ID của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">channel_id</td>
                <td style="text-align: center">String</td>
                <td>ID của kênh Gchat</td>
              </tr>
              <tr>
                <td style="text-align: center">sid</td>
                <td style="text-align: center">String</td>
                <td>ID của hóa đơn trên hệ thống FPT</td>
              </tr>
              <tr>
                <td style="text-align: center">status</td>
                <td style="text-align: center">String</td>
                <td>
                  Trạng thái của hóa đơn (draft, pending, confirmed, expired,
                  canceled, released)
                </td>
              </tr>
              <tr>
                <td style="text-align: center">type</td>
                <td style="text-align: center">String</td>
                <td>Loại hóa đơn (01GTKT, 02GTTT, 03XKNB)</td>
              </tr>
              <tr>
                <td style="text-align: center">ar_url</td>
                <td style="text-align: center">String</td>
                <td>Link file AR</td>
              </tr>
              <tr>
                <td style="text-align: center">form</td>
                <td style="text-align: center">String</td>
                <td>Template hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">payment_method</td>
                <td style="text-align: center">String</td>
                <td>Phương thức thanh toán (TM, CK, TM/CK, DTCN, KTT)</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">amount</td>
                <td style="text-align: center">Float64</td>
                <td>Số tiền trước thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">vat_amount</td>
                <td style="text-align: center">Float64</td>
                <td>Số tiền thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">total</td>
                <td style="text-align: center">Float64</td>
                <td>Tổng số tiền sau thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">words</td>
                <td style="text-align: center">String</td>
                <td>Số tiền bằng chữ</td>
              </tr>
              <tr>
                <td style="text-align: center">curr</td>
                <td style="text-align: center">String</td>
                <td>Đơn vị tiền</td>
              </tr>
              <tr>
                <td style="text-align: center">created_at</td>
                <td style="text-align: center">Int64</td>
                <td>Thời gian tạo hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_at</td>
                <td style="text-align: center">Int64</td>
                <td>Thời gian cập nhật hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">created_by</td>
                <td style="text-align: center">String</td>
                <td>Người tạo hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">from</td>
                <td style="text-align: center">Int64</td>
                <td>Xuất hóa đơn từ thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">to</td>
                <td style="text-align: center">Int64</td>
                <td>Xuất hóa đơn đến thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.id</td>
                <td style="text-align: center">String</td>
                <td>ID của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.invoice_id</td>
                <td style="text-align: center">String</td>
                <td>ID của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.status</td>
                <td style="text-align: center">String</td>
                <td>Trạng thái của mặt hàng (active/inactive)</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.type</td>
                <td style="text-align: center">String</td>
                <td>Loại mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.vat</td>
                <td style="text-align: center">String</td>
                <td>Mức thuế suất của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.vat_amount</td>
                <td style="text-align: center">Float64</td>
                <td>Số tiền thuế của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.name</td>
                <td style="text-align: center">String</td>
                <td>Tên mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.quantity</td>
                <td style="text-align: center">Int64</td>
                <td>Số lượng mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.sub_fee</td>
                <td style="text-align: center">Float64</td>
                <td>Phụ phí</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.total</td>
                <td style="text-align: center">Float64</td>
                <td>Tổng tiền sau thuế của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.price</td>
                <td style="text-align: center">Float64</td>
                <td>Đơn giá của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.amount</td>
                <td style="text-align: center">Float64</td>
                <td>Tổng tiền trước thuế của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.created_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian tạo mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.updated_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian cập nhật mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.created_by</td>
                <td style="text-align: center">String</td>
                <td>Người tạo mặt hàng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="i26" id="i26">
        <h3 class="title">Response ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json">{
    <span class="hljs-attr">"success"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"id"</span>: <span class="hljs-string">"01ET9CCAK1J53CDZWW574HETR9"</span>,
        <span class="hljs-attr">"channel_id"</span>: <span class="hljs-string">"EA2864B1502D"</span>,
        <span class="hljs-attr">"sid"</span>: <span class="hljs-string">"GINV.S17016010.1608780229"</span>,
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"draft"</span>,
        <span class="hljs-attr">"type"</span>: <span class="hljs-string">"01GTKT"</span>,
        <span class="hljs-attr">"ar_url"</span>: <span class="hljs-string">"link"</span>,
        <span class="hljs-attr">"form"</span>: <span class="hljs-string">"01GTKT0/002"</span>,
        <span class="hljs-attr">"payment_method"</span>: <span class="hljs-string">"CK"</span>,
        <span class="hljs-attr">"shop_id"</span>: <span class="hljs-string">"5f74535e-c5d0-4d4a-b4b4-4a2c0a784c19"</span>,
        <span class="hljs-attr">"amount"</span>: <span class="hljs-number">395000</span>,
        <span class="hljs-attr">"vat_amount"</span>: <span class="hljs-number">19750</span>,
        <span class="hljs-attr">"total"</span>: <span class="hljs-number">414750</span>,
        <span class="hljs-attr">"words"</span>: <span class="hljs-string">"bốn trăm mười bốn nghìn bảy trăm năm mươi"</span>,
        <span class="hljs-attr">"curr"</span>: <span class="hljs-string">"VND"</span>,
        <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>,
        <span class="hljs-attr">"created_at"</span>: <span class="hljs-number">1608780229</span>,
        <span class="hljs-attr">"updated_at"</span>: <span class="hljs-number">1608780229</span>,
        <span class="hljs-attr">"from"</span>: <span class="hljs-number">1608624296</span>,
        <span class="hljs-attr">"to"</span>: <span class="hljs-number">1608633315</span>,
        <span class="hljs-attr">"line_items"</span>: [
            {
                <span class="hljs-attr">"id"</span>: <span class="hljs-string">"01ET9CCAK4KCJG81WTFZ8CFRR3"</span>,
                <span class="hljs-attr">"invoice_id"</span>: <span class="hljs-string">"01ET9CCAK1J53CDZWW574HETR9"</span>,
                <span class="hljs-attr">"status"</span>: <span class="hljs-string">"active"</span>,
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"KM"</span>,
                <span class="hljs-attr">"vat"</span>: <span class="hljs-string">"5"</span>,
                <span class="hljs-attr">"vat_amount"</span>: <span class="hljs-number">19750</span>,
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"item 1"</span>,
                <span class="hljs-attr">"quantity"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"sub_fee"</span>: <span class="hljs-number">20000</span>,
                <span class="hljs-attr">"total"</span>: <span class="hljs-number">414750</span>,
                <span class="hljs-attr">"price"</span>: <span class="hljs-number">375000</span>,
                <span class="hljs-attr">"amount"</span>: <span class="hljs-number">395000</span>,
                <span class="hljs-attr">"created_at"</span>: <span class="hljs-number">1608780229</span>,
                <span class="hljs-attr">"updated_at"</span>: <span class="hljs-number">1608780229</span>,
                <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>
            }
        ]
    }
}
</code></pre>
        </div>
      </div>
    </div>

    <div class="i3" v-bind:class="{ 'display-block': activeContent === '23' }">
      <div>
        <h2>Get List</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="i31" id="i31">
        <h3 class="title">URL</h3>
        <div class="title-sub">
          <blockquote>
            <p>{<strong>host</strong>}/api/v1/invoices</p>
          </blockquote>
        </div>
      </div>

      <div class="i32" id="i32">
        <h3 class="title">Tham số của data</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th style="text-align: center">Bắt buộc (Y/N)</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">get_total_count</td>
                <td style="text-align: center">Boolean</td>
                <td style="text-align: center">N</td>
                <td>Trả về tổng số hóa đơn hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">page</td>
                <td style="text-align: center">Int64</td>
                <td style="text-align: center">N</td>
                <td>Phân trang hiện tại</td>
              </tr>
              <tr>
                <td style="text-align: center">status</td>
                <td style="text-align: center">Boolean</td>
                <td style="text-align: center">N</td>
                <td>Trạng thái của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">N</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">invoice_code</td>
                <td style="text-align: center">Boolean</td>
                <td style="text-align: center">N</td>
                <td>ID hoặc SID của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">from</td>
                <td style="text-align: center">Timestamp</td>
                <td style="text-align: center">N</td>
                <td>Xuất hóa đơn từ thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">to</td>
                <td style="text-align: center">Timestamp</td>
                <td style="text-align: center">N</td>
                <td>Xuất hóa đơn đến thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">time_option</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">N</td>
                <td>Created_at/Updated_at</td>
              </tr>
              <tr>
                <td style="text-align: center">time_from</td>
                <td style="text-align: center">Timestamp</td>
                <td style="text-align: center">N</td>
                <td>Tạo/Update từ thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">time_to</td>
                <td style="text-align: center">Timestamp</td>
                <td style="text-align: center">N</td>
                <td>Tạo/Update đến thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">sort</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">N</td>
                <td>Sắp xếp theo created_at/updated_at</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="i33" id="i33">
        <h3 class="title">Note</h3>
        <div class="title-sub">
          <ul>
            <li>
              <em>time_option có giá trị default là &#39;created_at&#39;</em>
            </li>
            <li>
              <em
                >field sort: dấu - sắp xếp giảm dần; dấu + sắp xếp tăng dần</em
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="i34" id="i34">
        <h3 class="title">Request data ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json"><span class="hljs-attr">#GET
- Authorization (Bearer Token): "eyJhbGciOiJFUzI1</span><span class="hljs-symbol">NiIsImtpZCI6</span>IjAxRUhWRVI<span class="hljs-number">4</span>SlZY<span class="hljs-symbol">NVpHQzQwNEtHM0</span>s<span class="hljs-number">0</span>VkRLXzE<span class="hljs-number">1</span>OTk<span class="hljs-number">3</span>MjMwMjAiLCJ<span class="hljs-number">0</span>eXAiOiJKV<span class="hljs-number">1</span>QifQ.eyJhdWQiOiJhdXRoIiwiZXhwIjox<span class="hljs-symbol">NjA4</span>Mj<span class="hljs-name">g2</span><span class="hljs-symbol">NDMzLCJqdGkiOiIwMUVTU1</span><span class="hljs-symbol">NaWkNKRVFaWUdOQVBQTUhEQVMxRCIsImlhdCI6</span>MTYwODI<span class="hljs-number">1</span><span class="hljs-symbol">NzYzMywiaXNzIjoiaHR0</span>cH<span class="hljs-name">M6</span>Ly<span class="hljs-number">9</span>hdXRoLmdodGtsYWIuY<span class="hljs-number">29</span>tIiwic<span class="hljs-number">3</span>ViIjoiMDFFUURBR<span class="hljs-number">1</span>IzRUJT<span class="hljs-name">M1</span>FBMUgyVlFLUF<span class="hljs-symbol">NUV0</span>oiLCJzY<span class="hljs-number">3</span>AiOlsib<span class="hljs-number">2</span>ZmbGluZV<span class="hljs-number">9</span>hY<span class="hljs-number">2</span><span class="hljs-symbol">Nlc3</span>MiLCJ<span class="hljs-attr">vcGVuaWQiXSwic2</span>lkIjoiR<span class="hljs-number">0</span>JwUX<span class="hljs-symbol">N1</span>STI<span class="hljs-number">3</span>a<span class="hljs-number">3</span>ZE<span class="hljs-symbol">NUZrdG5</span>xamxKTFFSVmpmUk<span class="hljs-number">5</span>wO<span class="hljs-name">G0</span>iLCJjbGllb<span class="hljs-symbol">nRfaWQiOiIwMUVIVkVSOEpWWDVaR0</span><span class="hljs-name">M0</span>MDRLRz<span class="hljs-symbol">NLNFZESyJ9</span><span class="hljs-number">.7</span>l<span class="hljs-number">1</span>bCrCHQMkTlJue<span class="hljs-number">5</span>uWPt<span class="hljs-number">4</span>F<span class="hljs-number">5</span>bRkUR-qdgLouaCyPvZBLmdzzZyWAlEJQ<span class="hljs-number">9</span>-ez<span class="hljs-number">09</span>t<span class="hljs-number">80</span>ZK<span class="hljs-number">2</span>Dj<span class="hljs-number">27</span>p<span class="hljs-number">2</span>issIYGzR<span class="hljs-number">8</span>plA<span class="hljs-string">"
- Param:
+ get_total_count = true
+ page = 1
+ status = "</span>released<span class="hljs-string">"
+ shop_id = "</span><span class="hljs-number">5</span>f<span class="hljs-number">30</span>a<span class="hljs-number">78</span>b<span class="hljs-number">-837</span>c<span class="hljs-number">-4</span>b<span class="hljs-number">2</span>e-bcc<span class="hljs-number">9</span><span class="hljs-number">-48960</span>a<span class="hljs-number">6</span>e<span class="hljs-number">4</span>c<span class="hljs-number">49</span><span class="hljs-string">"
+ invoice_code = "</span><span class="hljs-number">01</span>ETE<span class="hljs-name">M7</span>D<span class="hljs-number">91</span>VEWEHAXCE<span class="hljs-number">5</span>SH<span class="hljs-number">38</span>ZB<span class="hljs-string">"
+ from = "</span><span class="hljs-number">1608824296</span><span class="hljs-string">"
+ to = "</span><span class="hljs-number">1608833315</span><span class="hljs-string">"
+ time_option = "</span>created_at<span class="hljs-string">"
+ time_from = "</span><span class="hljs-number">1608856229</span><span class="hljs-string">"
+ time_to = "</span><span class="hljs-number">1608896229</span><span class="hljs-string">"
+ sort = "</span>-created<span class="hljs-string">"</span>
</code></pre>
        </div>
      </div>

      <div class="i35" id="i35">
        <h3 class="title">Tham số của response</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">success</td>
                <td style="text-align: center">Boolean</td>
                <td>Request thành công hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">String</td>
                <td>ID của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">channel_id</td>
                <td style="text-align: center">String</td>
                <td>ID của kênh Gchat</td>
              </tr>
              <tr>
                <td style="text-align: center">sid</td>
                <td style="text-align: center">String</td>
                <td>ID của hóa đơn trên hệ thống FPT</td>
              </tr>
              <tr>
                <td style="text-align: center">sec</td>
                <td style="text-align: center">String</td>
                <td>Mã tra cứu của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">serial</td>
                <td style="text-align: center">String</td>
                <td>Ký hiệu hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">seq</td>
                <td style="text-align: center">String</td>
                <td>Số hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">idt</td>
                <td style="text-align: center">String</td>
                <td>Ngày lập hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">status</td>
                <td style="text-align: center">String</td>
                <td>Trạng thái của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">type</td>
                <td style="text-align: center">String</td>
                <td>Loại hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">ar_url</td>
                <td style="text-align: center">String</td>
                <td>Link file AR</td>
              </tr>
              <tr>
                <td style="text-align: center">form</td>
                <td style="text-align: center">String</td>
                <td>Template hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">payment_method</td>
                <td style="text-align: center">String</td>
                <td>Phương thức thanh toán</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">amount</td>
                <td style="text-align: center">Float64</td>
                <td>Số tiền trước thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">vat_amount</td>
                <td style="text-align: center">Float64</td>
                <td>Số tiền thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">total</td>
                <td style="text-align: center">Float64</td>
                <td>Tổng số tiền sau thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">words</td>
                <td style="text-align: center">String</td>
                <td>Số tiền bằng chữ</td>
              </tr>
              <tr>
                <td style="text-align: center">curr</td>
                <td style="text-align: center">String</td>
                <td>Đơn vị tiền</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_name</td>
                <td style="text-align: center">String</td>
                <td>Tên shop</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_code</td>
                <td style="text-align: center">String</td>
                <td>Mã shop</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_tax_code</td>
                <td style="text-align: center">String</td>
                <td>Mã số thuế của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">cancel_resason.reason</td>
                <td style="text-align: center">String</td>
                <td>Lý do hủy hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">cancel_resason.reference</td>
                <td style="text-align: center">String</td>
                <td>Số chứng từ liên quan</td>
              </tr>
              <tr>
                <td style="text-align: center">cancel_resason.description</td>
                <td style="text-align: center">String</td>
                <td>Chi tiết lý do hủy hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">cancel_resason.created_by</td>
                <td style="text-align: center">String</td>
                <td>Người hủy hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">created_at</td>
                <td style="text-align: center">Int64</td>
                <td>Thời gian tạo hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_at</td>
                <td style="text-align: center">Int64</td>
                <td>Thời gian cập nhật hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">created_by</td>
                <td style="text-align: center">Int64</td>
                <td>Người tạo hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_by</td>
                <td style="text-align: center">Int64</td>
                <td>Người cập nhật hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">from</td>
                <td style="text-align: center">Int64</td>
                <td>Xuất hóa đơn từ thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">to</td>
                <td style="text-align: center">Int64</td>
                <td>Xuất hóa đơn đến thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">limit</td>
                <td style="text-align: center">Int64</td>
                <td>Số bản ghi của 1 trang</td>
              </tr>
              <tr>
                <td style="text-align: center">total_page</td>
                <td style="text-align: center">Int64</td>
                <td>Tổng số trang</td>
              </tr>
              <tr>
                <td style="text-align: center">current_page</td>
                <td style="text-align: center">Int64</td>
                <td>Trang hiện tại</td>
              </tr>
              <tr>
                <td style="text-align: center">total_record</td>
                <td style="text-align: center">Int64</td>
                <td>Tổng số bản ghi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="i36" id="i36">
        <h3 class="title">Response ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json">{
    <span class="hljs-attr">"success"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"page_data"</span>: [
            {
                <span class="hljs-attr">"id"</span>: <span class="hljs-string">"01ET1S9W1ABSMNB6G2HDXR4WD8"</span>,
                <span class="hljs-attr">"status"</span>: <span class="hljs-string">"draft"</span>,
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"01GTKT"</span>,
                <span class="hljs-attr">"form"</span>: <span class="hljs-string">"01GTKT0/002"</span>,
                <span class="hljs-attr">"payment_method"</span>: <span class="hljs-string">"TM"</span>,
                <span class="hljs-attr">"shop_id"</span>: <span class="hljs-string">"1"</span>,
                <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1171900</span>,
                <span class="hljs-attr">"vat_amount"</span>: <span class="hljs-number">55950</span>,
                <span class="hljs-attr">"total"</span>: <span class="hljs-number">1227850</span>,
                <span class="hljs-attr">"words"</span>: <span class="hljs-string">"một triệu hai trăm hai mươi bảy nghìn tám trăm năm mươi"</span>,
                <span class="hljs-attr">"curr"</span>: <span class="hljs-string">"VND"</span>,
                <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"chittk4"</span>,
                <span class="hljs-attr">"shop_name"</span>: <span class="hljs-string">"Công Ty TNHH Thương Mại Điện Tử Hòa Bình"</span>,
                <span class="hljs-attr">"shop_code"</span>: <span class="hljs-string">"S310785"</span>,
                <span class="hljs-attr">"shop_tax_code"</span>: <span class="hljs-string">"0313836201"</span>,
                <span class="hljs-attr">"created_at"</span>: <span class="hljs-number">1608525345</span>,
                <span class="hljs-attr">"updated_at"</span>: <span class="hljs-number">1608525345</span>,
                <span class="hljs-attr">"from"</span>: <span class="hljs-number">1608644543</span>,
                <span class="hljs-attr">"to"</span>: <span class="hljs-number">1608644551</span>
            },
            {
                <span class="hljs-attr">"id"</span>: <span class="hljs-string">"01ET7X014BPJ3JAX6VBQR8KVEV"</span>,
                <span class="hljs-attr">"channel_id"</span>: <span class="hljs-string">"2B244B849F9B"</span>,
                <span class="hljs-attr">"sid"</span>: <span class="hljs-string">"GINV.S1140612.1608730543"</span>,
                <span class="hljs-attr">"sec"</span>: <span class="hljs-string">"1RVK36JYF8"</span>,
                <span class="hljs-attr">"status"</span>: <span class="hljs-string">"canceled"</span>,
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"01GTKT"</span>,
                <span class="hljs-attr">"serial"</span>: <span class="hljs-string">"AA/21E"</span>,
                <span class="hljs-attr">"seq"</span>: <span class="hljs-string">"0000055"</span>,
                <span class="hljs-attr">"idt"</span>: <span class="hljs-string">"2020-12-23"</span>,
                <span class="hljs-attr">"form"</span>: <span class="hljs-string">"01GTKT0/002"</span>,
                <span class="hljs-attr">"payment_method"</span>: <span class="hljs-string">"CK"</span>,
                <span class="hljs-attr">"shop_id"</span>: <span class="hljs-string">"5b46e665-9694-4fda-8ad8-73b80a0a0269"</span>,
                <span class="hljs-attr">"amount"</span>: <span class="hljs-number">251700</span>,
                <span class="hljs-attr">"vat_amount"</span>: <span class="hljs-number">7190</span>,
                <span class="hljs-attr">"total"</span>: <span class="hljs-number">258890</span>,
                <span class="hljs-attr">"words"</span>: <span class="hljs-string">"hai trăm năm mươi tám nghìn tám trăm chín mươi"</span>,
                <span class="hljs-attr">"curr"</span>: <span class="hljs-string">"VND"</span>,
                <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>,
                <span class="hljs-attr">"modified_by"</span>: <span class="hljs-string">"vuhk1"</span>,
                <span class="hljs-attr">"shop_name"</span>: <span class="hljs-string">"Công Ty TNHH Sản Xuất Thương Mại Bingo"</span>,
                <span class="hljs-attr">"shop_code"</span>: <span class="hljs-string">"S1140612"</span>,
                <span class="hljs-attr">"shop_tax_code"</span>: <span class="hljs-string">"0314709887"</span>,
                <span class="hljs-attr">"cancel_reasons"</span>: [
                    {
                        <span class="hljs-attr">"reason"</span>: <span class="hljs-string">"test"</span>,
                        <span class="hljs-attr">"reference"</span>: <span class="hljs-string">"12121212"</span>,
                        <span class="hljs-attr">"description"</span>: <span class="hljs-string">"123"</span>,
                        <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>
                    }
                ],
                <span class="hljs-attr">"created_at"</span>: <span class="hljs-number">1608730543</span>,
                <span class="hljs-attr">"updated_at"</span>: <span class="hljs-number">1608733220</span>,
                <span class="hljs-attr">"from"</span>: <span class="hljs-number">1606995015</span>,
                <span class="hljs-attr">"to"</span>: <span class="hljs-number">1607126400</span>
            },
            {
                <span class="hljs-attr">"id"</span>: <span class="hljs-string">"01ET49SRGB6F8JBH6MW4YWQNVD"</span>,
                <span class="hljs-attr">"sid"</span>: <span class="hljs-string">"GINV.S310785.1608611320"</span>,
                <span class="hljs-attr">"sec"</span>: <span class="hljs-string">"B7XK20ZCNZ"</span>,
                <span class="hljs-attr">"status"</span>: <span class="hljs-string">"approved"</span>,
                <span class="hljs-attr">"type"</span>: <span class="hljs-string">"01GTKT"</span>,
                <span class="hljs-attr">"serial"</span>: <span class="hljs-string">"AA/21E"</span>,
                <span class="hljs-attr">"seq"</span>: <span class="hljs-string">"0000016"</span>,
                <span class="hljs-attr">"idt"</span>: <span class="hljs-string">"2020-12-22"</span>,
                <span class="hljs-attr">"form"</span>: <span class="hljs-string">"01GTKT0/002"</span>,
                <span class="hljs-attr">"payment_method"</span>: <span class="hljs-string">"TM"</span>,
                <span class="hljs-attr">"shop_id"</span>: <span class="hljs-string">"1"</span>,
                <span class="hljs-attr">"amount"</span>: <span class="hljs-number">665000</span>,
                <span class="hljs-attr">"vat_amount"</span>: <span class="hljs-number">29850</span>,
                <span class="hljs-attr">"total"</span>: <span class="hljs-number">694850</span>,
                <span class="hljs-attr">"words"</span>: <span class="hljs-string">"sáu trăm chín mươi tư nghìn tám trăm năm mươi"</span>,
                <span class="hljs-attr">"curr"</span>: <span class="hljs-string">"VND"</span>,
                <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"chittk4"</span>,
                <span class="hljs-attr">"shop_name"</span>: <span class="hljs-string">"Công Ty TNHH Thương Mại Điện Tử Hòa Bình"</span>,
                <span class="hljs-attr">"shop_code"</span>: <span class="hljs-string">"S310785"</span>,
                <span class="hljs-attr">"shop_tax_code"</span>: <span class="hljs-string">"0313836201"</span>,
                <span class="hljs-attr">"created_at"</span>: <span class="hljs-number">1608609752</span>,
                <span class="hljs-attr">"updated_at"</span>: <span class="hljs-number">1608611323</span>,
                <span class="hljs-attr">"from"</span>: <span class="hljs-number">1608644543</span>,
                <span class="hljs-attr">"to"</span>: <span class="hljs-number">1608644551</span>
            }
        ],
        <span class="hljs-attr">"pagination"</span>: {
            <span class="hljs-attr">"limit"</span>: <span class="hljs-number">20</span>,
            <span class="hljs-attr">"total_page"</span>: <span class="hljs-number">2</span>,
            <span class="hljs-attr">"current_page"</span>: <span class="hljs-number">1</span>,
            <span class="hljs-attr">"total_record"</span>: <span class="hljs-number">7</span>
        }
    }
}
</code></pre>
        </div>
      </div>
    </div>

    <div class="i4" v-bind:class="{ 'display-block': activeContent === '24' }">
      <div>
        <h2>Get By ID</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="i41" id="i41">
        <h3 class="title">URL</h3>
        <div class="title-sub">
          <blockquote>
            <p>{<strong>host</strong>}/api/v1/invoices/{<em>id</em>}</p>
          </blockquote>
        </div>
      </div>

      <div class="i42" id="i42">
        <h3 class="title">Request data ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json"><span class="hljs-attr">#GET
- Authorization (Bearer Token): "eyJhbGciOiJFUzI1</span><span class="hljs-symbol">NiIsImtpZCI6</span>IjAxRUhWRVI<span class="hljs-number">4</span>SlZY<span class="hljs-symbol">NVpHQzQwNEtHM0</span>s<span class="hljs-number">0</span>VkRLXzE<span class="hljs-number">1</span>OTk<span class="hljs-number">3</span>MjMwMjAiLCJ<span class="hljs-number">0</span>eXAiOiJKV<span class="hljs-number">1</span>QifQ.eyJhdWQiOiJhdXRoIiwiZXhwIjox<span class="hljs-symbol">NjA4</span>Mj<span class="hljs-name">g2</span><span class="hljs-symbol">NDMzLCJqdGkiOiIwMUVTU1</span><span class="hljs-symbol">NaWkNKRVFaWUdOQVBQTUhEQVMxRCIsImlhdCI6</span>MTYwODI<span class="hljs-number">1</span><span class="hljs-symbol">NzYzMywiaXNzIjoiaHR0</span>cH<span class="hljs-name">M6</span>Ly<span class="hljs-number">9</span>hdXRoLmdodGtsYWIuY<span class="hljs-number">29</span>tIiwic<span class="hljs-number">3</span>ViIjoiMDFFUURBR<span class="hljs-number">1</span>IzRUJT<span class="hljs-name">M1</span>FBMUgyVlFLUF<span class="hljs-symbol">NUV0</span>oiLCJzY<span class="hljs-number">3</span>AiOlsib<span class="hljs-number">2</span>ZmbGluZV<span class="hljs-number">9</span>hY<span class="hljs-number">2</span><span class="hljs-symbol">Nlc3</span>MiLCJ<span class="hljs-attr">vcGVuaWQiXSwic2</span>lkIjoiR<span class="hljs-number">0</span>JwUX<span class="hljs-symbol">N1</span>STI<span class="hljs-number">3</span>a<span class="hljs-number">3</span>ZE<span class="hljs-symbol">NUZrdG5</span>xamxKTFFSVmpmUk<span class="hljs-number">5</span>wO<span class="hljs-name">G0</span>iLCJjbGllb<span class="hljs-symbol">nRfaWQiOiIwMUVIVkVSOEpWWDVaR0</span><span class="hljs-name">M0</span>MDRLRz<span class="hljs-symbol">NLNFZESyJ9</span><span class="hljs-number">.7</span>l<span class="hljs-number">1</span>bCrCHQMkTlJue<span class="hljs-number">5</span>uWPt<span class="hljs-number">4</span>F<span class="hljs-number">5</span>bRkUR-qdgLouaCyPvZBLmdzzZyWAlEJQ<span class="hljs-number">9</span>-ez<span class="hljs-number">09</span>t<span class="hljs-number">80</span>ZK<span class="hljs-number">2</span>Dj<span class="hljs-number">27</span>p<span class="hljs-number">2</span>issIYGzR<span class="hljs-number">8</span>plA<span class="hljs-string">"
- URL: {host}/api/v1/invoices/01ET7X014BPJ3JAX6VBQR8KVEV</span>
</code></pre>
        </div>
      </div>

      <div class="i43" id="i43">
        <h3 class="title">Tham số của response</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">success</td>
                <td style="text-align: center">Boolean</td>
                <td>Request thành công hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">String</td>
                <td>ID của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">channel_id</td>
                <td style="text-align: center">String</td>
                <td>ID của kênh Gchat</td>
              </tr>
              <tr>
                <td style="text-align: center">sid</td>
                <td style="text-align: center">String</td>
                <td>ID của hóa đơn trên hệ thống FPT</td>
              </tr>
              <tr>
                <td style="text-align: center">sec</td>
                <td style="text-align: center">String</td>
                <td>Mã tra cứu của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">serial</td>
                <td style="text-align: center">String</td>
                <td>Ký hiệu hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">seq</td>
                <td style="text-align: center">String</td>
                <td>Số hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">idt</td>
                <td style="text-align: center">String</td>
                <td>Ngày lập hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">status</td>
                <td style="text-align: center">String</td>
                <td>Trạng thái của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">type</td>
                <td style="text-align: center">String</td>
                <td>Loại hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">ar_url</td>
                <td style="text-align: center">String</td>
                <td>Link file AR</td>
              </tr>
              <tr>
                <td style="text-align: center">form</td>
                <td style="text-align: center">String</td>
                <td>Template hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">payment_method</td>
                <td style="text-align: center">String</td>
                <td>Phương thức thanh toán</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">amount</td>
                <td style="text-align: center">Float64</td>
                <td>Số tiền trước thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">vat_amount</td>
                <td style="text-align: center">Float64</td>
                <td>Số tiền thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">total</td>
                <td style="text-align: center">Float64</td>
                <td>Tổng số tiền sau thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">words</td>
                <td style="text-align: center">String</td>
                <td>Số tiền bằng chữ</td>
              </tr>
              <tr>
                <td style="text-align: center">curr</td>
                <td style="text-align: center">String</td>
                <td>Đơn vị tiền</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_name</td>
                <td style="text-align: center">String</td>
                <td>Tên shop</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_code</td>
                <td style="text-align: center">String</td>
                <td>Mã shop</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_tax_code</td>
                <td style="text-align: center">String</td>
                <td>Mã số thuế của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">cancel_resason.reason</td>
                <td style="text-align: center">String</td>
                <td>Lý do hủy hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">cancel_resason.reference</td>
                <td style="text-align: center">String</td>
                <td>Số chứng từ liên quan</td>
              </tr>
              <tr>
                <td style="text-align: center">cancel_resason.description</td>
                <td style="text-align: center">String</td>
                <td>Chi tiết lý do hủy hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">cancel_resason.created_by</td>
                <td style="text-align: center">String</td>
                <td>Người hủy hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">created_at</td>
                <td style="text-align: center">Int64</td>
                <td>Thời gian tạo hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_at</td>
                <td style="text-align: center">Int64</td>
                <td>Thời gian cập nhật hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">created_by</td>
                <td style="text-align: center">Int64</td>
                <td>Người tạo hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_by</td>
                <td style="text-align: center">Int64</td>
                <td>Người cập nhật hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">from</td>
                <td style="text-align: center">Int64</td>
                <td>Xuất hóa đơn từ thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">to</td>
                <td style="text-align: center">Int64</td>
                <td>Xuất hóa đơn đến thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.id</td>
                <td style="text-align: center">String</td>
                <td>ID của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.invoice_id</td>
                <td style="text-align: center">String</td>
                <td>ID của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.status</td>
                <td style="text-align: center">String</td>
                <td>Trạng thái của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.type</td>
                <td style="text-align: center">String</td>
                <td>Loại mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.vat</td>
                <td style="text-align: center">String</td>
                <td>Mức thuế suất của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.vat_amount</td>
                <td style="text-align: center">Float64</td>
                <td>Số tiền thuế của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.name</td>
                <td style="text-align: center">String</td>
                <td>Tên mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.quantity</td>
                <td style="text-align: center">Int64</td>
                <td>Số lượng mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.sub_fee</td>
                <td style="text-align: center">Float64</td>
                <td>Phụ phí</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.total</td>
                <td style="text-align: center">Float64</td>
                <td>Tổng tiền sau thuế của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.price</td>
                <td style="text-align: center">Float64</td>
                <td>Đơn giá của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.amount</td>
                <td style="text-align: center">Float64</td>
                <td>Tổng tiền trước thuế của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.created_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian tạo mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.updated_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian cập nhật mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.created_by</td>
                <td style="text-align: center">String</td>
                <td>Người tạo mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.updated_by</td>
                <td style="text-align: center">String</td>
                <td>Người cập nhật mặt hàng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="i44" id="i44">
        <h3 class="title">Response ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json">{
    <span class="hljs-attr">"success"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"id"</span>: <span class="hljs-string">"01ET7X014BPJ3JAX6VBQR8KVEV"</span>,
        <span class="hljs-attr">"channel_id"</span>: <span class="hljs-string">"2B244B849F9B"</span>,
        <span class="hljs-attr">"sid"</span>: <span class="hljs-string">"GINV.S1140612.1608730543"</span>,
        <span class="hljs-attr">"sec"</span>: <span class="hljs-string">"1RVK36JYF8"</span>,
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"canceled"</span>,
        <span class="hljs-attr">"type"</span>: <span class="hljs-string">"01GTKT"</span>,
        <span class="hljs-attr">"serial"</span>: <span class="hljs-string">"AA/21E"</span>,
        <span class="hljs-attr">"seq"</span>: <span class="hljs-string">"0000055"</span>,
        <span class="hljs-attr">"idt"</span>: <span class="hljs-string">"2020-12-23"</span>,
        <span class="hljs-attr">"form"</span>: <span class="hljs-string">"01GTKT0/002"</span>,
        <span class="hljs-attr">"payment_method"</span>: <span class="hljs-string">"CK"</span>,
        <span class="hljs-attr">"shop_id"</span>: <span class="hljs-string">"5b46e665-9694-4fda-8ad8-73b80a0a0269"</span>,
        <span class="hljs-attr">"amount"</span>: <span class="hljs-number">251700</span>,
        <span class="hljs-attr">"vat_amount"</span>: <span class="hljs-number">7190</span>,
        <span class="hljs-attr">"total"</span>: <span class="hljs-number">258890</span>,
        <span class="hljs-attr">"words"</span>: <span class="hljs-string">"hai trăm năm mươi tám nghìn tám trăm chín mươi"</span>,
        <span class="hljs-attr">"curr"</span>: <span class="hljs-string">"VND"</span>,
        <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>,
        <span class="hljs-attr">"updated_by"</span>: <span class="hljs-string">"vuhk1"</span>,
        <span class="hljs-attr">"shop_name"</span>: <span class="hljs-string">"Công Ty TNHH Sản Xuất Thương Mại Bingo"</span>,
        <span class="hljs-attr">"shop_code"</span>: <span class="hljs-string">"S1140612"</span>,
        <span class="hljs-attr">"shop_tax_code"</span>: <span class="hljs-string">"0314709887"</span>,
        <span class="hljs-attr">"cancel_reasons"</span>: [
            {
                <span class="hljs-attr">"reason"</span>: <span class="hljs-string">"test"</span>,
                <span class="hljs-attr">"reference"</span>: <span class="hljs-string">"12121212"</span>,
                <span class="hljs-attr">"description"</span>: <span class="hljs-string">"123"</span>,
                <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>
            }
        ],
        <span class="hljs-attr">"created_at"</span>: <span class="hljs-number">1608730543</span>,
        <span class="hljs-attr">"updated_at"</span>: <span class="hljs-number">1608733220</span>,
        <span class="hljs-attr">"from"</span>: <span class="hljs-number">1606995015</span>,
        <span class="hljs-attr">"to"</span>: <span class="hljs-number">1607126400</span>,
        <span class="hljs-attr">"line_items"</span>: [
            {
                <span class="hljs-attr">"id"</span>: <span class="hljs-string">"01ET7X014DF7NEQ80AF4BS7Y7B"</span>,
                <span class="hljs-attr">"invoice_id"</span>: <span class="hljs-string">"01ET7X014BPJ3JAX6VBQR8KVEV"</span>,
                <span class="hljs-attr">"status"</span>: <span class="hljs-string">"active"</span>,
                <span class="hljs-attr">"vat"</span>: <span class="hljs-string">"0"</span>,
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"item 1"</span>,
                <span class="hljs-attr">"quantity"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"sub_fee"</span>: <span class="hljs-number">11000</span>,
                <span class="hljs-attr">"total"</span>: <span class="hljs-number">107900</span>,
                <span class="hljs-attr">"price"</span>: <span class="hljs-number">96900</span>,
                <span class="hljs-attr">"amount"</span>: <span class="hljs-number">107900</span>,
                <span class="hljs-attr">"created_at"</span>: <span class="hljs-number">1608730543</span>,
                <span class="hljs-attr">"updated_at"</span>: <span class="hljs-number">1608730543</span>,
                <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>
            },
            {
                <span class="hljs-attr">"id"</span>: <span class="hljs-string">"01ET7X014DSYES9H8JBF1D10M1"</span>,
                <span class="hljs-attr">"invoice_id"</span>: <span class="hljs-string">"01ET7X014BPJ3JAX6VBQR8KVEV"</span>,
                <span class="hljs-attr">"status"</span>: <span class="hljs-string">"active"</span>,
                <span class="hljs-attr">"vat"</span>: <span class="hljs-string">"5"</span>,
                <span class="hljs-attr">"vat_amount"</span>: <span class="hljs-number">7190</span>,
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"item 2"</span>,
                <span class="hljs-attr">"quantity"</span>: <span class="hljs-number">7</span>,
                <span class="hljs-attr">"sub_fee"</span>: <span class="hljs-number">22000</span>,
                <span class="hljs-attr">"total"</span>: <span class="hljs-number">150990</span>,
                <span class="hljs-attr">"price"</span>: <span class="hljs-number">17400</span>,
                <span class="hljs-attr">"amount"</span>: <span class="hljs-number">143800</span>,
                <span class="hljs-attr">"created_at"</span>: <span class="hljs-number">1608730543</span>,
                <span class="hljs-attr">"updated_at"</span>: <span class="hljs-number">1608730543</span>,
                <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>
            }
        ]
    }
}
</code></pre>
        </div>
      </div>
    </div>

    <div class="i5" v-bind:class="{ 'display-block': activeContent === '25' }">
      <div>
        <h2>Update</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="i51" id="i51">
        <h3 class="title">URL</h3>
        <div class="title-sub">
          <blockquote>
            <p>{<strong>host</strong>}/api/v1/invoices/{id}</p>
          </blockquote>
        </div>
      </div>

      <div class="i52" id="i52">
        <h3 class="title">Tham số của data</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th style="text-align: center">Bắt buộc (Y/N)</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>ID của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">status</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>
                  Trạng thái hóa đơn (draft, pending, confirmed, expired,
                  canceled, released)
                </td>
              </tr>
              <tr>
                <td style="text-align: center">payment_method</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Phương thức thanh toán (TM, CK, TM/CK, DTCN, KTT)</td>
              </tr>
              <tr>
                <td style="text-align: center">type</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">N</td>
                <td>Loại hóa đơn (01GTKT, 02GTTT, 03XKNB)</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.id</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y/N</td>
                <td>
                  ID của mặt hàng (Y: update mặt hàng, N: thêm mới mặt hàng)
                </td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.status</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y/N</td>
                <td>
                  Trạng thái của mặt hàng (Y: update mặt hàng, N: thêm mới mặt
                  hàng)
                </td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.name</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Tên mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.type</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">N</td>
                <td>Loại mặt hàng (TM, CK, KM)</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.vat</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Mức thuế suất của mặt hàng (0, 5, 10, -1, -2)</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.quantity</td>
                <td style="text-align: center">Int64</td>
                <td style="text-align: center">Y</td>
                <td>Số lượng mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.sub_fee</td>
                <td style="text-align: center">Float64</td>
                <td style="text-align: center">Y</td>
                <td>Phụ phí</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.price</td>
                <td style="text-align: center">Float64</td>
                <td style="text-align: center">Y</td>
                <td>Đơn giá mặt hàng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="i53" id="i53">
        <h3 class="title">Note</h3>
        <div class="title-sub">
          <ul>
            <li>
              Chặn update hóa đơn khi trạng thái hóa đơn là
              canceled/expired/released
            </li>
            <li>
              Chặn update status về giá trị trước đó. Thứ tự status hóa đơn:
              draft -&gt; pending -&gt; confirmed -&gt;
              expired/canceled/released
            </li>
          </ul>
        </div>
      </div>

      <div class="i54" id="i54">
        <h3 class="title">Request data ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json"><span class="hljs-comment">#PATCH</span>
- Authorization (<span class="hljs-keyword">Bearer </span>Token): <span class="hljs-string">"eyJhbGciOiJFUzI1NiIsImtpZCI6IjAxRUhWRVI4SlZYNVpHQzQwNEtHM0s0VkRLXzE1OTk3MjMwMjAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoIiwiZXhwIjoxNjA4Mjg2NDMzLCJqdGkiOiIwMUVTU1NaWkNKRVFaWUdOQVBQTUhEQVMxRCIsImlhdCI6MTYwODI1NzYzMywiaXNzIjoiaHR0cHM6Ly9hdXRoLmdodGtsYWIuY29tIiwic3ViIjoiMDFFUURBR1IzRUJTM1FBMUgyVlFLUFNUV0oiLCJzY3AiOlsib2ZmbGluZV9hY2Nlc3MiLCJvcGVuaWQiXSwic2lkIjoiR0JwUXN1STI3a3ZENUZrdG5xamxKTFFSVmpmUk5wOG0iLCJjbGllbnRfaWQiOiIwMUVIVkVSOEpWWDVaR0M0MDRLRzNLNFZESyJ9.7l1bCrCHQMkTlJue5uWPt4F5bRkUR-qdgLouaCyPvZBLmdzzZyWAlEJQ9-ez09t80ZK2Dj27p2issIYGzR8plA"</span>
- <span class="hljs-keyword">Body
</span>{
    <span class="hljs-string">"status"</span>: <span class="hljs-string">"pending"</span>,
    <span class="hljs-string">"payment_method"</span>: <span class="hljs-string">"CK"</span>,
    <span class="hljs-string">"type"</span>: <span class="hljs-string">"01GHKT"</span>,
    <span class="hljs-string">"from"</span>: <span class="hljs-number">1608631007</span>,
    <span class="hljs-string">"to"</span>: <span class="hljs-number">1608696613</span>,
    <span class="hljs-string">"line_items"</span>: [
        {
            <span class="hljs-string">"id"</span>: <span class="hljs-string">"01ET9CCAK4KCJG81WTFZ8CFRR3"</span>,
            <span class="hljs-string">"status"</span>: <span class="hljs-string">"inactive"</span>,
            <span class="hljs-string">"vat"</span>: <span class="hljs-string">"5"</span>,
            <span class="hljs-string">"name"</span>: <span class="hljs-string">"item 1"</span>,
            <span class="hljs-string">"quantity"</span>: <span class="hljs-number">1</span>,
            <span class="hljs-string">"sub_fee"</span>: <span class="hljs-number">2000</span>,
            <span class="hljs-string">"price"</span>: <span class="hljs-number">120000</span>
        },
        {
            <span class="hljs-string">"vat"</span>: <span class="hljs-string">"10"</span>,
            <span class="hljs-string">"name"</span>: <span class="hljs-string">"item 2"</span>,
            <span class="hljs-string">"quantity"</span>: <span class="hljs-number">1</span>,
            <span class="hljs-string">"sub_fee"</span>: <span class="hljs-number">234000</span>,
            <span class="hljs-string">"price"</span>: <span class="hljs-number">12320000</span>
        }
    ]
}
</code></pre>
        </div>
      </div>

      <div class="i55" id="i55">
        <h3 class="title">Tham số của response</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">success</td>
                <td style="text-align: center">Boolean</td>
                <td>Request thành công hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">String</td>
                <td>ID của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">channel_id</td>
                <td style="text-align: center">String</td>
                <td>ID của kênh Gchat</td>
              </tr>
              <tr>
                <td style="text-align: center">sid</td>
                <td style="text-align: center">String</td>
                <td>ID của hóa đơn trên hệ thống FPT</td>
              </tr>
              <tr>
                <td style="text-align: center">sec</td>
                <td style="text-align: center">String</td>
                <td>Mã tra cứu của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">serial</td>
                <td style="text-align: center">String</td>
                <td>Ký hiệu hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">seq</td>
                <td style="text-align: center">String</td>
                <td>Số hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">idt</td>
                <td style="text-align: center">String</td>
                <td>Ngày lập hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">status</td>
                <td style="text-align: center">String</td>
                <td>Trạng thái của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">type</td>
                <td style="text-align: center">String</td>
                <td>Loại hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">form</td>
                <td style="text-align: center">String</td>
                <td>Template hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">payment_method</td>
                <td style="text-align: center">String</td>
                <td>Phương thức thanh toán</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">amount</td>
                <td style="text-align: center">Float64</td>
                <td>Số tiền trước thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">vat_amount</td>
                <td style="text-align: center">Float64</td>
                <td>Số tiền thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">total</td>
                <td style="text-align: center">Float64</td>
                <td>Tổng số tiền sau thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">words</td>
                <td style="text-align: center">String</td>
                <td>Số tiền bằng chữ</td>
              </tr>
              <tr>
                <td style="text-align: center">curr</td>
                <td style="text-align: center">String</td>
                <td>Đơn vị tiền</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_name</td>
                <td style="text-align: center">String</td>
                <td>Tên shop</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_code</td>
                <td style="text-align: center">String</td>
                <td>Mã shop</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_tax_code</td>
                <td style="text-align: center">String</td>
                <td>Mã số thuế của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">created_at</td>
                <td style="text-align: center">Int64</td>
                <td>Thời gian tạo hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_at</td>
                <td style="text-align: center">Int64</td>
                <td>Thời gian cập nhật hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">created_by</td>
                <td style="text-align: center">Int64</td>
                <td>Người tạo hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_by</td>
                <td style="text-align: center">Int64</td>
                <td>Người cập nhật hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">from</td>
                <td style="text-align: center">Int64</td>
                <td>Xuất hóa đơn từ thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">to</td>
                <td style="text-align: center">Int64</td>
                <td>Xuất hóa đơn đến thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.id</td>
                <td style="text-align: center">String</td>
                <td>ID của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.invoice_id</td>
                <td style="text-align: center">String</td>
                <td>ID của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.status</td>
                <td style="text-align: center">String</td>
                <td>Trạng thái của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.type</td>
                <td style="text-align: center">String</td>
                <td>Loại mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.vat</td>
                <td style="text-align: center">String</td>
                <td>Mức thuế suất của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.vat_amount</td>
                <td style="text-align: center">Float64</td>
                <td>Số tiền thuế của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.name</td>
                <td style="text-align: center">String</td>
                <td>Tên mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.quantity</td>
                <td style="text-align: center">Int64</td>
                <td>Số lượng mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.sub_fee</td>
                <td style="text-align: center">Float64</td>
                <td>Phụ phí</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.total</td>
                <td style="text-align: center">Float64</td>
                <td>Tổng tiền sau thuế của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.price</td>
                <td style="text-align: center">Float64</td>
                <td>Đơn giá của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.amount</td>
                <td style="text-align: center">Float64</td>
                <td>Tổng tiền trước thuế của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.created_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian tạo mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.updated_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian cập nhật mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.created_by</td>
                <td style="text-align: center">String</td>
                <td>Người tạo mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.updated_by</td>
                <td style="text-align: center">String</td>
                <td>Người cập nhật mặt hàng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="i56" id="i56">
        <h3 class="title">Reponse ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json">{
    <span class="hljs-attr">"success"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"id"</span>: <span class="hljs-string">"01ET9CCAK1J53CDZWW574HETR9"</span>,
        <span class="hljs-attr">"channel_id"</span>: <span class="hljs-string">"EA2864B1502D"</span>,
        <span class="hljs-attr">"sid"</span>: <span class="hljs-string">"GINV.S17016010.1608780229"</span>,
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"pending"</span>,
        <span class="hljs-attr">"type"</span>: <span class="hljs-string">"01GTKT"</span>,
        <span class="hljs-attr">"form"</span>: <span class="hljs-string">"01GTKT0/002"</span>,
        <span class="hljs-attr">"payment_method"</span>: <span class="hljs-string">"CK"</span>,
        <span class="hljs-attr">"shop_id"</span>: <span class="hljs-string">"5f74535e-c5d0-4d4a-b4b4-4a2c0a784c19"</span>,
        <span class="hljs-attr">"amount"</span>: <span class="hljs-number">12554000</span>,
        <span class="hljs-attr">"vat_amount"</span>: <span class="hljs-number">1255400</span>,
        <span class="hljs-attr">"total"</span>: <span class="hljs-number">13809400</span>,
        <span class="hljs-attr">"words"</span>: <span class="hljs-string">"mười ba triệu tám trăm linh chín nghìn bốn trăm"</span>,
        <span class="hljs-attr">"curr"</span>: <span class="hljs-string">"VND"</span>,
        <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>,
        <span class="hljs-attr">"updated_by"</span>: <span class="hljs-string">"vuhk1"</span>,
        <span class="hljs-attr">"created_at"</span>: <span class="hljs-number">1608780229</span>,
        <span class="hljs-attr">"updated_at"</span>: <span class="hljs-number">1608784296</span>,
        <span class="hljs-attr">"from"</span>: <span class="hljs-number">1608624296</span>,
        <span class="hljs-attr">"to"</span>: <span class="hljs-number">1608633315</span>,
        <span class="hljs-attr">"line_items"</span>: [
            {
                <span class="hljs-attr">"id"</span>: <span class="hljs-string">"01ET9CCAK4KCJG81WTFZ8CFRR3"</span>,
                <span class="hljs-attr">"invoice_id"</span>: <span class="hljs-string">"01ET9CCAK1J53CDZWW574HETR9"</span>,
                <span class="hljs-attr">"status"</span>: <span class="hljs-string">"inactive"</span>,
                <span class="hljs-attr">"vat"</span>: <span class="hljs-string">"5"</span>,
                <span class="hljs-attr">"vat_amount"</span>: <span class="hljs-number">6100</span>,
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"item 1"</span>,
                <span class="hljs-attr">"quantity"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"sub_fee"</span>: <span class="hljs-number">2000</span>,
                <span class="hljs-attr">"total"</span>: <span class="hljs-number">128100</span>,
                <span class="hljs-attr">"price"</span>: <span class="hljs-number">120000</span>,
                <span class="hljs-attr">"amount"</span>: <span class="hljs-number">122000</span>,
                <span class="hljs-attr">"created_at"</span>: <span class="hljs-number">1608780229</span>,
                <span class="hljs-attr">"updated_at"</span>: <span class="hljs-number">1608784296</span>,
                <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>,
                <span class="hljs-attr">"updated_by"</span>: <span class="hljs-string">"vuhk1"</span>
            },
            {
                <span class="hljs-attr">"id"</span>: <span class="hljs-string">"01ET9G8E4H8NGPKAMRFM5E3CRA"</span>,
                <span class="hljs-attr">"invoice_id"</span>: <span class="hljs-string">"01ET9CCAK1J53CDZWW574HETR9"</span>,
                <span class="hljs-attr">"status"</span>: <span class="hljs-string">"active"</span>,
                <span class="hljs-attr">"vat"</span>: <span class="hljs-string">"10"</span>,
                <span class="hljs-attr">"vat_amount"</span>: <span class="hljs-number">1255400</span>,
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"item 2"</span>,
                <span class="hljs-attr">"quantity"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"sub_fee"</span>: <span class="hljs-number">234000</span>,
                <span class="hljs-attr">"total"</span>: <span class="hljs-number">13809400</span>,
                <span class="hljs-attr">"price"</span>: <span class="hljs-number">12320000</span>,
                <span class="hljs-attr">"amount"</span>: <span class="hljs-number">12554000</span>,
                <span class="hljs-attr">"created_at"</span>: <span class="hljs-number">1608784296</span>,
                <span class="hljs-attr">"updated_at"</span>: <span class="hljs-number">1608784296</span>,
                <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>
            }
        ]
    }
}
</code></pre>
        </div>
      </div>
    </div>

    <div class="i6" v-bind:class="{ 'display-block': activeContent === '26' }">
      <div>
        <h2>Approve</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="i61" id="i61">
        <h3 class="title">URL</h3>
        <div class="title-sub">
          <blockquote>
            <p>{<strong>host</strong>}/api/v1/invoices/{id}/approve</p>
          </blockquote>
        </div>
      </div>

      <div class="i62" id="i62">
        <h3 class="title">Tham số của data</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th style="text-align: center">Bắt buộc (Y/N)</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>ID của hóa đơn</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="i63" id="i63">
        <h3 class="title">Request data ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json"><span class="hljs-attr">#PATCH
- Authorization (Bearer Token): "eyJhbGciOiJFUzI1</span><span class="hljs-symbol">NiIsImtpZCI6</span>IjAxRUhWRVI<span class="hljs-number">4</span>SlZY<span class="hljs-symbol">NVpHQzQwNEtHM0</span>s<span class="hljs-number">0</span>VkRLXzE<span class="hljs-number">1</span>OTk<span class="hljs-number">3</span>MjMwMjAiLCJ<span class="hljs-number">0</span>eXAiOiJKV<span class="hljs-number">1</span>QifQ.eyJhdWQiOiJhdXRoIiwiZXhwIjox<span class="hljs-symbol">NjA4</span>Mj<span class="hljs-name">g2</span><span class="hljs-symbol">NDMzLCJqdGkiOiIwMUVTU1</span><span class="hljs-symbol">NaWkNKRVFaWUdOQVBQTUhEQVMxRCIsImlhdCI6</span>MTYwODI<span class="hljs-number">1</span><span class="hljs-symbol">NzYzMywiaXNzIjoiaHR0</span>cH<span class="hljs-name">M6</span>Ly<span class="hljs-number">9</span>hdXRoLmdodGtsYWIuY<span class="hljs-number">29</span>tIiwic<span class="hljs-number">3</span>ViIjoiMDFFUURBR<span class="hljs-number">1</span>IzRUJT<span class="hljs-name">M1</span>FBMUgyVlFLUF<span class="hljs-symbol">NUV0</span>oiLCJzY<span class="hljs-number">3</span>AiOlsib<span class="hljs-number">2</span>ZmbGluZV<span class="hljs-number">9</span>hY<span class="hljs-number">2</span><span class="hljs-symbol">Nlc3</span>MiLCJ<span class="hljs-attr">vcGVuaWQiXSwic2</span>lkIjoiR<span class="hljs-number">0</span>JwUX<span class="hljs-symbol">N1</span>STI<span class="hljs-number">3</span>a<span class="hljs-number">3</span>ZE<span class="hljs-symbol">NUZrdG5</span>xamxKTFFSVmpmUk<span class="hljs-number">5</span>wO<span class="hljs-name">G0</span>iLCJjbGllb<span class="hljs-symbol">nRfaWQiOiIwMUVIVkVSOEpWWDVaR0</span><span class="hljs-name">M0</span>MDRLRz<span class="hljs-symbol">NLNFZESyJ9</span><span class="hljs-number">.7</span>l<span class="hljs-number">1</span>bCrCHQMkTlJue<span class="hljs-number">5</span>uWPt<span class="hljs-number">4</span>F<span class="hljs-number">5</span>bRkUR-qdgLouaCyPvZBLmdzzZyWAlEJQ<span class="hljs-number">9</span>-ez<span class="hljs-number">09</span>t<span class="hljs-number">80</span>ZK<span class="hljs-number">2</span>Dj<span class="hljs-number">27</span>p<span class="hljs-number">2</span>issIYGzR<span class="hljs-number">8</span>plA<span class="hljs-string">"
- URL: {host}/api/v1/invoices/{01ET9TD64MYFC4SV91BGS75KPP}/approve</span>
</code></pre>
        </div>
      </div>

      <div class="i64" id="i64">
        <h3 class="title">Tham số của response</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">success</td>
                <td style="text-align: center">Boolean</td>
                <td>Request thành công hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">String</td>
                <td>ID của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">channel_id</td>
                <td style="text-align: center">String</td>
                <td>ID của kênh Gchat</td>
              </tr>
              <tr>
                <td style="text-align: center">sid</td>
                <td style="text-align: center">String</td>
                <td>ID của hóa đơn trên hệ thống FPT</td>
              </tr>
              <tr>
                <td style="text-align: center">sec</td>
                <td style="text-align: center">String</td>
                <td>Mã tra cứu của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">serial</td>
                <td style="text-align: center">String</td>
                <td>Ký hiệu hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">seq</td>
                <td style="text-align: center">String</td>
                <td>Số hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">idt</td>
                <td style="text-align: center">String</td>
                <td>Ngày lập hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">status</td>
                <td style="text-align: center">String</td>
                <td>Trạng thái của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">type</td>
                <td style="text-align: center">String</td>
                <td>Loại hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">form</td>
                <td style="text-align: center">String</td>
                <td>Template hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">payment_method</td>
                <td style="text-align: center">String</td>
                <td>Phương thức thanh toán</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_id</td>
                <td style="text-align: center">String</td>
                <td>ID của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">amount</td>
                <td style="text-align: center">Float64</td>
                <td>Số tiền trước thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">vat_amount</td>
                <td style="text-align: center">Float64</td>
                <td>Số tiền thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">total</td>
                <td style="text-align: center">Float64</td>
                <td>Tổng số tiền sau thuế</td>
              </tr>
              <tr>
                <td style="text-align: center">words</td>
                <td style="text-align: center">String</td>
                <td>Số tiền bằng chữ</td>
              </tr>
              <tr>
                <td style="text-align: center">curr</td>
                <td style="text-align: center">String</td>
                <td>Đơn vị tiền</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_name</td>
                <td style="text-align: center">String</td>
                <td>Tên shop</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_code</td>
                <td style="text-align: center">String</td>
                <td>Mã shop</td>
              </tr>
              <tr>
                <td style="text-align: center">shop_tax_code</td>
                <td style="text-align: center">String</td>
                <td>Mã số thuế của shop</td>
              </tr>
              <tr>
                <td style="text-align: center">cancel_resason.reason</td>
                <td style="text-align: center">String</td>
                <td>Lý do hủy hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">cancel_resason.reference</td>
                <td style="text-align: center">String</td>
                <td>Số chứng từ liên quan</td>
              </tr>
              <tr>
                <td style="text-align: center">cancel_resason.description</td>
                <td style="text-align: center">String</td>
                <td>Chi tiết lý do hủy hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">cancel_resason.created_by</td>
                <td style="text-align: center">String</td>
                <td>Người hủy hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">created_at</td>
                <td style="text-align: center">Int64</td>
                <td>Thời gian tạo hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_at</td>
                <td style="text-align: center">Int64</td>
                <td>Thời gian cập nhật hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">created_by</td>
                <td style="text-align: center">Int64</td>
                <td>Người tạo hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">updated_by</td>
                <td style="text-align: center">Int64</td>
                <td>Người cập nhật hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">from</td>
                <td style="text-align: center">Int64</td>
                <td>Xuất hóa đơn từ thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">to</td>
                <td style="text-align: center">Int64</td>
                <td>Xuất hóa đơn đến thời điểm</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.id</td>
                <td style="text-align: center">String</td>
                <td>ID của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.invoice_id</td>
                <td style="text-align: center">String</td>
                <td>ID của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.status</td>
                <td style="text-align: center">String</td>
                <td>Trạng thái của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.type</td>
                <td style="text-align: center">String</td>
                <td>Loại mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.vat</td>
                <td style="text-align: center">String</td>
                <td>Mức thuế suất của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.vat_amount</td>
                <td style="text-align: center">Float64</td>
                <td>Số tiền thuế của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.name</td>
                <td style="text-align: center">String</td>
                <td>Tên mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.quantity</td>
                <td style="text-align: center">Int64</td>
                <td>Số lượng mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.sub_fee</td>
                <td style="text-align: center">Float64</td>
                <td>Phụ phí</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.total</td>
                <td style="text-align: center">Float64</td>
                <td>Tổng tiền sau thuế của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.price</td>
                <td style="text-align: center">Float64</td>
                <td>Đơn giá của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.amount</td>
                <td style="text-align: center">Float64</td>
                <td>Tổng tiền trước thuế của mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.created_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian tạo mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.updated_at</td>
                <td style="text-align: center">String</td>
                <td>Thời gian cập nhật mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.created_by</td>
                <td style="text-align: center">String</td>
                <td>Người tạo mặt hàng</td>
              </tr>
              <tr>
                <td style="text-align: center">line_items.updated_by</td>
                <td style="text-align: center">String</td>
                <td>Người cập nhật mặt hàng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="i65" id="i65">
        <h3 class="title">Response ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json">{
    <span class="hljs-attr">"success"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"id"</span>: <span class="hljs-string">"01ET9TD64MYFC4SV91BGS75KPP"</span>,
        <span class="hljs-attr">"channel_id"</span>: <span class="hljs-string">"CA46B3ABD17D"</span>,
        <span class="hljs-attr">"sid"</span>: <span class="hljs-string">"GINV.S1140612.1608794937"</span>,
        <span class="hljs-attr">"sec"</span>: <span class="hljs-string">"2Y0Y0WLBRX"</span>,
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"released"</span>,
        <span class="hljs-attr">"type"</span>: <span class="hljs-string">"01GTKT"</span>,
        <span class="hljs-attr">"serial"</span>: <span class="hljs-string">"AA/21E"</span>,
        <span class="hljs-attr">"seq"</span>: <span class="hljs-string">"0000056"</span>,
        <span class="hljs-attr">"idt"</span>: <span class="hljs-string">"2020-12-24"</span>,
        <span class="hljs-attr">"form"</span>: <span class="hljs-string">"01GTKT0/002"</span>,
        <span class="hljs-attr">"payment_method"</span>: <span class="hljs-string">"TM/CK"</span>,
        <span class="hljs-attr">"shop_id"</span>: <span class="hljs-string">"5b46e665-9694-4fda-8ad8-73b80a0a0269"</span>,
        <span class="hljs-attr">"amount"</span>: <span class="hljs-number">140000</span>,
        <span class="hljs-attr">"vat_amount"</span>: <span class="hljs-number">7000</span>,
        <span class="hljs-attr">"total"</span>: <span class="hljs-number">147000</span>,
        <span class="hljs-attr">"words"</span>: <span class="hljs-string">"một trăm bốn mươi bảy nghìn"</span>,
        <span class="hljs-attr">"curr"</span>: <span class="hljs-string">"VND"</span>,
        <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>,
        <span class="hljs-attr">"updated_by"</span>: <span class="hljs-string">"vuhk1"</span>,
        <span class="hljs-attr">"shop_name"</span>: <span class="hljs-string">"Công Ty TNHH Sản Xuất Thương Mại Bingo"</span>,
        <span class="hljs-attr">"shop_code"</span>: <span class="hljs-string">"S1140612"</span>,
        <span class="hljs-attr">"shop_tax_code"</span>: <span class="hljs-string">"0314709887"</span>,
        <span class="hljs-attr">"created_at"</span>: <span class="hljs-number">1608794937</span>,
        <span class="hljs-attr">"updated_at"</span>: <span class="hljs-number">1608797301</span>,
        <span class="hljs-attr">"from"</span>: <span class="hljs-number">1608644543</span>,
        <span class="hljs-attr">"to"</span>: <span class="hljs-number">1608644551</span>,
        <span class="hljs-attr">"line_items"</span>: [
            {
                <span class="hljs-attr">"id"</span>: <span class="hljs-string">"01ET9TD64NA7HPJXPNF3RYX6G2"</span>,
                <span class="hljs-attr">"invoice_id"</span>: <span class="hljs-string">"01ET9TD64MYFC4SV91BGS75KPP"</span>,
                <span class="hljs-attr">"status"</span>: <span class="hljs-string">"active"</span>,
                <span class="hljs-attr">"vat"</span>: <span class="hljs-string">"5"</span>,
                <span class="hljs-attr">"vat_amount"</span>: <span class="hljs-number">7000</span>,
                <span class="hljs-attr">"name"</span>: <span class="hljs-string">"Cước vận chuyển"</span>,
                <span class="hljs-attr">"quantity"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"sub_fee"</span>: <span class="hljs-number">20000</span>,
                <span class="hljs-attr">"total"</span>: <span class="hljs-number">147000</span>,
                <span class="hljs-attr">"price"</span>: <span class="hljs-number">120000</span>,
                <span class="hljs-attr">"amount"</span>: <span class="hljs-number">140000</span>,
                <span class="hljs-attr">"created_at"</span>: <span class="hljs-number">1608794937</span>,
                <span class="hljs-attr">"updated_at"</span>: <span class="hljs-number">1608794937</span>,
                <span class="hljs-attr">"created_by"</span>: <span class="hljs-string">"vuhk1"</span>
            }
        ]
    }
}
</code></pre>
        </div>
      </div>
    </div>

    <div class="i7" v-bind:class="{ 'display-block': activeContent === '27' }">
      <div>
        <h2>Cancel</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="i71" id="i71">
        <h3 class="title">URL</h3>
        <div class="title-sub">
          <blockquote>
            <p>{<strong>host</strong>}/api/v1/invoices/{id}/cancel</p>
          </blockquote>
        </div>
      </div>

      <div class="i72" id="i72">
        <h3 class="title">Tham số của data</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th style="text-align: center">Bắt buộc (Y/N)</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>ID của hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">reason</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Lý do hủy hóa đơn</td>
              </tr>
              <tr>
                <td style="text-align: center">reference</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Số chứng từ liên quan</td>
              </tr>
              <tr>
                <td style="text-align: center">description</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>Mô tả</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="i73" id="i73">
        <h3 class="title">Note</h3>
        <div class="title-sub">
          <ul>
            <li><em>Chỉ cancel những hóa đơn đã phát hành</em></li>
          </ul>
        </div>
      </div>

      <div class="i74" id="i74">
        <h3 class="title">Request data ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json"><span class="hljs-symbol">#PATCH</span>
- Authorization (<span class="hljs-keyword">Bearer </span>Token): <span class="hljs-string">"eyJhbGciOiJFUzI1NiIsImtpZCI6IjAxRUhWRVI4SlZYNVpHQzQwNEtHM0s0VkRLXzE1OTk3MjMwMjAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoIiwiZXhwIjoxNjA4Mjg2NDMzLCJqdGkiOiIwMUVTU1NaWkNKRVFaWUdOQVBQTUhEQVMxRCIsImlhdCI6MTYwODI1NzYzMywiaXNzIjoiaHR0cHM6Ly9hdXRoLmdodGtsYWIuY29tIiwic3ViIjoiMDFFUURBR1IzRUJTM1FBMUgyVlFLUFNUV0oiLCJzY3AiOlsib2ZmbGluZV9hY2Nlc3MiLCJvcGVuaWQiXSwic2lkIjoiR0JwUXN1STI3a3ZENUZrdG5xamxKTFFSVmpmUk5wOG0iLCJjbGllbnRfaWQiOiIwMUVIVkVSOEpWWDVaR0M0MDRLRzNLNFZESyJ9.7l1bCrCHQMkTlJue5uWPt4F5bRkUR-qdgLouaCyPvZBLmdzzZyWAlEJQ9-ez09t80ZK2Dj27p2issIYGzR8plA"</span>
- URL: {host}/api/<span class="hljs-built_in">v1</span>/invoices/{<span class="hljs-number">01</span>ET9TD64MYFC4SV91BGS75KPP}/approve
- <span class="hljs-keyword">Body:
</span>{
    <span class="hljs-string">"reasons"</span>: [
        {
            <span class="hljs-string">"reason"</span>: <span class="hljs-string">"test"</span>,
            <span class="hljs-string">"reference"</span>: <span class="hljs-string">"12121212"</span>,
            <span class="hljs-string">"description"</span>: <span class="hljs-string">"test"</span>
        }
    ]
}
</code></pre>
        </div>
      </div>

      <div class="i75" id="i75">
        <h3 class="title">Tham số của response</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">success</td>
                <td style="text-align: center">Boolean</td>
                <td>Request thành công hay không</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="i76" id="i76">
        <h3 class="title">Reponse ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json">{
    <span class="hljs-attr">"success"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
        </div>
      </div>
    </div>

    <div class="i8" v-bind:class="{ 'display-block': activeContent === '28' }">
      <div>
        <h2>API View File PDF</h2>
        <div class="logo-ghtk">
          Hệ thống Hóa đơn thuộc sở hữu của
          <img src="public/assets/ghtk.png" alt="" />
        </div>
      </div>

      <div class="i81" id="i81">
        <h3 class="title">URL</h3>
        <div class="title-sub">
          <blockquote>
            <p>{<strong>host</strong>}/api/v1/invoices/{id}/pdf</p>
          </blockquote>
        </div>
      </div>

      <div class="i82" id="i82">
        <h3 class="title">Tham số của data</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th style="text-align: center">Bắt buộc (Y/N)</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">id</td>
                <td style="text-align: center">String</td>
                <td style="text-align: center">Y</td>
                <td>ID của hóa đơn</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="i83" id="i83">
        <h3 class="title">Note</h3>
        <div class="title-sub">
          <ul>
            <li><em>Chỉ có thể view những hóa đơn đã phát hành</em></li>
          </ul>
        </div>
      </div>

      <div class="i84" id="i84">
        <h3 class="title">Request data ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json"><span class="hljs-attr">#PATCH
- Authorization (Bearer Token): "eyJhbGciOiJFUzI1</span><span class="hljs-symbol">NiIsImtpZCI6</span>IjAxRUhWRVI<span class="hljs-number">4</span>SlZY<span class="hljs-symbol">NVpHQzQwNEtHM0</span>s<span class="hljs-number">0</span>VkRLXzE<span class="hljs-number">1</span>OTk<span class="hljs-number">3</span>MjMwMjAiLCJ<span class="hljs-number">0</span>eXAiOiJKV<span class="hljs-number">1</span>QifQ.eyJhdWQiOiJhdXRoIiwiZXhwIjox<span class="hljs-symbol">NjA4</span>Mj<span class="hljs-name">g2</span><span class="hljs-symbol">NDMzLCJqdGkiOiIwMUVTU1</span><span class="hljs-symbol">NaWkNKRVFaWUdOQVBQTUhEQVMxRCIsImlhdCI6</span>MTYwODI<span class="hljs-number">1</span><span class="hljs-symbol">NzYzMywiaXNzIjoiaHR0</span>cH<span class="hljs-name">M6</span>Ly<span class="hljs-number">9</span>hdXRoLmdodGtsYWIuY<span class="hljs-number">29</span>tIiwic<span class="hljs-number">3</span>ViIjoiMDFFUURBR<span class="hljs-number">1</span>IzRUJT<span class="hljs-name">M1</span>FBMUgyVlFLUF<span class="hljs-symbol">NUV0</span>oiLCJzY<span class="hljs-number">3</span>AiOlsib<span class="hljs-number">2</span>ZmbGluZV<span class="hljs-number">9</span>hY<span class="hljs-number">2</span><span class="hljs-symbol">Nlc3</span>MiLCJ<span class="hljs-attr">vcGVuaWQiXSwic2</span>lkIjoiR<span class="hljs-number">0</span>JwUX<span class="hljs-symbol">N1</span>STI<span class="hljs-number">3</span>a<span class="hljs-number">3</span>ZE<span class="hljs-symbol">NUZrdG5</span>xamxKTFFSVmpmUk<span class="hljs-number">5</span>wO<span class="hljs-name">G0</span>iLCJjbGllb<span class="hljs-symbol">nRfaWQiOiIwMUVIVkVSOEpWWDVaR0</span><span class="hljs-name">M0</span>MDRLRz<span class="hljs-symbol">NLNFZESyJ9</span><span class="hljs-number">.7</span>l<span class="hljs-number">1</span>bCrCHQMkTlJue<span class="hljs-number">5</span>uWPt<span class="hljs-number">4</span>F<span class="hljs-number">5</span>bRkUR-qdgLouaCyPvZBLmdzzZyWAlEJQ<span class="hljs-number">9</span>-ez<span class="hljs-number">09</span>t<span class="hljs-number">80</span>ZK<span class="hljs-number">2</span>Dj<span class="hljs-number">27</span>p<span class="hljs-number">2</span>issIYGzR<span class="hljs-number">8</span>plA<span class="hljs-string">"
- URL: {host}/api/v1/invoices/{01ET9CCAK1J53CDZWW574HETR9}/pdf</span>
</code></pre>
        </div>
      </div>

      <div class="i85" id="i85">
        <h3 class="title">Tham số của response</h3>
        <div class="title-sub">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Tên</th>
                <th style="text-align: center">Kiểu dữ liệu</th>
                <th>Giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">success</td>
                <td style="text-align: center">Boolean</td>
                <td>Request thành công hay không</td>
              </tr>
              <tr>
                <td style="text-align: center">data</td>
                <td style="text-align: center">String</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="i86" id="i86">
        <h3 class="title">Reponse ví dụ</h3>
        <div class="title-sub">
          <pre><code class="lang-json">{
    <span class="hljs-attr">"success"</span>: <span class="hljs-literal">true</span>
}
</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DocumentApi",
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
.document-api > div > div {
  margin-bottom: 30px;
}

.document-api > div {
  display: none;
}

.document-api table,
td,
th {
  border: 1px solid rgb(197, 197, 197);
}

.document-api table td,
th {
  padding: 5px;
}

.document-api table th {
  color: #42b983;
  text-align: center;
}

.document-api table tr:nth-child(even) {
  background: #f6f8fa;
}

.document-api pre {
  background: #f6f8fa;
  padding: 20px;
}
</style>