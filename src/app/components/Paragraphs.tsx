interface ParagraphsProps {
  paragraph?: string;
}
const Paragraphs = ({ paragraph }: ParagraphsProps) => {
  return (
    <p className="text-gray-700 text-left mt-4 whitespace-pre-line">
      {paragraph}
    </p>
  );
};
export default Paragraphs;
