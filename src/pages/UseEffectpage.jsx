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
      <div className="card btn-wrapper">
        <p>
        The <mark></mark> Hook lets you perform side effects in function components:
        </p>
      </div>
      <div className="section">
        <h5>List of Comments</h5>
        <div className="comments">
          {comments.slice(startIndex, endIndex).map((comment) => (
            <div className="card" key={comment.id}>
              <div className="card-header">
                <strong className="card-title">{comment.name}</strong>
              </div>

              <div className="card-body">
                <p>{comment.body}</p>
              </div>
              <div className="blockquote-footer"> {comment.email}</div>
            </div>
          ))}
        </div>
        <div className="pagination justify-content-center">
          {/* previous button to toggle previous index*/}
          <button
            className={
              currentPage === 1
                ? `page-item page-link disabled`
                : 'page-item page-link'
            }
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {/* display first 3 pages */}
          {[1, 2, 3].map((page) => {
            if (page > totalPages) {
              return null;
            }

            // disable the button if its the current page
            if (page === currentPage) {
              return (
                <button
                  className="page-item active page-link"
                  key={page}
                  onClick={() => handlePageChange(page)}
                  disabled
                >
                  {page}
                </button>
              );
            }
            return (
              <button
                className="page-item page-link"
                key={page}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            );
          })}
          {/* add "..." chars to show extra pages after the third page */}
          {currentPage > 4 ? (
            <span className="page-item page-link disabled">...</span>
          ) : (
            ''
          )}

          {/* handle show current page */}
          {currentPage > 3 && currentPage < totalPages - 2 && (
            <button
              className="page-item page-link"
              onClick={() => handlePageChange(currentPage)}
              disabled
            >
              {currentPage}
            </button>
          )}

          {/* add "..." if current page is greater than last fourth page or last page */}
          {currentPage < totalPages - 3 ? (
            <span className="page-item page-link disabled">...</span>
          ) : (
            ''
          )}

          {/* display the last 3 pages */}
          {[totalPages - 2, totalPages - 1, totalPages].map((page) => {
            // if the current page is less than 1 dont show
            if (page < 1) {
              return null;
            }
            // if one of the last pages is a current page, disable the button
            if (page === currentPage) {
              return (
                <button
                  className="page-item page-link active"
                  key={page}
                  onClick={() => handlePageChange(page)}
                  disabled
                >
                  {page}
                </button>
              );
            }
            // else render the button
            return (
              <button
                className="page-item page-link"
                variant="contained"
                key={page}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            );
          })}

          {/* display next button to toggle next array index */}
          <button
            className={
              currentPage === totalPages
                ? `page-item page-link disabled`
                : 'page-item page-link'
            }
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
