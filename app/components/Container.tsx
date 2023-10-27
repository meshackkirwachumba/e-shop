interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className="
        max-w-[1920px]
        mx-auto
        px-4
        xl:px-20
        md:px-2   
        bg-yellow-500
      "
    >
      {children}
    </div>
  );
};

export default Container;
