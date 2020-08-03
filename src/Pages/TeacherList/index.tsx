import React from "react";

import PageHeader from "../../Components/PageHeader";

import { Container, Form, InputBlock, Content } from "./styles";

import TeacherItem from "../../Components/TeacherItem";

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form className="form">
          <InputBlock>
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="Time">Hora</label>
            <input type="text" id="Time" />
          </InputBlock>
        </Form>
      </PageHeader>

      <Content>
        <TeacherItem />
      </Content>
    </Container>
  );
};

export default TeacherList;
