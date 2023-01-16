import { motion } from "framer-motion";

import { Resolver, SubmitHandler, useForm } from "react-hook-form";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { ProfileType } from "../../@types/api";

type ContactProps = {
  profile: ProfileType;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const resolver: Resolver<Inputs> = async (values) => {
  return {
    values:
      values.name || values.email || values.subject || values.message
        ? values
        : {},
    errors:
      !values.name || !values.email || !values.subject || !values.message
        ? {
            name: {
              type: "required",
              message: "Nome não pode ser vazio",
            },
            email: {
              type: "required",
              message: "E-mail não pode ser vazio",
            },
            subject: {
              type: "required",
              message: "Assunto não pode ser vazio",
            },
            message: {
              type: "required",
              message: "Mensagem não pode ser vazia",
            },
          }
        : {},
  };
};

export const Contact = ({ profile }: ContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:larissarabelolf@gmail.com?subject=${data.subject}&body=Oi, me chamo ${data.name} e queria mandar a seguinte mensagem: ${data.message}.Meu e-mail: ${data.email}`;
  };

  return (
    <div className="h-screen w-100 flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[15px] text-zinc-500 text-xl">
        Contato
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6 w-full justify-evenly items-center mt-12"
      >
        {" "}
        <h4 className="text-2xl font-bold lg:text-4xl underline decoration-primary">
          Vamos conversar!
        </h4>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center">
            <PhoneIcon className="text-primary h-6 w-6 animate-pulse" />
            <span className="text-xl">{profile?.phone}</span>
          </div>
          <div className="flex gap-4 items-center">
            <MapPinIcon className="text-primary h-6 w-6 animate-pulse" />
            <span className="text-xl">{profile?.address}</span>
          </div>
          <div className="flex gap-4 items-center">
            <EnvelopeIcon className="text-primary h-6 w-6 animate-pulse" />
            <span className="text-xl">{profile?.email}</span>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 min-w-full md:min-w-[500px]"
        >
          <div className="flex gap-2">
            <input
              {...register("name")}
              type="text"
              name="name"
              id="name"
              className="contactInput w-[110px]"
              placeholder="Nome"
            />
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              className="contactInput w-[110px]"
              placeholder="E-mail"
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            name="subject"
            id="subject"
            className="contactInput"
            placeholder="Assunto"
          />
          <textarea
            {...register("message")}
            name="message"
            id="message"
            className="contactInput py-4"
            placeholder="Mensagem"
          />
          <button
            type="submit"
            className="p-2 bg-primary hover:bg-primaryDark rounded-md"
          >
            Enviar
          </button>
        </form>
        <div className="flex flex-col gap-1">
          {errors?.name && (
            <p className="text-sm md:text-base mt-2">{errors.name.message}</p>
          )}
          {errors?.email && (
            <p className="text-sm md:text-base mt-2">{errors.email.message}</p>
          )}
          {errors?.subject && (
            <p className="text-sm md:text-base mt-2">
              {errors.subject.message}
            </p>
          )}
          {errors?.message && (
            <p className="text-sm md:text-base mt-2">
              {errors.message.message}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};
