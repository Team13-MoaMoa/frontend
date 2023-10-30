import { useState } from 'react';

export default function useLanguage() {
  const [language, setLanguage] = useState<string[]>([]);

  const filterLanguage = (selectedLanguage: string) => {
    if (hasLanguage(selectedLanguage))
      return language.filter((language) => language !== selectedLanguage);
    else return [...language, selectedLanguage];
  };

  const hasLanguage = (selectedLanguage: string) => {
    return Boolean(language.find((language) => language === selectedLanguage));
  };

  const clearLanguage = () => {
    setLanguage([]);
  };

  const onChangeLanguage = (language: string) => {
    const filteredLanguage = filterLanguage(language);
    setLanguage(filteredLanguage);
  };

  return { language, onChangeLanguage, clearLanguage };
}
