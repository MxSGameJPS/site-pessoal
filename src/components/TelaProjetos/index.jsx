import { useState, useEffect } from "react";
import styled from "styled-components";
import CardsProjetos from "./CardProjetos";
import projectsData from "../../mocks/projetos.json";

export default function TelaProjetos() {
  const [filters, setFilters] = useState({
    technology: "all",
  });

  const [filteredProjects, setFilteredProjects] = useState(
    projectsData.projects
  );

  // Extrair tecnologias únicas dos projetos
  const technologies = [
    "all",
    ...new Set(projectsData.projects.map((project) => project.tecnologia)),
  ];

  useEffect(() => {
    if (filters.technology === "all") {
      setFilteredProjects(projectsData.projects);
    } else {
      setFilteredProjects(
        projectsData.projects.filter((project) =>
          project.tecnologia.includes(filters.technology)
        )
      );
    }
  }, [filters]);

  const handleTechnologyFilter = (tech) => {
    setFilters((prev) => ({
      ...prev,
      technology: tech,
    }));
  };

  return (
    <ProjectsSection>
      <FilterContainer>
        <FilterLabel>Filtrar por tecnologia:</FilterLabel>
        <FilterButtons>
          {technologies.map((tech, index) => (
            <FilterButton
              key={index}
              $active={filters.technology === tech}
              onClick={() => handleTechnologyFilter(tech)}
            >
              {tech === "all" ? "Todas" : tech}
            </FilterButton>
          ))}
        </FilterButtons>
      </FilterContainer>

      <ProjectCount>
        {filteredProjects.length}{" "}
        {filteredProjects.length === 1
          ? "projeto encontrado"
          : "projetos encontrados"}
      </ProjectCount>

      <ContainerProjetos>
        {filteredProjects.map((project, index) => (
          <CardsProjetos key={index} project={project} />
        ))}
      </ContainerProjetos>
    </ProjectsSection>
  );
}

const ProjectsSection = styled.div`
  width: 100%;
`;

const FilterContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterLabel = styled.h3`
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  max-width: 800px;
  margin: 0 auto;
`;

const FilterButton = styled.button`
  padding: 0.6rem 1.2rem;
  background: ${(props) =>
    props.$active ? "var(--tertiary-color)" : "rgba(255, 255, 255, 0.1)"};
  color: #ffffff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.$active
      ? "0 3px 10px rgba(0, 0, 0, 0.3)"
      : "0 2px 5px rgba(0, 0, 0, 0.2)"};

  &:hover {
    background: ${(props) =>
      props.$active ? "var(--tertiary-color)" : "rgba(255, 255, 255, 0.2)"};
    transform: translateY(-2px);
  }
`;

const ProjectCount = styled.div`
  text-align: center;
  color: #e6e6ff;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const ContainerProjetos = styled.section`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;
