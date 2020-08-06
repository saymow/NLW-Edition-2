import React, { useState, ChangeEvent, useEffect } from "react";

import api from "../../Services/api";

import PageHeader from "../../Components/PageHeader";
import TeacherItem from "../../Components/TeacherItem";
import Input from "../../Components/Input";
import Select from "../../Components/Select";

import { Container, OptionsContainer, DaySpan, Form, Content } from "./styles";

const TeacherList: React.FC = () => {
  const [teacher, setTeachers] = useState([]);
  const [selectedWeekDays, setSelectedWeekDays] = useState([
    { value: "Segunda-feira", selected: false },
    { value: "Terça-feira", selected: false },
    { value: "Quarta-feira", selected: false },
    { value: "Quinta-feira", selected: false },
    { value: "Sexta-feira", selected: false },
    { value: "Sábado", selected: false },
    { value: "Domingo", selected: false },
  ]);
  const [queryState, setQueryState] = useState({
    subject: "",
    time: "",
  });

  console.log(teacher);

  function handleOnChange(
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) {
    const { name, value } = event.target;
    setQueryState({
      ...queryState,
      [name]: value,
    });
  }

  function handleSelectedDay(index: number) {
    const newSelectedWeek = [...selectedWeekDays];

    newSelectedWeek[index].selected = !selectedWeekDays[index].selected;

    setSelectedWeekDays(newSelectedWeek);
  }

  useEffect(() => {
    const selectedDays = selectedWeekDays.reduce((accumulator, day, index) => {
      if (day.selected) return [...accumulator, index + 1];
      return accumulator;
    }, [] as number[]);

    if (!queryState.subject || !queryState.time || selectedDays.length === 0) {
      if (teacher.length !== 0) setTeachers([]);
      return;
    }

    console.log("Api was called");

    api
      .get("classes", {
        params: {
          ...queryState,
          week_day: selectedDays.join(", "),
        },
      })
      .then((response) => setTeachers(response.data));
  }, [selectedWeekDays, queryState, teacher.length]);

  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <OptionsContainer>
          {selectedWeekDays.map((weekDay, index) => (
            <DaySpan
              key={weekDay.value}
              selected={weekDay.selected}
              onClick={() => handleSelectedDay(index)}
            >
              {weekDay.value}
            </DaySpan>
          ))}
        </OptionsContainer>
        <Form className="form">
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
          {/* <Select
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
          /> */}
          <Input
            type="time"
            label="Hora"
            name="time"
            value={queryState.time}
            onChange={handleOnChange}
          />
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
