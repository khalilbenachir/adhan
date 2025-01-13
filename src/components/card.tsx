const Card = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {children}
    </div>
  );
};

export default Card;
