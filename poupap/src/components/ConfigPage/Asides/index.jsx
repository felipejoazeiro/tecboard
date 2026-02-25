import logo from "../../../assets/logo.svg";

export const Aside = () => {
  return (
    <aside className="bg-neutral-darker text-white py-20 px-10 flex flex-col items-center max-w-70.5 min-h-screen">
      <img src={logo} alt="Logo" />
      <p className="mt-4 text-center">
        Desenvolvido sem fins lucrativos por Alura e Tecboard.
      </p>
    </aside>
  );
};
