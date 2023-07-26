document.querySelector('.search-button').addEventListener('click', function () {
    search();
});

document.querySelector('.search-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        search();
    }
});

function search() {
    var keyword = document.querySelector('.search-input').value;
    // Xử lý tìm kiếm dữ liệu ở đây (ví dụ: gửi yêu cầu tìm kiếm đến máy chủ, tìm trong cơ sở dữ liệu, vv.)
    alert('Bạn đang tìm kiếm: ' + keyword);
}