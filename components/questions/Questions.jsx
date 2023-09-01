"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { question } from "@/mocks/questions";
import style from "./styles.module.css";
import useQuestionStore from "@/hooks/useQuestionStore";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

export default function Questions() {
  const { setData } = useQuestionStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => setData(formData);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.formYapi}>
      <div className={style.title}>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. A!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          corrupti ipsam eveniet quasi, quis veritatis odit possimus laboriosam
          tempore, explicabo natus iure totam. Similique natus obcaecati aliquid
          quae enim et.
        </p>
      </div>
      <div className={style.gender}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            <h3>Gender</h3>
          </FormLabel>
          <RadioGroup
            className={style.radio}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="woman"
              control={<Radio {...register("gender", { required: true })} />}
              label="Woman"
              className={style.gensin}
            />
            <FormControlLabel
              value="man"
              control={<Radio {...register("gender", { required: true })} />}
              label="Man"
              className={style.gensin}
            />
            <FormControlLabel
              value="other"
              control={<Radio {...register("gender", { required: true })} />}
              label="Other"
              className={style.gensin}
            />
          </RadioGroup>
        </FormControl>
        {errors.gender && <p>User gender is required.</p>}
      </div>
      <div className={style.input}>
        {question.map((item) => (
          <div key={item.name} className={style.inputSin}>
            <label htmlFor={item.name}>{item.name}:</label>
            <TextField
              type="text"
              variant="standard"
              label={item.text}
              id={item.name}
              {...register(`${item.name}`, { required: true, min: 1 })}
            />
            {errors[item.name] && <p>Fill in the box.</p>}
          </div>
        ))}
      </div>
      <div className={style.buttons}>
        <Button
          type="submit"
          variant="contained"
          prefetch={false}
          className={style.button}
        >
          SUBMIT
        </Button>
        <Button type="reset" value="clear" className={style.reset}>
          clear
        </Button>
      </div>
    </form>
  );
}
