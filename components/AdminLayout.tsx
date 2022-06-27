import { ReactNode } from "react";

const AdminLayout = (children: ReactNode) => {
  return (
    <>
      <header>
        <img src="" alt="" />
        <div>takuya Next-blog</div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </header>
      <div>top image</div>
      {children}
      <footer>
        <img src="" alt="" />
        <div>takuya Next-blog</div>
        <button>to administrator page</button>
      </footer>
    </>
  );
};

export default AdminLayout;
