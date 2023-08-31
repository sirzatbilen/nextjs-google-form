"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { soru } from "@/mocks/questions";
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

export default function Sorular() {
  const { setData, data } = useQuestionStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => setData(formData);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.formYapi}>
      <div className={style.baslik}>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. A!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          corrupti ipsam eveniet quasi, quis veritatis odit possimus laboriosam
          tempore, explicabo natus iure totam. Similique natus obcaecati aliquid
          quae enim et.
        </p>
      </div>
      <div className={style.cinsiyet}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Cinsiyet</FormLabel>
          <RadioGroup
            className={style.radio}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="kadın"
              control={<Radio {...register("cinsiyet", { required: true })} />}
              label="Kadın"
              className={style.cinsTek}
            />
            <FormControlLabel
              value="erkek"
              control={<Radio {...register("cinsiyet", { required: true })} />}
              label="Erkek"
              className={style.cinsTek}
            />
            <FormControlLabel
              value="Diger"
              control={<Radio {...register("cinsiyet", { required: true })} />}
              label="Diğer"
              className={style.cinsTek}
            />
          </RadioGroup>
        </FormControl>
        {errors.cinsiyet && <p>Kullanıcı cinsiyet gereklidir.</p>}
      </div>
      <div className={style.input}>
        {soru.map((item) => (
          <div key={item.name} className={style.inputTek}>
            <label htmlFor={item.name}>{item.name}:</label>
            <TextField
              type="text"
              variant="standard"
              label={item.text}
              id={item.name}
              {...register(`${item.name}`, { required: true, min: 1 })}
            />
            {errors[item.name] && <p>Kutucuğu doldurun.</p>}
          </div>
        ))}
      </div>
      <Button
        type="submit"
        variant="contained"
        prefetch={false}
        className={style.button}
      >
        GÖNDER
      </Button>
    </form>
  );
}
