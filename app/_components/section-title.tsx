interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className="font-semibold capitalize">{title}</h2>;
};

export default SectionTitle;
