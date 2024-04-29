import Navbar from "@/components/navbar";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <p>{t('title')}</p>
    </>
  );
}

export default Home;
