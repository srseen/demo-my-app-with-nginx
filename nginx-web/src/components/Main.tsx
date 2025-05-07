import { useState } from "react";
import AppData from "../data/AppData";

const itemsPerPage = 9;

export default function Main() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = AppData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = AppData.slice(startIndex, endIndex).map((app) => ({
    name: app.name,
    href: app.href,
    description: app.description,
  }));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-gradient-to-br from-sky-50 to-indigo-100">
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-indigo-700">
          Welcome to My Services
        </h1>
        <p className="mb-8 text-gray-600">
          นี้คือตัวอย่างแอปพลิเคชันและระบบต่างๆที่เราให้บริการ
        </p>
        <div className="flex flex-col items-center justify-center w-full min-h-[365px]">
          <div className="grid gap-6 md:grid-cols-3 w-full max-w-5xl">
            {currentItems.map((data) => (
              <a
                key={data.name}
                href={data.href}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border hover:border-indigo-400"
              >
                <h2 className="text-2xl font-semibold text-indigo-600">
                  {data.name}
                </h2>
                <p className="text-gray-500">{data.description}</p>
              </a>
            ))}
          </div>
        </div>
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    aria-current="page"
                    className={`${
                      page === currentPage
                        ? "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                    } relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline focus:outline-indigo-500`}
                  >
                    {page}
                  </button>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </main>
  );
}
