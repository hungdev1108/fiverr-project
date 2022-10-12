import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Explore.scss";

export default function Explore(props) {
  const renderBucketWrapper = () => {
    return props.data?.map((item) => {
      return (
        <div className="item" key={item.id}>
          <div className="bucket-title-wrapper p-0">
            <div className="bucket-title">
              <div className="bucket-top">
                <img src={item.hinhAnh} alt={item.tenNhom}></img>
                <h3>{item.tenNhom}</h3>
              </div>
            </div>

            <div className="chevron-wrapper">
              <span
                className="bucket-chevron"
                aria-hidden="true"
                style={{ width: 14, height: 14 }}
              >
                <svg
                  width={8}
                  height={16}
                  viewBox="0 0 8 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
                </svg>
              </span>
            </div>
          </div>

          <div className="bucket-content">
            <div className="item-content">
              {item.dsChiTietLoai.map((content) => {
                return (
                  <div key={content.id} className="item-wrapper">
                    <NavLink
                      to={`/listJob/?maChiTietLoai=${content.id}`}
                      className="item-name"
                    >
                      <div className="item-name-inner-link">
                        <span className="item-name-inner-link-text">
                          {content.tenChiTiet}
                        </span>
                      </div>
                      <span
                        className="item-name-arrow"
                        aria-hidden="true"
                        style={{
                          fill: "rgb(64, 65, 69)",
                        }}
                      >
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z" />
                        </svg>
                      </span>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="Explore">
      <Container>
        <h2 className="title">Explore {props.title}</h2>
        <div className="bucket-wrapper">{renderBucketWrapper()}</div>
      </Container>
    </div>
  );
}
