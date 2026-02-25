export const Container = ({ children }) => {
  return (
    <div className="flex max-w-300 mx-auto bg-neutral-background rounded-lg shadow-lg overflow-hidden gap-6">
        {children}
    </div>
  );
}