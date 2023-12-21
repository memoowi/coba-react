import { Link } from "react-router-dom";

export default function HyperLink({ to, children }) {
  return (
    <Link to={ to }>
      <div className="text-3xl p-6 bg-green-500 rounded-full my-2">
        { children }
      </div>
    </Link>
  );
}
