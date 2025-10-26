import type { Route } from "./+types/index";
import type { Project } from "~/types";
import axios from "axios";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  try {
    const res = await axios.get("http://localhost:8000/projects");
    return { projects: res.data };
  } catch (error) {
    throw new Response("Failed to fetch projects", { status: 500 });
  }
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };
  console.log(projects);

  return (
    <>
      <h2 className='text-3xl text-white font-bold mb-8'>My Projects</h2>
    </>
  );
};

export default ProjectsPage;
