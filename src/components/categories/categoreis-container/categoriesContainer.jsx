import "../../categories/categories.scss";
import CategoryItems from "../categories-item/categoriesItem";
const CategoryContainer = () => {
  const categories = [
    {
      id: 1,
      title: "Denim",
      imageURL:
        "https://zed.com.pk/cdn/shop/products/050A7805.jpg?v=1680606200",
    },
    {
      id: 2,
      title: "Shirt",
      imageURL: "https://handcmediastorage.blob.core.windows.net/productimages/BF/BFDZF010-H51-177524-500px-650px.jpg",
    },
    {
      id: 3,
      title: "Pants",
      imageURL: "https://www.realmenrealstyle.com/wp-content/uploads/2021/11/cargo-pants-for-men.jpg",
    },

    {
      id: 4,
      title: "Hats",
      imageURL: "https://www.dapperconfidential.com/wp-content/uploads/2020/03/photo-of-man-wearing-sun-hat-3017918-e1614706072264.jpg.webp",
    },

    {
      id: 5,
      title: "Wallets",
      imageURL: "https://www.arzaan.pk/cdn/shop/products/213896233-1642072285_1024x1024.jpg?v=1633025811",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryContainer;
