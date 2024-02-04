import { useRouter } from "next/router";

interface IntlButtonProps extends React.HTMLProps<HTMLButtonElement> {
  intl: string;
  label: string;
}

export const IntlButton = ({ intl, label }: IntlButtonProps) => {
  const router = useRouter();
  const activeLanguage = router.locale;
  const activeLanguageClass =
    "underline underline-offset-4 decoration-primary font-bold";

  const goToLanguage = (language: string) => {
    router.push(router.pathname, router.asPath, { locale: language });
  };

  return (
    <button
      onClick={() => goToLanguage(intl)}
      className={`${
        activeLanguage === intl && activeLanguageClass
      } hover:underline hover:underline-offset-4 hover:decoration-primary hover:font-bold`}
    >
      {label}
    </button>
  );
};
