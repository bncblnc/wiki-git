import { useState } from "react";
import gitLogo from "../assets/github.png";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { Container } from "./styles";
import Button from "../components/Button";
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);

  const errorStyle = {
    color: "red",
    width: "80%",
    marginTop: "-15px",
    letterSpacing: "1px",
    display: `${error ? "block" : "none"}`,
  };

  const handleSearchRepo = async () => {
    api
      .get(`repos/${currentRepo}`)
      .then((response) => {
        const data = response.data;
        const isExist = repos.find((repo) => repo.id === data.id);

        if (data && !isExist) {
          setRepos((prev) => [data, ...prev]);
          setCurrentRepo("");
          setError(false);
        }
      })
      .catch(function (error) {
        setError(true);
      });
  };

  const handleDelete = (id) => {
    const newRepos = repos.filter((repo) => repo.id !== Number(id));
    setRepos(newRepos);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="GitHub Logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <p style={errorStyle}>*Repositório não encontrado</p>
      <Button onClick={handleSearchRepo} />
      {repos.map((repo, index) => (
        <ItemRepo repo={repo} key={index} deleteFunction={handleDelete} />
      ))}
    </Container>
  );
}

export default App;
