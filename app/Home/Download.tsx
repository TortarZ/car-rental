import Image from "next/image";
import React from "react";
import "./Styles/Download.css";

const Download = () => {
  return (
    <>
      <section className="download-con">
        <div className="download-con-box">
          <div className="download-con-content">
            <h2>Download our app to get most out of it</h2>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="download-con-content-box">
              <Image
                src="/Google_Download.png"
                width={0}
                height={0}
                sizes="100%"
                alt="google_download_btn"
                className="download-btn"
              />
              <Image
                src="/Apple_Download.png"
                width={0}
                height={0}
                sizes="100%"
                alt="apple_download_btn"
                className="download-btn"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
