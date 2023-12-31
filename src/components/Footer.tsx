import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-7xl flex justify-center text-3xl gap-20 py-5 border-t border-zinc-500">
        <a
          href="https://github.com/Mathh19/my-pokedex"
          aria-label="link to the repository for this project"
          target="_blank"
          className="duration-200 ease-in-out hover:drop-shadow-[0_0_4px_#FAFAFA]"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-freitas-629557232/"
          target="_blank"
          aria-label="link to website developer linkedin profile"
          className="duration-200 ease-in-out hover:drop-shadow-[0_0_4px_#FAFAFA]"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};
