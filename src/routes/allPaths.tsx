import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import Products from "../pages/Products/Products";

export const allPaths = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Products",
    path: "products",
    element: <Products />,
  },
  {
    name: "About us",
    path: "about-us",
    element: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "contact-us",
    element: <ContactUs />,
  },
  {
    name: "Cart",
    path: "cart",
    element: "cart",
  },
  {
    name: "Checkout",
    path: "checkout",
    element: "checkout",
  },
  {
    name: "Product Management",
    path: "product-management",
    element: <ProductManagement />,
    children: [
      {
        name: "All Products",
        path: "product-management/products",
        element: "all products",
      },
      {
        name: "Add Product",
        path: "product-management/add-product",
        element: "add products",
      },
      {
        name: "Cart items",
        path: "product-management/cart-items",
        element: "cart items",
      },
    ],
  },
];
