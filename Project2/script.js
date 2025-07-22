function getBlogs() {
  return JSON.parse(localStorage.getItem("blogs") || "[]");
}

function saveBlogs(blogs) {
  localStorage.setItem("blogs", JSON.stringify(blogs));
}

function renderBlogs(blogs, container, isAdmin = false) {
  container.innerHTML = "";
  blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.className = "blog";
    blogDiv.innerHTML = `
      <h2>${blog.title}</h2>
      <p><strong>Category:</strong> ${blog.category}</p>
      <p><strong>Description:</strong> ${blog.content}</p>
      <p><strong>Published By:</strong> ${blog.author}</p>
      <p><a href="${blog.blogUrl}" target="_blank">Read Blog</a></p>
      <p><strong>Date:</strong> ${new Date(blog.timestamp).toLocaleString()}</p>
    `;
    if (isAdmin) {
      const editBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      deleteBtn.textContent = "Delete";
      editBtn.onclick = () => editBlog(blog.id);
      deleteBtn.onclick = () => deleteBlog(blog.id);
      blogDiv.append(editBtn, deleteBtn);
    }
    container.appendChild(blogDiv);
  });
}

if (location.pathname.includes("admin.html")) {
  const form = document.getElementById("blogForm");
  const title = document.getElementById("title");
  const blogUrl = document.getElementById("blogUrl");
  const content = document.getElementById("content");
  const author = document.getElementById("author");
  const category = document.getElementById("category");
  const blogId = document.getElementById("blogId");
  const blogList = document.getElementById("adminBlogList");
  const publishedSection = document.getElementById("publishedSection");
  const toggleBtn = document.querySelector(".toggle-btn");

  let blogs = getBlogs();

  form.onsubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: blogId.value || Date.now(),
      title: title.value,
      blogUrl: blogUrl.value,
      content: content.value,
      author: author.value,
      category: category.value,
      timestamp: Date.now()
    };

    if (blogId.value) {
      blogs = blogs.map((b) => (b.id == newBlog.id ? newBlog : b));
    } else {
      blogs.push(newBlog);
    }

    saveBlogs(blogs);
    renderBlogs(blogs, blogList, true);
    form.reset();
    blogId.value = "";
  };

  function editBlog(id) {
    const blog = blogs.find((b) => b.id == id);
    title.value = blog.title;
    blogUrl.value = blog.blogUrl;
    content.value = blog.content;
    author.value = blog.author;
    category.value = blog.category;
    blogId.value = blog.id;
  }

  function deleteBlog(id) {
    blogs = blogs.filter((b) => b.id != id);
    saveBlogs(blogs);
    renderBlogs(blogs, blogList, true);
  }

  function togglePublished() {
    publishedSection.classList.toggle("hidden");
    renderBlogs(blogs, blogList, true);
  }

  toggleBtn.addEventListener("click", togglePublished);
  renderBlogs(blogs, blogList, true);
}

if (location.pathname.includes("user.html") || location.pathname.includes("index.html")) {
  const blogList = document.getElementById("blogList");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortOrder = document.getElementById("sortOrder");
  const searchBar = document.getElementById("searchBar");

  let timer;
  function renderFiltered() {
    let blogs = getBlogs();
    const category = categoryFilter.value;
    const sort = sortOrder.value;
    const search = searchBar.value.toLowerCase();

    if (category !== "all") {
      blogs = blogs.filter((b) => b.category === category);
    }

    if (search) {
      blogs = blogs.filter(
        (b) =>
          b.title.toLowerCase().includes(search) ||
          b.content.toLowerCase().includes(search) ||
          b.author.toLowerCase().includes(search)
      );
    }

    blogs.sort((a, b) =>
      sort === "asc" ? a.timestamp - b.timestamp : b.timestamp - a.timestamp
    );

    renderBlogs(blogs, blogList);
  }

  categoryFilter.onchange = renderFiltered;
  sortOrder.onchange = renderFiltered;

  searchBar.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(renderFiltered, 300);
  });

  renderFiltered();
}
