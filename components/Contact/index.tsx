import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
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
  const t = await getTranslations("home.contact");

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
              message: t("form.errors.name"),
            },
            email: {
              type: "required",
              message: t("form.errors.email"),
            },
            subject: {
              type: "required",
              message: t("form.errors.subject"),
            },
            message: {
              type: "required",
              message: t("form.errors.message"),
            },
          }
        : {},
  };
};

export const Contact = ({ profile }: ContactProps) => {
  const t = useTranslations("home.contact");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:larissarabelolf@gmail.com?subject=${data.subject}&body=Oi, me chamo ${data.name} e queria mandar a seguinte mensagem: ${data.message}. Meu e-mail: ${data.email}`;
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-2xl font-bold underline lg:text-4xl decoration-primary">
        {t("subtitle")}
      </h4>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <PhoneIcon className="w-6 h-6 text-primary animate-pulse" />
          <span className="text-xl">{profile?.phone}</span>
        </div>
        <div className="flex items-center gap-4">
          <MapPinIcon className="w-6 h-6 text-primary animate-pulse" />
          <span className="text-xl">{profile?.address}</span>
        </div>
        <div className="flex items-center gap-4">
          <EnvelopeIcon className="w-6 h-6 text-primary animate-pulse" />
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
            placeholder={t("form.fields.name")}
          />
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className="contactInput w-[110px]"
            placeholder={t("form.fields.email")}
          />
        </div>
        <input
          {...register("subject")}
          type="text"
          name="subject"
          id="subject"
          className="contactInput"
          placeholder={t("form.fields.subject")}
        />
        <textarea
          {...register("message")}
          name="message"
          id="message"
          className="py-4 contactInput"
          placeholder={t("form.fields.message")}
        />
        <button
          type="submit"
          className="p-2 rounded-md bg-primary hover:bg-primaryDark disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-primary"
        >
          {t("form.submit")}
        </button>
      </form>
      <div className="flex flex-col gap-1">
        {errors?.name && (
          <p className="mt-2 text-sm md:text-base">{errors.name.message}</p>
        )}
        {errors?.email && (
          <p className="mt-2 text-sm md:text-base">{errors.email.message}</p>
        )}
        {errors?.subject && (
          <p className="mt-2 text-sm md:text-base">{errors.subject.message}</p>
        )}
        {errors?.message && (
          <p className="mt-2 text-sm md:text-base">{errors.message.message}</p>
        )}
      </div>
    </div>
  );
};
