import styled from "styled-components";
import { Form as FormikForm } from "formik";
import {
  HeartFill,
  Eye as BsEye,
  EyeSlash as BsEyeSlash,
} from "@styled-icons/bootstrap";

export const Container = styled.div`
  /* height: 560px;
  margin: 3rem auto;
  width: 90%;
  max-width: 1440px;

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3); */
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 55% 45%;
`;

export const Form = styled(FormikForm)`
  > div {
    border: 1px solid var(--color-line-in-white);
  }

  > div:first-child {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  > div:not(:first-child) {
    border-top: none;
  }

  > div:last-of-type {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

export const Options = styled.section`
  margin: 1.5em 0 3rem;
  display: flex;
  justify-content: space-between;
  color: var(--color-text-complement);
  font-size: 1.3rem;

  label {
    cursor: pointer;
    position: relative;
    padding-left: 2.3rem;

    display: flex;
    justify-content: center;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    span {
      display: block;
      position: absolute;
      top: 0.1rem;
      left: 0;

      width: 1.8rem;
      height: 1.8rem;
      background: var(--color-box-footer);
      border: 1px solid var(--color-line-in-white);
      border-radius: 0.5rem;
    }

    input:hover + span {
      background: var(--color-background);
    }

    input:checked + span {
      background-color: var(--color-secondary);
      border-color: var(--color-secondary);

      transition: all 0;

      &:after {
        display: block;
        content: "";
        position: absolute;
        left: calc(50% - 0.4rem + 1px);
        top: calc(50% - 0.8rem + 1px);
        width: 0.4rem;
        height: 0.8rem;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;

  color: var(--color-text-complement);
  background: #dcdce6;
  border-radius: 0.5rem;

  padding: 1.2rem;
  border: 0;
  outline: 0;

  &.validForm {
    color: var(--color-background);
    background: var(--color-secondary);
  }
`;

export const MoreOptions = styled.div`
  /* position: absolute;
  bottom: 2rem;
  left: 50% calc((90 / 100 * 340px) / 2);
  width: calc(90 / 100 * 340px); */

  margin-top: 8rem;

  display: flex;
  justify-content: space-between;

  color: var(--color-text-complement);

  div {
    a {
      color: var(--color-primary);
      text-decoration: underline;
    }
  }

  div:last-child {
    font-size: 1.2rem;
  }
`;

export const PurpleHeartIcon = styled(HeartFill)`
  margin-left: 0.2rem;
  color: var(--color-primary);
  height: 1.3rem;
  width: 1.3rem;
`;

export const Eye = styled(BsEye)``;

export const EyeSlash = styled(BsEyeSlash)``;
