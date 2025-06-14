import Continer from "./Continer";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="p-4 mt-auto bg-gray-100 text-center ">
      <Continer>
        <p className="text-sm text-gray-700">© {date.getFullYear()} My Store. All rights reserved.</p>
      </Continer>
    </footer>
  );
}