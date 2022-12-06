import { useQuery } from "react-query";
import { fetcher } from "./api/api";
import { apiUrl } from "./api/urls";
import Utkast from "./components/Utkast";
import "@navikt/ds-css";
import style from "./App.module.css";
import ErrorDescription from "./components/ErrorDescription/ErrorDescription";

function App() {
  const { status, data } = useQuery(apiUrl + "/tom", fetcher);
  return (
    <main className={style.main}>
      <div className={style.app}>
        {status == "error" ? <ErrorDescription /> : <Utkast utkast={data} status={status} />}
      </div>
    </main>
  );
}

export default App;
