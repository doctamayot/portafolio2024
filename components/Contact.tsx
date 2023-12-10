"use client";
import React from "react";
import {} from "@heroicons/react/24/outline";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  tema: string;
  mensaje: string;
};
type Props = {};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:doctamayot@gmail.com?subject=${formData.tema}&body=Hola, mi nombre es ${formData.name}. ${formData.mensaje} (${formData.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-44">
        <h4 className="text-4xl font-semibold text-center">
          Tengo lo que necesitas.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Hablemos.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+573144261190</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">doctamayot@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">1123 developer Lane</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              name="name"
              id=""
              placeholder="Name"
              className="contactInput"
            />
            <input
              {...register("email")}
              type="text"
              name="email"
              id=""
              placeholder="Email"
              className="contactInput"
            />
          </div>
          <input
            {...register("tema")}
            type="text"
            name="tema"
            id=""
            placeholder="Tema"
            className="contactInput"
          />
          <textarea
            {...register("mensaje")}
            placeholder="Message"
            name="mensaje"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
