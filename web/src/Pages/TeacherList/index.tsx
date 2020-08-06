import React, { useState, ChangeEvent, useEffect, useRef } from "react";

import api from "../../Services/api";
import { useClassesRequestWithDebouncer } from "../../Hooks/TeacherList_related";

import PageHeader from "../../Components/PageHeader";
import TeacherItem from "../../Components/TeacherItem";
import Input from "../../Components/Input";
import Select from "../../Components/Select";

import { Container, OptionsContainer, DaySpan, Form, Content } from "./styles";

const TeacherList: React.FC = () => {
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

  const teacher = useClassesRequestWithDebouncer({
    api,
    queryState,
    selectedWeekDays,
    delay: 500,
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

  function handleSelectedDay(index: number) {
    const newSelectedWeek = [...selectedWeekDays];

    newSelectedWeek[index].selected = !selectedWeekDays[index].selected;

    setSelectedWeekDays(newSelectedWeek);
  }

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
