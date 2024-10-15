import Button from "./Button.jsx";
export default function Side({ onStartAddProject, projects }) {
  return (
    <div className="w-1/4 h-screen bg-black text-white rounded-tr-2xl p-8 my-6">
      <p className="text-xl font-semibold">YOUR PROJECTS</p>
      <Button
        onClick={onStartAddProject}
        
      >
        + Add Project
      </Button>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
