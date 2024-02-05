type ObjectType = Record<string, any>;

export const localeAdapter = <T extends ObjectType>(
  object: T,
  locale?: string,
  propertiesToAdapt: string[] = [],
): T => {
  if (!object || locale === "en" || !locale) {
    return object;
  }

  const localeObject = { ...(object as ObjectType) };

  propertiesToAdapt.forEach((property) => {
    const localizedProperty = `${property}_${locale.replace("-", "")}`;
    if (localizedProperty in object) {
      localeObject[property] = object[localizedProperty];
    }
  });

  return localeObject as T;
};
