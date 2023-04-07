import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectpage = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setComments(response.data);
      });
  }, []);

  // handle pagination
  const commentsPerpage = 5;
  const totalPages = Math.ceil(comments.length / commentsPerpage);
  const startIndex = (currentPage - 1) * commentsPerpage;
  const endIndex = startIndex + commentsPerpage;

  // handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="wrapper">
      <h2>UseEffect</h2>
      <div className="section">
        <h5>List of Comments</h5>
        <div className="comment">
          {comments.slice(startIndex, endIndex).map((comment) => (
            <div key={comment.id}>
              <strong>{comment.name}</strong>
              <p>{comment.email}</p>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
        <div className='pagination'>
          {/* previous button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          {[1, 2, 3].map((page) => {
            if (page > totalPages) {
              return null;
            }
            if (page === currentPage) {
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  disabled
                >
                  {page}
                </button>
              );
            }
            return (
              <button key={page} onClick={() => handlePageChange(page)}>
                {page}
              </button>
            );
          })}
          {currentPage > 3 && <span>...</span>}
          {currentPage > 2 && currentPage < totalPages && (
            <button onClick={() => handlePageChange(currentPage)} disabled>
              {currentPage}
            </button>
          )}
          {currentPage < totalPages - 1 && <span>...</span>}
          {[totalPages - 2, totalPages - 1, totalPages].map((page) => {
            if (page < 1) {
              return null;
            }
            if (page === currentPage) {
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  disabled
                >
                  {page}
                </button>
              );
            }
            return (
              <button key={page} onClick={() => handlePageChange(page)}>
                {page}
              </button>
            );
          })}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseEffectpage;
