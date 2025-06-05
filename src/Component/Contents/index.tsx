import logo from '../../assets/logo.jpg'


const title = "FINTER SHOP"

// Contents của Header
const HEADER_CONTENT = {
    logo,
    title: title,
    searchPlaceholder: "Tìm kiếm sản phẩm...",
    login: {path: '/login', text: "Đăng nhập"},
    signup: {path: '/signup', text: "Đăng kí"},
    navLinks: [
        {
            path: '/about',
            title: 'Giới thiệu',
            icon: 'fas fa-info-circle'
        },
        {
            path: '/seller-channel',
            title: 'Kênh người bán',
            icon: 'fas fa-store'
        },
        {
            path: '/shop-information',
            title: 'Thông tin shop',
            icon: 'fas fa-address-card'
        },
        {
            path: 'https://www.facebook.com/profile.php?id=61575260197423&locale=vi_VN',
            title: 'Facebook',
            icon: 'fab fa-facebook'
        },
        {
            path: 'https://www.youtube.com/@phuonghuy_coder',
            title: 'Youtube',
            icon: 'fab fa-youtube'
        }
    ]
}

const LOGIN_CONTENT = {
  title: "Đăng nhập",
  description: "Đã đến với FINTER SHOP của chúng tôi. Chúng tôi đang phát triển...",
  usernamePlaceholder: "Tên đăng nhập...",
  passwordPlaceholder: "Mật khẩu...",
  loginButton: "Đăng nhập",
};

const FOOTER_CONTENT = {
    logo,
    title: title,
    description: "Đã đến với FINTER SHOP của chúng tôi. Tại đây, bạn có thể đặt hàng mua sắm thoải thích. Gía rất chi là hợp lý. Mua ngay kẻo hết bây giờ!",
    footerLinks: [
        {
            title: 'Giới thiệu',
            link: [
                { path: '/1', item: 'lựa chọn Số 1' },
                { path: '/2', item: 'lựa chọn Số 2' },
                { path: '/3', item: 'lựa chọn Số 3' },
            ],
            },
            {
            title: 'Tin tức',
            link: [
                { path: '/4', item: 'lựa chọn Số 4' },
                { path: '/5', item: 'lựa chọn Số 5' },
                { path: '/6', item: 'lựa chọn Số 6' },
            ],
            },
            {
            title: 'Kênh người bán',
            link: [
                { path: '/7', item: 'lựa chọn Số 7' },
                { path: '/8', item: 'lựa chọn Số 8' },
                { path: '/9', item: 'lựa chọn Số 9' },
            ],
            },
            {
            title: 'Dịch vụ',
            link: [
                { path: '/10', item: 'lựa chọn Số 10' },
                { path: '/11', item: 'lựa chọn Số 11' },
                { path: '/12', item: 'lựa chọn Số 12' },
            ],
        },
    ],
};

export { HEADER_CONTENT, LOGIN_CONTENT, FOOTER_CONTENT }