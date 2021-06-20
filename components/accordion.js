import useSwr from "swr";
import { useState } from "react";
import Card from "./card";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Accordion = () => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(active !== index ? index : null);
  };

  const { data, error } = useSwr("/api/tips", fetcher);

  if (error) return <div>Failed to load tips</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col space-y-4">
      {data.map((data, index) => (
        <Card
          leftIcon={`/icons/${data.type}.svg`}
          header={data.title}
          content={data.description}
          iconBgColor={data.type}
          hidden={active !== index}
          onClick={() => handleClick(index)}
          key={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
