import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./sideBar.module.scss";

import defaultLogo from "../../assets/images/logo/logo_1.png";
import whiteLogo from "../../assets/images/logo/logo_2.png";

export const SideBarContainer = ({ data }) => {
  const [status, setStatus] = useState({ isMaterialOpen: false, isColorOpen: false });

  if (data) {
    return (
      <>
        <div className={styles.modalForm}>
          <Modal status={status} data={data} />
        </div>

        <div className={styles.sideBarForm}>
          {/* 로고 */}
          <img className={styles.logoInfo} src={defaultLogo} alt="CI" />

          {/* 재료 */}
          <div className={styles.buttonInfo}>
            <div
              className={`${styles.buttonImage} ${status.isMaterialOpen ? styles.active : ""}`}
              onClick={() => {
                status.isMaterialOpen
                  ? setStatus((previousState) => {
                      return { ...previousState, isMaterialOpen: false };
                    })
                  : setStatus((previousState) => {
                      return { ...previousState, isMaterialOpen: true };
                    });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M224 263.3C224.2 233.3 238.4 205.2 262.4 187.2L499.1 9.605C517.7-4.353 543.6-2.965 560.7 12.9C577.7 28.76 580.8 54.54 568.2 74.07L406.5 324.1C391.3 347.7 366.6 363.2 339.3 367.1L224 263.3zM320 400C320 461.9 269.9 512 208 512H64C46.33 512 32 497.7 32 480C32 462.3 46.33 448 64 448H68.81C86.44 448 98.4 429.1 96.59 411.6C96.2 407.8 96 403.9 96 400C96 339.6 143.9 290.3 203.7 288.1L319.8 392.5C319.9 394.1 320 397.5 320 400V400z" />
              </svg>
            </div>
            <div className={styles.buttonTitle}>재료</div>
          </div>

          {/* 색상 */}
          <div className={styles.buttonInfo}>
            <div
              className={`${styles.buttonImage} ${status.isColorOpen ? styles.active : ""}`}
              onClick={() => {
                status.isColorOpen
                  ? setStatus((previousState) => {
                      return { ...previousState, isColorOpen: false };
                    })
                  : setStatus((previousState) => {
                      return { ...previousState, isColorOpen: true };
                    });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z" />
              </svg>
            </div>
            <div className={styles.buttonTitle}>색상</div>
          </div>

          {/* 북마크 */}
          <div className={styles.buttonInfo}>
            <div className={styles.buttonImage} onClick={() => {}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z" />
              </svg>
            </div>
          </div>
        </div>
      </>
    );
  }
  return null;
};

const Modal = (props) => {
  return (
    <>
      {props.status.isMaterialOpen ? (
        // 재료 정보
        <div className={styles.modalInfo}>
          <p>MATERIAL</p>
          {props.data.materials.map((material, i) => {
            return (
              <div className={styles.material} key={i}>
                <div className={styles.materialName}>
                  <img src={whiteLogo} alt="ButtonImg" />
                  <p>{material.name}</p>
                </div>
                {material.url ? (
                  <div
                    className={styles.materialUrl}
                    onClick={() => window.open(material.url, "_blank")}
                  >
                    {material.url.substring(0, 40)}
                  </div>
                ) : (
                  <div>등록된 정보가 없습니다.</div>
                )}
              </div>
            );
          })}
        </div>
      ) : null}
      {props.status.isColorOpen ? (
        // 색상 정보
        <>
          <div
            className={`${styles.modalInfo} ${
              props.status.isMaterialOpen ? "" : styles.modalMargin
            }`}
          >
            <p>COLOR</p>
            <div className={styles.color}>
              <div className={styles.colorName}>
                <img src={whiteLogo} alt="ButtonImg" />
                {props.data.color ? <p>{props.data.color}</p> : <p>등록된 정보가 없습니다.</p>}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

SideBarContainer.propTypes = {
  data: PropTypes.object,
};

export default SideBarContainer;
