const TAGS = {
  body: "p",
  h1: "h1",
  h2: "h2",
};

const VARIANT_CLASS = {
  body: "m-0 text-neutral-text text-base leading-[120%]",
  h1: "m-0 text-neutral-text text-[31px] leading-[125%]",
  h2: "m-0 text-neutral-text text-[24px] leading-[125%]",
};

export const Typography = ({ variant, children }) => {
  const Tag = TAGS[variant] || "p";
  const className = VARIANT_CLASS[variant] || VARIANT_CLASS.body;
  return <Tag className={className}>{children}</Tag>;
};
