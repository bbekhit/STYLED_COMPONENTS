import React, { useState } from "react";
import Row from "../Globals/Row";
import Title from "../Globals/Title";
import { PrimaryBtn } from "../Globals/Button";
import aboutImg from "../../images/aboutBcg.jpeg";
import styled from "styled-components";
import Item from "../Globals/Item";
import { SlantedSection, Section } from "../Globals/Section";
import Card from "../Globals/Card";
import img1 from "../../images/homeBcg.jpeg";
import FormInput from "../Globals/Form/FormInput";
import { FormContainer } from "../Globals/Form/FormInputContainer";

const About = ({ className }) => {
  const [email, setEmail] = useState("");

  const handleChange = () => {};

  return (
    <div className={className}>
      <Section>
        <Row>
          <Item className="about-img" size={"50%"}>
            <img src={aboutImg} alt="about us" style={{ width: "100%" }} />
          </Item>
          <Item className="about-info" size={"50%"}>
            <Title title="about us" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              aut quos ea optio ipsa, molestiae officiis, voluptates itaque
              blanditiis nostrum est fugiat, architecto odit at atque obcaecati
              nihil! Cupiditate, error.
            </p>
            <PrimaryBtn>read more</PrimaryBtn>
          </Item>
        </Row>
      </Section>
      <SlantedSection color="lightgrey">
        <Row>
          <Item className="about-img" size={"50%"}>
            <img src={aboutImg} alt="about us" style={{ width: "100%" }} />
          </Item>
          <Item className="about-info" size={"50%"}>
            <Title title="about us" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              aut quos ea optio ipsa, molestiae officiis, voluptates itaque
              blanditiis nostrum est fugiat, architecto odit at atque obcaecati
              nihil! Cupiditate, error.
            </p>
            <PrimaryBtn>read more</PrimaryBtn>
          </Item>
        </Row>
      </SlantedSection>
      <Section>
        <Row>
          <Item className="about-img" size={"50%"}>
            <img src={aboutImg} alt="about us" style={{ width: "100%" }} />
          </Item>
          <Item className="about-info" size={"50%"}>
            <Title title="about us" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              aut quos ea optio ipsa, molestiae officiis, voluptates itaque
              blanditiis nostrum est fugiat, architecto odit at atque obcaecati
              nihil! Cupiditate, error.
            </p>
            <PrimaryBtn circle>read more</PrimaryBtn>
          </Item>
        </Row>
      </Section>
      <SlantedSection color="lightgrey">
        <Row>
          <Item className="about-img" size={"50%"}>
            <img src={aboutImg} alt="about us" style={{ width: "100%" }} />
          </Item>
          <Item className="about-info" size={"50%"}>
            <Title title="about us" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              aut quos ea optio ipsa, molestiae officiis, voluptates itaque
              blanditiis nostrum est fugiat, architecto odit at atque obcaecati
              nihil! Cupiditate, error.
            </p>
            <PrimaryBtn>read more</PrimaryBtn>
          </Item>
        </Row>
      </SlantedSection>
      <Section>
        <Row>
          <Item size={"25%"}>
            <Card />
          </Item>
          <Item size={"25%"}>
            <Card img={img1} />
          </Item>
          <Item size={"25%"}>
            <Card />
          </Item>
          <Item size={"25%"}>
            <Card img={img1} />
          </Item>
        </Row>
      </Section>
      <Section>
        <Item>
          <FormContainer>
            <form>
              <FormInput
                name="email"
                type="email"
                handleChange={handleChange}
                value={email}
                label="email"
                required
              />
              <FormInput
                name="email"
                type="email"
                handleChange={handleChange}
                value={email}
                label="email"
                required
              />
            </form>
          </FormContainer>
        </Item>
      </Section>
    </div>
  );
};

export default styled(About)`
  p {
    color: black;
  }

  .about-img {
    background: transparent;
  }
`;
