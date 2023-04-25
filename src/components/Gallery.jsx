import * as React from "react";
import ResponsiveGallery from "react-responsive-gallery";

export default function Gallery() {
  return (
    <div className="App">
      <ResponsiveGallery
        useLightBox
        images={[
          {
            src: "https://barudoniconstruction.com/wp-content/uploads/photo-gallery/Tenant%20Improvements/6_Tenant_Improvement_Restaurant.JPG?bwg=1577057928",
            alt: "image 1 alt test",
            orderS: 1,
            orderM: 1,
            orderL: 1,
          },
          {
            src: "https://barudoniconstruction.com/wp-content/uploads/photo-gallery/Tenant%20Improvements/7_Tenant_Improvement_Restaurant.JPG?bwg=1577057928",
            alt: "image 2 alt test",
            orderS: 2,
            orderM: 2,
            orderL: 2,
          },
          {
            src: "https://barudoniconstruction.com/wp-content/uploads/photo-gallery/Patio%20Covers/img20.jpg",
            orderS: 4,
            orderM: 3,
            orderL: 6,
          },
          {
            src: "https://barudoniconstruction.com/wp-content/uploads/photo-gallery/Patio%20Covers/img22.jpg",
            orderS: 3,
            orderM: 4,
            orderL: 5,
          },
          {
            src: "https://barudoniconstruction.com/wp-content/uploads/photo-gallery/Patio%20Covers/img5.jpg",
            orderS: 5,
            orderM: 6,
            orderL: 4,
          },
          {
            src: "https://barudoniconstruction.com/wp-content/uploads/photo-gallery/Patio%20Covers/img9.jpg",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style",
          },
          {
            src: "https://barudoniconstruction.com/wp-content/uploads/photo-gallery/Remodeling%20Custom%20Homes/img1.jpg",
            alt: "image 1 alt test",
            orderS: 1,
            orderM: 1,
            orderL: 1,
          },
          {
            src: "https://barudoniconstruction.com/wp-content/uploads/photo-gallery/Remodeling%20Custom%20Homes/img15.jpg",
            alt: "image 2 alt test",
            orderS: 2,
            orderM: 2,
            orderL: 2,
          },
          {
            src: "https://barudoniconstruction.com/wp-content/uploads/photo-gallery/Remodeling%20Custom%20Homes/img23.jpg",
            orderS: 4,
            orderM: 3,
            orderL: 6,
          },
        ]}
      />
    </div>
  );
}
