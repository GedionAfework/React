import { useState } from "react";
import Side from "./Components/Side.jsx";
import AddProject from "./Components/AddProject.jsx";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
export default function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;
  if (projectsState.selectedProject === null) {
    content = (
      <AddProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="flex gap-8">
      <Side
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
      />
      {content}
    </main>
  );
}
