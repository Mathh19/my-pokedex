type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      {children}
    </div>
  );
};
