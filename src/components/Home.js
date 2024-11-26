import React, { useState } from "react";
import "./Home.css";

function Home() {
  // State để lưu danh sách bài viết
  const [posts, setPosts] = useState([]);
  // State để lưu nội dung bài viết từ input
  const [newPost, setNewPost] = useState("");

  // Hàm xử lý đăng bài
  const handlePost = () => {
    if (newPost.trim() === "") {
      alert("Please write something before posting!"); // Kiểm tra nội dung
      return;
    }

    // Thêm bài viết mới vào danh sách
    const updatedPosts = [...posts, { id: Date.now(), content: newPost }];
    setPosts(updatedPosts);
    setNewPost(""); // Xóa nội dung input sau khi đăng
  };

  // Hàm xử lý xóa bài viết
  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id); // Loại bỏ bài viết có ID cụ thể
    setPosts(updatedPosts);
  };

  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="home-header">
        <h1>Welcome to Facebook</h1>
        <p>Connect with your friends and share moments!</p>
      </header>

      {/* Main Content */}
      <div className="home-content">
        {/* Sidebar */}
        <div className="home-sidebar">
          <ul className="sidebar-menu">
            <li className="sidebar-item">Ảnh</li>
            <li className="sidebar-item">Giới thiệu</li>
            <li className="sidebar-item">bạn bè</li>
            <li className="sidebar-item">Tin</li>
            <li className="sidebar-item">Cài Đặt</li>
          </ul>
        </div>

        {/* Feed */}
        <div className="home-feed">
          {/* Khung đăng bài */}
          <div className="post-box">
            <textarea
              className="post-input"
              placeholder="Bạn đang nghĩ gì?"
              value={newPost} // Gắn với state newPost
              onChange={(e) => setNewPost(e.target.value)} // Cập nhật state
            ></textarea>
            <button className="post-button" onClick={handlePost}>
              Đăng
            </button>
          </div>

          {/* Hiển thị danh sách bài viết */}
          {posts.length === 0 ? (
            <p className="no-posts">Chưa có bài viết.Hãy bắt đầu chia sẻ!</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="post">
                <h3 className="post-author">You</h3>
                <p className="post-content">{post.content}</p>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* Right Sidebar */}
        <div className="home-rightbar">
          <h3>Trending Topics</h3>
          <ul className="trending-list">
            <li>#ReactJS</li>
            <li>#OpenAI</li>
            <li>#WebDevelopment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
