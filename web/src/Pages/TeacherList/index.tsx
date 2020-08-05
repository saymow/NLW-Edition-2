import React, { useState, ChangeEvent, FormEvent } from "react";

import api from "../../Services/api";

import PageHeader from "../../Components/PageHeader";
import TeacherItem from "../../Components/TeacherItem";
import Input from "../../Components/Input";
import Select from "../../Components/Select";

import { Container, Form, Content } from "./styles";

const TeacherList: React.FC = () => {
  const [teacher, setTeachers] = useState([]);
  const [queryState, setQueryState] = useState({
    subject: "",
    week_day: "",
    time: "",
  });

  function handleOnChange(
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) {
    const { name, value } = event.target;
    setQueryState({
      ...queryState,
      [name]: value,
    });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(queryState);
    api
      .get("classes", {
        params: queryState,
      })
      .then((response) => setTeachers(response.data));
  }

  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form className="form" onSubmit={handleSubmit}>
          <Select
            name="subject"
            label="Matéria"
            value={queryState.subject}
            onChange={handleOnChange}
            options={[
              {
                value: "Artes",
                label: "Artes",
              },
              {
                value: "Biologia",
                label: "Biologia",
              },
              {
                value: "Química",
                label: "Química",
              },
              {
                value: "Matemática",
                label: "Matemática",
              },
              {
                value: "Educação Física",
                label: "Educação Física",
              },
              {
                value: "Física",
                label: "Física",
              },
              {
                value: "Gramática",
                label: "Gramática",
              },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={queryState.week_day}
            onChange={handleOnChange}
            options={[
              {
                value: "0",
                label: "Domingo",
              },
              {
                value: "1",
                label: "Segunda-feira",
              },
              {
                value: "2",
                label: "Terça-feira",
              },
              {
                value: "3",
                label: "Quarta-feira",
              },
              {
                value: "4",
                label: "Quinta-feira",
              },
              {
                value: "5",
                label: "Sexta-feira",
              },
              {
                value: "6",
                label: "Sábado",
              },
            ]}
          />
          <Input
            type="time"
            label="Hora"
            name="time"
            value={queryState.time}
            onChange={handleOnChange}
          />
          <button>Submit</button>
        </Form>
      </PageHeader>

      <Content>
        {teacher.map((teacher, index) => (
          <TeacherItem key={index} data={teacher} />
        ))}
      </Content>
    </Container>
  );
};

export default TeacherList;
