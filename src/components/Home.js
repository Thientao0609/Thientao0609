import React, { useState } from "react";
import "./Home.css";

function Home() {
  // State để lưu danh sách bài viết
  const [posts, setPosts] = useState([]);
  // State để lưu nội dung bài viết từ input
  const [newPost, setNewPost] = useState("");
  // State để lưu hình ảnh
  const [postImage, setPostImage] = useState(null);

  // Hàm xử lý đăng bài
  const handlePost = () => {
    if (newPost.trim() === "" && !postImage) {
      alert("Please write something or upload an image before posting!"); // Kiểm tra nội dung
      return;
    }

    // Thêm bài viết mới vào danh sách
    const updatedPosts = [
      ...posts,
      { id: Date.now(), content: newPost, image: postImage }
    ];
    setPosts(updatedPosts);
    setNewPost(""); // Xóa nội dung input sau khi đăng
    setPostImage(null); // Xóa ảnh sau khi đăng bài
  };

  // Hàm xử lý xóa bài viết
  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id); // Loại bỏ bài viết có ID cụ thể
    setPosts(updatedPosts);
  };

  // Hàm xử lý tải lên ảnh
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Lấy file đầu tiên
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostImage(reader.result); // Lưu URL của ảnh vào state
      };
      reader.readAsDataURL(file); // Đọc file ảnh
    }
  };

  return (
    <div className="home-page">
      {/* Ảnh đại diện nổi bật */}
      <div className="profile-banner">
        <img
          src="data:image/jpeg;base64,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"
          alt="Profile Banner"
          className="profile-banner-image"
        />
        <div className="profile-avatar-container">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Profile Avatar"
            className="profile-avatar"
          />
        </div>
      </div>

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

            {/* Input chọn ảnh */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange} // Lắng nghe thay đổi để tải lên ảnh
            />

            {/* Hiển thị ảnh nếu có */}
            {postImage && <img src={postImage} alt="Uploaded" className="post-image" />}

            <button className="post-button" onClick={handlePost}>
              Đăng
            </button>
          </div>

          {/* Hiển thị danh sách bài viết */}
          {posts.length === 0 ? (
            <p className="no-posts">Chưa có bài viết. Hãy bắt đầu chia sẻ!</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="post">
                <div className="post-header">
                  <img
                    className="post-author-img"
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="User"
                  />
                  <h3 className="post-author">You</h3>
                </div>
                <p className="post-content">{post.content}</p>

                {/* Hiển thị ảnh nếu có */}
                {post.image && <img src={post.image} alt="Post" className="post-image" />}

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
