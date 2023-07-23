import React, { useCallback } from 'react';

import '../css/pagination.css';

type PaginationProps = {
    processedData
    currentPage
    setCurrentPage
    ROWS_PER_PAGE
}

const Pagination = (props: PaginationProps) => {

    const {processedData, currentPage, setCurrentPage, ROWS_PER_PAGE} = props;

    const getTotalPageCount = (rowCount: number): number => Math.ceil(rowCount / ROWS_PER_PAGE);

    const handleNextPageClick = useCallback(() => {
        const current = currentPage;
        const next = current + 1;
        const total = processedData ? getTotalPageCount(processedData.length) : current;

        setCurrentPage(next <= total ? next : current);
    }, [currentPage, processedData])

    const handlePrevPageClick = useCallback(() => {
        const current = currentPage;
        const prev = current - 1;
      
        setCurrentPage(prev > 0 ? prev : current);
    }, [currentPage]);

    const handlerPageNumberClick = (e) => {
        setCurrentPage(Number(e.target.innerText));
    }

    return (
        <div className="pagination">
            <button className="pagination__button" id="previous" onClick={handlePrevPageClick} disabled={currentPage === 1}>Назад</button>
            <ul className="pagination__page-numbers">
            {new Array(Math.ceil(processedData.length / 10)).fill('').map((item, index) => <li className={currentPage == index + 1 ? "pagination__page-number pagination__page-number_active" : "pagination__page-number"} key={index + 1} onClick={handlerPageNumberClick}>{index + 1}</li>) }
            </ul>
            <button className="pagination__button" id="next" onClick={handleNextPageClick} disabled={currentPage === getTotalPageCount(processedData.length)}>Далее</button>
        </div>
    );
}

export default Pagination;