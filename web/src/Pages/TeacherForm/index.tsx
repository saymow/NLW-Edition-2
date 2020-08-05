import React, { useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../Components/PageHeader";
import Select from "../../Components/Select";
import Input from "../../Components/Input";
import Textarea from "../../Components/TextArea";

import WarningIcon from "../../Assets/Images/icons/warning.svg";

import {
  Container,
  Form,
  FieldSet,
  Legend,
  Footeer,
  Button,
  ScheduleItem,
} from "./styles";
import api from "../../Services/api";

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    whatsapp: "",
    bio: "",
    subject: "",
    cost: "",
  });

  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: "",
      to: "",
    },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  }

  function handleOnChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function setScheduleItemValue(index: number, field: string, value: string) {
    console.log(index, field, value);

    const updatedScheduleItems = scheduleItems.map((scheduleItem, index2) => {
      if (index === index2) return { ...scheduleItem, [field]: value };
      return scheduleItem;
    });

    console.log(updatedScheduleItems);

    setScheduleItems(updatedScheduleItems);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    api
      .post("classes", {
        ...formData,
        schedule: scheduleItems,
      })
      .then(() => alert("Cadastrado com sucesso"))
      .catch(() => {
        alert("Erro ao cadastrar.");
        history.push("/");
      });
  }

  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher este formulário de inscrição."
      />
      <Form onSubmit={handleSubmit}>
        <FieldSet>
          <Legend>Seus Dados</Legend>
          <Input
            name="name"
            label="Nome completo"
            value={formData.name}
            onChange={handleOnChange}
          />
          <Input
            name="avatar"
            label="Avatar"
            value={formData.avatar}
            onChange={handleOnChange}
          />
          <Input
            name="whatsapp"
            label="Whatsapp"
            value={formData.whatsapp}
            onChange={handleOnChange}
          />
          <Textarea
            name="bio"
            label="Biografia"
            value={formData.bio}
            onChange={handleOnChange}
          />
        </FieldSet>

        <FieldSet>
          <Legend>Sobre a aula</Legend>
          <Select
            name="subject"
            label="Matéria"
            value={formData.subject}
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
            name="cost"
            label="Custo da sua aula por hora."
            value={formData.cost}
            onChange={handleOnChange}
          />
        </FieldSet>

        <FieldSet>
          <Legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </Legend>
          {scheduleItems.map((scheduleItem, index) => (
            <ScheduleItem key={index}>
              <Select
                name="week_day"
                label="Dia da semana"
                value={scheduleItem.week_day}
                onChange={(e) =>
                  setScheduleItemValue(index, "week_day", e.target.value)
                }
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
                name="from"
                label="Das"
                type="time"
                value={scheduleItem.from}
                onChange={(e) =>
                  setScheduleItemValue(index, "from", e.target.value)
                }
              />
              <Input
                name="to"
                label="Até"
                type="time"
                value={scheduleItem.to}
                onChange={(e) =>
                  setScheduleItemValue(index, "to", e.target.value)
                }
              />
            </ScheduleItem>
          ))}
        </FieldSet>

        <Footeer>
          <p>
            <img src={WarningIcon} alt="Aviso importante." />
            Importante! <br />
            Preencha todos os dados
          </p>
          <Button>Salvar cadastro</Button>
        </Footeer>
      </Form>
    </Container>
  );
};

export default TeacherForm;
