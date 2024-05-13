import React from "react";
import blogImg1 from "../../assets/images/blog1.svg";
import blogImg2 from "../../assets/images/blog2.svg";
import "./blog.scss";

const BlogPost = () => {
  return (
    <div className="blog container">
      <h2 className="blog__title"> Blog Posts</h2>
      <div className="blog__post1">
        <div className="blog__post__left">
          <h3 className="blog__post__title">Tempered Glass</h3>
          <p className="blog__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
            consectetur. Turpis massa sed elementum tempus egestas sed sed.
            Ornare massa eget egestas purus viverra accumsan in. Tristique
            senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
            sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
            mauris augue neque gravida in fermentum et. Erat imperdiet sed
            euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
            consequat interdum varius sit amet mattis. Odio eu feugiat pretium
            nibh ipsum.
          </p>
        </div>
        <div className="blog__post__right">
          <img src={blogImg1} alt="" />
        </div>
      </div>
      <div className="blog__post2">
        <div className="blog__post__left">
          <img src={blogImg2} alt="" />
        </div>
        <div className="blog__post__right">
          <h3 className="blog__post__title">Back Cover</h3>
          <p className="blog__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
            consectetur. Turpis massa sed elementum tempus egestas sed sed.
            Ornare massa eget egestas purus viverra accumsan in. Tristique
            senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
            sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
            mauris augue neque gravida in fermentum et. Erat imperdiet sed
            euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
            consequat interdum varius sit amet mattis. Odio eu feugiat pretium
            nibh ipsum.
          </p>
        </div>
      </div>
      <div className="blog__post3">
        <h3 className="blog__post__title">Mobile Brand and Price Strategy</h3>
        <p className="blog__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus
          egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet
          justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas
          maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim.
          Neque laoreet suspendisse interdum consectetur. Turpis massa sed
          elementum tempus egestas sed sed. Ornare massa eget egestas purus
          viverra accumsan in. Tristique senectus et netus et malesuada. Ornare
          suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna
          sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat
          imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero
          nunc consequat interdum varius sit amet mattis. Odio eu feugiat
          pretium nibh ipsum.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
