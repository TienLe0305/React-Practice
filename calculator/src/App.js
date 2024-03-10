import Avatar from "./components/Avatar/Avatar.js";
import BlogPost from "./components/BlogPost/BlogPost.js";
import BookList from "./components/BookList/BookList.js";
import ButtonClick from "./components/ButtonClick/ButtonClick.js";
import Clock from "./components/Clock/Clock.js";
import CommentSection from "./components/CommentSection/CommentSection.js";
import CountdownTimer from "./components/CountDownTimer/CountDownTimer.js";
import Counter from "./components/Counter/Counter.js";
import Greeting from "./components/Greeting";
import InputChange from "./components/InputChange/InputChange.js";
import MouseHover from "./components/MouseHover/MouseHover.js";
import PersonList from "./components/PersonList/PersonList.js";
import ProductCard from "./components/ProductCard/ProductCard.js";
import ProductList from "./components/ProductList/ProductList.js";
import QuizGame from "./components/QuizGame/QuizGame.js";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.js";
import TodoList from "./components/TodoList/TodoList.js";
import ToggleButton from "./components/ToggleButton/ToggleButton.js";
import UserProfile from "./components/UserProfile/UserProfile.js";

function App() {
  const peopleList = ["Alice", "Bob", "Charlie", "David"];
  const productInfo = {
    name: "Smartphone X",
    price: 20000,
    description: "A powerful smartphone with advanced features.",
  };
  const blogPosts = [
    {
      title: "Tạo một component BlogPost bằng ReactJS 1",
      date: "January 20, 2024",
      content: "Tạo một component ReactJS có tên là BlogPost ...",
      image:
        "https://codelearnstorage.s3.amazonaws.com/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg", // Thay đổi URL của ảnh đại diện
    },
    {
      title: "Tạo một component BlogPost bằng ReactJS 2",
      date: "January 20, 2024",
      content: "Tạo một component ReactJS có tên là BlogPost ...",
      image:
        "https://codelearnstorage.s3.amazonaws.com/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg", // Thay đổi URL của ảnh đại diện
    },
  ];
  const avatarUrl =
    "https://blog.logrocket.com/wp-content/uploads/2020/11/create-avatar-feature-react.png";

  const bookArray = ["Đắc nhân tâm", "Nhà giả kim", "1984", "Đọc vị bất kì ai"];

  const userObject = {
    name: "Freetuts.net",
    email: "Freetuts.net@gmail.com",
    avatarUrl: "https://freetuts.net/public/logo/logo.png?rand=5",
  };

  const productsArray = [
    {
      name: "iPhone 15 Pro 128GB",
      price: 22990000,
      img: "data:image/jpeg;base64,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",
      description:
        "Giảm 40% tối đa 1.000.000 VNĐ cho đơn hàng từ 2.000.000 VNĐ",
    },
    {
      name: "iPhone 15 Pro ",
      price: 24990000,
      img: "data:image/jpeg;base64,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",
      description:
        "Giảm 20% tối đa 1.000.000 VNĐ cho đơn hàng từ 6.000.000 VNĐ",
    },
    {
      name: "Laptop Pro",
      price: 23990000,
      img: "data:image/jpeg;base64,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",
      description:
        "Giảm 50% tối đa 1.000.000 VNĐ cho đơn hàng từ 7.000.000 VNĐ",
    },
  ];

  const commentsArray = [
    { author: "Alice", text: "Great post!" },
    { author: "Bob", text: "I learned a lot from this." },
    { author: "Charlie", text: "Well explained." },
    // Add more comments as needed
  ];

  return (
    <div>
      {/* <Greeting name="Tien Le" />
      <PersonList peopleList={peopleList} />
      <ProductCard product={productInfo} />
      <Avatar imageUrl={avatarUrl} />
      <BlogPost listBlog={blogPosts} />
      <BookList listBook={bookArray} />
      <UserProfile userObject={userObject} />
      <ProductList products={productsArray} />
      <CommentSection comments={commentsArray} /> */}
      {/* <Counter />
      <Clock />
      <TodoList />
      <CountdownTimer />
      <QuizGame />
      <ShoppingCart /> */}
      <ButtonClick />
      <ToggleButton />
      <InputChange />
      <MouseHover />
    </div>
  );
}

export default App;
