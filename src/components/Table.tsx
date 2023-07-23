import React from 'react';

import '../css/table.css';
import '../css/fonts.css'
import arrowDown from '../images/svg/arrow-down.svg';

type TableProps = {
    processedData
    setProcessedData
    currentPage
    ROWS_PER_PAGE
}

const Table = (props: TableProps) => {

    const {processedData, setProcessedData, currentPage, ROWS_PER_PAGE} = props;

    function compare(a1, a2) {
        return a1.length == a2.length && a1.every((v,i)=>v === a2[i])
    }

    const handleSortIDClick = () => {
        const sortedData = processedData.concat().sort((prev, next) => {if(prev.id > next.id) {return -1}});
        if(compare(processedData, sortedData)) {
            sortedData.reverse();
        }
        setProcessedData(sortedData);
    }

    const handleSortTitleClick = () => {
        const sortedData = processedData.concat().sort((prev, next) =>{if(prev.title < next.title) {return -1}});
        if(compare(processedData, sortedData)) {
            sortedData.reverse();
        }
        setProcessedData(sortedData);
    }

    const handleSortDescriptionClick = () => {
        const sortedData = processedData.concat().sort((prev, next) =>{if(prev.body < next.body) {return -1}});
        if(compare(processedData, sortedData)) {
            sortedData.reverse();
        }
        setProcessedData(sortedData);
    }


    return (
        <table className="table" cellSpacing={0}>
            <tbody>
                <tr className="table__row-heading">
                    <td className="table__column-heading" width={100}>ID <img src={arrowDown} onClick={handleSortIDClick} alt="" /></td>
                    <td className="table__column-heading">Заголовок <img src={arrowDown} onClick={handleSortTitleClick} alt="" /></td>
                    <td className="table__column-heading">Описание <img src={arrowDown} onClick={handleSortDescriptionClick} alt="" /></td>
                </tr>
                {processedData.map((item, index) => (index < (currentPage * ROWS_PER_PAGE) && index >= (currentPage * ROWS_PER_PAGE) - ROWS_PER_PAGE &&
                <tr className="table__row" key={index}>
                    <td className="table__column">{item.id}</td>
                    <td className="table__column">{item.title}</td>
                    <td className="table__column">{item.body}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;