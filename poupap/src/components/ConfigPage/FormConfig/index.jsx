import { IconSavings } from "../../PrincipalPage/Icons";

export const FormConfig = () => {
  return (
    <div>
      <form action="/reconfig" method="post" className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-neutral-text font-bold">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 rounded-md p-2 text-neutral-text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-neutral-text font-bold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded-md p-2 text-neutral-text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-neutral-text font-bold">
            Senha:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded-md p-2 text-neutral-text"
            placeholder="Digite sua nova senha"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="confirmPassword"
            className="text-neutral-text font-bold"
          >
            Confirmar Senha:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="border border-gray-300 rounded-md p-2 text-neutral-text"
            placeholder="Digite sua nova senha"
          />
        </div>
        <button
          type="submit"
          className="mx-auto h-12 w-48 flex flex-row items-center justify-center gap-2 bg-transparent border border-neutral-text  px-4 text-white rounded-md hover:opacity-[0.8] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
        >
          {" "}
          <IconSavings />
          Salvar
        </button>
      </form>
    </div>
  );
};
