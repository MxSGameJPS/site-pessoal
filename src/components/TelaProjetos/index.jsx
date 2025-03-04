import styled from "styled-components";
import CardsProjetos from "./CardProjetos";
import projectsData from "../../mocks/projetos.json";

export default function TelaProjetos() {
    return (
        <ContainerProjetos>
            {projectsData.projects.map((project, index) => (
                <CardsProjetos key={index} project={project} />
            ))}                
        </ContainerProjetos>
        );
}

const ContainerProjetos = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 2rem;
`