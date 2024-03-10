import React from "react";
import "./ScrollEvent.css";
import { useEffect } from "react";

const ScrollEvent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log("Scroll position:", scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-event">
      <h2>Scroll Event trong ReactJS</h2>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna
          euismod, ultricies sapien in, hendrerit ligula. Fusce efficitur justo
          nec orci gravida, id consequat neque eleifend. Nunc sodales ultrices
          metus, ut efficitur mauris blandit eu. Sed nec tellus eget tortor
          facilisis tristique. Sed venenatis justo at turpis varius, vitae
          scelerisque neque dapibus. Integer vel dolor a orci efficitur
          ultricies at ac purus. Duis id velit at purus tempor volutpat non
          vitae nibh. Quisque aliquet accumsan risus, a dignissim felis
          malesuada eu.
        </p>
        <p>
          Proin auctor, dolor sit amet accumsan ultrices, urna odio hendrerit
          augue, vitae imperdiet justo risus non libero. Maecenas dapibus risus
          non dolor consectetur tincidunt. Integer sit amet risus vel quam
          congue malesuada. Quisque malesuada tristique tincidunt. Sed eget
          aliquam elit. Vivamus auctor vestibulum nisl, nec pharetra justo
          interdum a. Vestibulum tincidunt orci et felis mattis tristique.
        </p>
        {/* Thêm thêm nội dung ở đây */}
      </div>
    </div>
  );
};

export default ScrollEvent;
