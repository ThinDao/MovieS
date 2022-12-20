var vue = new Vue({
    el: '#app',
    data: {
        tenphim: '',
        hinhanh: '',
        theloai: '',
        mota: ''
    },
    methods: {
        kiemTraDuLieu: function (e) {
            e.preventDefault();

            if (this.tenphim == "") {
                alert('Vui lòng nhập tên phim');
            }

            if (this.hinhanh == "") {
                alert('Vui lòng nhập url hình ảnh');
            }

            if (this.theloai == "") {
                alert('Vui lòng nhập thể loại');
            }

            if (this.mota == "") {
                alert('Vui lòng nhập mô tả');
            } else if (this.mota.length < 5) { // Kiểm tra độ dài
                alert('Vui lòng nhập mô tả 5 ký tự trở lên');
            }

            this.dakiemtraloixong = true;
            return false;
        }
    }
});