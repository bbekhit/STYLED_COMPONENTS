import React from "react";
import styled from "styled-components";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { setBackground, setRem, media, setShadow } from "../../styles/helpers";
import Title from "./Title";

const Card = ({ className }) => {
  return (
    <div className={className}>
      <div className="card-image"></div>
      <div className="card-title">
        <Title title="John Doe" center />
      </div>
      <div className="card-content">
        <p className="title">CEO & Founder</p>
        <p>Harvard University</p>
        <div className="icons">
          <FaFacebook />
          <FaTwitter />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default styled(Card)`
  margin: 0 auto;
  overflow: hidden;
  ${setShadow.light};
  border-radius: 15px;
  width: 300px;
  min-width: 250px;
  max-width: 300px;
  .card-image {
    ${(props) => setBackground(props.img, "rgba(0,0,0,0)")};
    background-attachment: inherit;
    width: 100%;
    height: 250px;
    border-bottom: 1px solid black;
  }
  .card-title {
    margin: 10px;
  }
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${setRem(25)};

    .title {
      color: grey;
    }

    p {
      margin-bottom: 10px;
    }

    .icons {
      width: 50%;
      display: flex;
      justify-content: space-between;
      font-size: 22px;
      margin: 10px;
    }
  }
  ${media.phone` 
    width: 80%;
    `}
`;
