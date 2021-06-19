import Image from "next/image";
// import { ReactComponent as ChevronIcon } from "../public/icons/chevron-down.svg";

const Card = ({ leftIcon, header, content, iconBgColor, hidden, onClick }) => {
  return (
    <div
      className="flex flex-col space-y-4 bg-gray-900 p-6 rounded-3xl"
      onClick={onClick}
    >
      <div className="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-4 content-center">
        <div className="wd-full flex item-center justify-center">
          <div
            className={
              "bg-" +
              iconBgColor +
              " bg-opacity-10 rounded-lg flex item-center justify-center py-2 w-full h-12 xl:h-10 2xl:h-14"
            }
          >
            <Image src={leftIcon} width={20} height={20} />
          </div>
        </div>
        <div className="col-span-4 md:col-span-8 lg:col-span-10 content-center flex items-center ">
          <p className="text-base text-left">{header}</p>
        </div>
        <div className="flex item-center justify-center">
          <Image src="/icons/chevron-down.svg" width={20} height={20} />
        </div>
      </div>
      {!hidden && (
        <div className="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-4 content-center">
          <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-8 lg:col-start-2 lg:col-span-10">
            <p className="text-left text-sm">{content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
