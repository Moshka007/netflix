import React, { useContext, useEffect } from 'react';
import { Context } from '../..';
import './pagination.css'

const Pagination = () => {
    const {movie} = useContext(Context);
    const current = movie.currentPage;
    let count = movie.totalCount % movie.limit === 0 ?
                    (movie.totalCount / movie.limit) - 1 
                    : 
                    Math.ceil(movie.totalCount / movie.limit);

    useEffect(() => {
        movie.setCurrentPage(1);
        movie.setOffset(0);
    }, [movie.selectedGenre, movie.sort, movie.search]);

    const paginateItemOnClick = (i) => {
        movie.setOffset(movie.limit * (i - 1));

        movie.setCurrentPage(i);

        const paginateItems = document.querySelectorAll('.pagination-item');
        paginateItems.forEach(item => item.classList.remove('active'));
    }

    const outputPaginationItems = () => {
        let pagination = [],
            iSetPrev = 2,
            iSetNext = 2,
            forLimit = current,
            forStartValue = current;
        
        if (count <= 5) {
            forLimit = count;
            forStartValue = 1; 
            iSetPrev = 0;
            iSetNext = 0;
        } else  if (current + 2 > count) {
            iSetNext = count - current;
            iSetPrev = 4 - (count - current)
        } else if (current - 2 < 1) {
            iSetNext = 4 - (current - 1);
            iSetPrev = current - 1;
        } 

        for (let i = forStartValue - iSetPrev; i <= forLimit + iSetNext; i++ ) {
            pagination.push(
                <div
                    key={i}
                    onClick={() => paginateItemOnClick( i)}
                    className={i === current ? 'pagination-item active' : 'pagination-item' }
                >
                    {i}
                </div>
            )
        }
        return pagination;
    }

    return (
        <div className="pagination-container">
            <div className="pagination-wrapper">
                <div className="pagination-list">

                {
                    (current <= 3) 
                    ||
                    (<div className="ends-wrapper">
                        <div 
                            onClick={() => {movie.setOffset(movie.limit * 0);
                                movie.setCurrentPage(1)}} 
                            className="pagination-item">
                            1
                        </div>
                        <div className="dots">
                            ...
                        </div>
                    </div>)
                }
                
                    {
                        outputPaginationItems().map(el => {
                            if(el.key === current) {
                                el.props.className = 'active';
                            }
                            
                            return el
                        })
                    }
                    
                    
                    {
                        (current >= count - 2) ||  
                        <div className="ends-wrapper">
                            <div className="dots">
                                ...
                            </div>
                            <div 
                                className="pagination-item"
                                onClick={() => {movie.setOffset(movie.limit * (count - 1));
                                                movie.setCurrentPage(count);
                                            }}
                            >
                                {count}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Pagination;