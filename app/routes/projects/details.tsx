import type { Route } from "./+types/details";
import type { Project } from "~/types";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import axios from "axios";

export async function loader({
  request,
  params,
}: Route.LoaderArgs): Promise<Project> {
  const res = await axios.get(`http://localhost:8000/projects/${params.id}`);

  return res.data;
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData;
  return (
    <>
      {" "}
      <Link
        to='/projects'
        className='flex items-center text-blue-400 hover:text-blue-500 mb-6 transition'
      >
        <FaArrowLeft className='mr-2' />
        Back to Projects
      </Link>
      <div className='grid gap-8 md:grid-cols-2 items-start'>
        <div>
          <img
            src={project.image}
            alt={project.title}
            className='w-full rounded-lg shoadow-md'
          />
        </div>

        <div>
          <h1 className='text-3xl font-bold text-blue-400 mb-4'>
            {project.title}
          </h1>

          <p className='text-gray-300 text-sm mb-4'>
            {new Date(project.date).toLocaleDateString()} • {project.category}
          </p>

          <p className='text-gray-200 mb-6'>{project.description}</p>

          <a
            href={project.url}
            target='_blank'
            className='inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 runded transition'
          >
            View Live site
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
