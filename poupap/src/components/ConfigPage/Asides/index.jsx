import logo from "../../../assets/logo.svg";

export const Aside = () => {
  return (
    <aside className="bg-neutral-darker py-20 px-10 flex flex-col items-center max-w-70.5 min-h-screen gap-14">
      <img src={logo} alt="Logo" />
      <p className="text-center text-neutral-text text-[13px] leading-[120%]">
        Desenvolvido sem fins lucrativos por Alura e Tecboard.
      </p>
    </aside>
  );
};
