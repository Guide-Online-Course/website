import Link from "next/link";

const Index = () => {
  return (
    <Link href="/">
      <a className="flex">
        <img
          className="w-1/12"
          src={"/guideonlinecourse_white_logo.png"}
          alt={"guideonlinecourse"}
        />
        <span className="text-white pl-1 text-xs leading-4">BETA</span>
      </a>
    </Link>
  );
};

export default Index;
