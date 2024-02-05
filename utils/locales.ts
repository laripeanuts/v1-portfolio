type ObjectType = Record<string, any>;

export const localeAdapter = <T extends ObjectType>(
  object: T,
  locale?: string,
  propertiesToAdapt: string[] = [],
): T => {
  if (!object || locale === "en" || !locale) {
    return object;
  }

  let localeObject = { ...object };

  propertiesToAdapt.forEach((property) => {
    const localizedProperty = `${property}_${locale.replace("-", "")}`;
    if (object.hasOwnProperty(property)) {
      localeObject[property] = object[localizedProperty] || object[property];
    }
  });

  return localeObject;
};
