import React from 'react';

const categories = [
  {
    title: "Điện tử",
    items: ["Điện thoại", "Máy tính bảng", "Laptop", "Phụ kiện"]
  },
  {
    title: "Thời trang",
    items: ["Nam", "Nữ", "Trẻ em", "Phụ kiện"]
  },
  {
    title: "Gia dụng",
    items: ["Đồ bếp", "Điện gia dụng", "Vệ sinh", "Trang trí"]
  },
];

const Sidebar: React.FC = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block border-r-1 dark:border-gray-700 border-gray-300 w-full md:w-1/4 pr-2">
        {categories.map((category, index) => (
          <div key={index} className="pb-10">
            <h2 className="title-h2 ">{category.title}</h2>
            <ul className="flex flex-col gap-1 mt-2">
              {category.items.map((item, idx) => (
                <li key={idx} className="group btn hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300">
                  {item}
                  <i className='fas fa-arrow-right opacity-45 group-hover:opacity-100'></i>       
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Mobile Sidebar */}
      <aside className="md:hidden w-full border-b-1 border-gray-400 pb-5">
        <div className="mb-5">
          <h2 className="title-h2">Danh mục sản phẩm</h2>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {categories.flatMap(c => c.items).map((item, index) => (
            <button key={index} className="btn text-black bg-gray-300 hover:bg-gray-400">
              {item}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;