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

  const handleSearchRepo = async () => {
    api
      .get(`repos/${currentRepo}`)
      .then((response) => {
        const data = response.data;
        const isExist = repos.find((repo) => repo.id === data.id);

        if (data && !isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo("");
        }
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="GitHub Logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo, index) => (
        <ItemRepo repo={repo} key={index} />
      ))}
    </Container>
  );
}

export default App;
