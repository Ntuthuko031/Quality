// import React, { useState } from "react";

// const Pagination = (props) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   let totalPages = props.drivers.length/2;

//   const handlePageClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     //onPageChange(pageNumber);
//   };

//   const handleNextClick = () => {
//     if (currentPage < totalPages) {
//       const newPage = currentPage + 1;
//       setCurrentPage(newPage);
//       //onPageChange(newPage);
//       props.setIn();
//       props.setOut();
//     }
//   };

//   const handlePreviousClick = () => {
//     if (currentPage > 1) {
//       const newPage = currentPage - 1;
//       setCurrentPage(newPage);
//       props.setInPrev();
//       props.setOutPrev();
//       //onPageChange(newPage);
//     }
//   };

//   const renderPageNumbers = () => {
//     return Array.from({ length: totalPages }, (_, i) => i + 1).map(
//       (pageNumber) => (
//         <button
//           key={pageNumber}
//           className={`px-2 py-1 rounded-md ${
//             pageNumber === currentPage
//               ? "bg-blue-500 text-white"
//               : "bg-gray-200"
//           }`}
//           onClick={() => handlePageClick(pageNumber)}
//         >
//           {pageNumber}
//         </button>
//       )
//     );
//   };

//   return (
//     <div className="flex justify-end items-end space-x-2 mt-4">
//       <button
//         className="px-2 py-1 bg-gray-200 rounded-md"
//         onClick={handlePreviousClick}
//         disabled={currentPage === 1}
//       >
//         Previous
//       </button>
//       {renderPageNumbers()}
//       <span>...</span>
//       <button
//         className={`px-2 py-1 rounded-md ${
//           currentPage === totalPages ? "text-gray-400" : "bg-gray-200"
//         }`}
//         onClick={() => handlePageClick(totalPages)}
//       >
//         {totalPages}
//       </button>
//       <div
//         className="px-2 py-1 text-blue-500 rounded-md font-bold"
//         onClick={handleNextClick}
//         disabled={currentPage === totalPages}
//       >
//         Next &#8594;
//       </div>
//     </div>
//   );
// };

// export default Pagination;
import React, { useState } from "react";

const Pagination = ({ totalPages = 10, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <button
          key={pageNumber}
          className={`px-2 py-1 rounded-md ${
            pageNumber === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </button>
      )
    );
  };

  return (
    <div className="flex justify-end items-end space-x-2 mt-4">
      <button
        className="px-2 py-1 bg-gray-200 rounded-md"
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <span>...</span>
      <button
        className={`px-2 py-1 rounded-md ${
          currentPage === totalPages ? "text-gray-400" : "bg-gray-200"
        }`}
        onClick={() => handlePageClick(totalPages)}
      >
        {totalPages}
      </button>
      <div
        className="px-2 py-1 text-blue-500 rounded-md font-bold cursor-pointer"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next &#8594;
      </div>
    </div>
  );
};

export default Pagination;
