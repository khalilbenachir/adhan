import { Card as UICard } from "@/components/ui/card";

const Card = ({ children }: React.PropsWithChildren) => {
  return (
    <UICard className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {children}
    </UICard>
  );
};

export default Card;
