const Card = ({ children }) => {
  return (
    <div className="w-full bg-neutral-surface rounded-3xl p-6 flex flex-col gap-4">
      {children}
    </div>
  );
};

export const CardHeader = ({ children }) => {
  return <div className="bg-neutral-header text-center p-4 rounded-t-3xl text-neutral-text text-xl font-bold">{children}</div>;
};

export const CardBody = ({ children }) => {
  return <div className="px-4 py-6">{children}</div>;
};

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
