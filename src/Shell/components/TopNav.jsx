import React from 'react';

export default (props) => {
    const { layout } = props;

    return (
        <div>
            <style>{`
                UL.top-nav {
                    background-color: #343434;
                    color: white;
                    height: 100px;
                    margin-bottom: 0;
                }

                UL.top-nav A, UL.top-nav A.visited, UL.top-nav A.active {
                    color: white;
                }

                UL.top-nav A.hover {
                    text-decoration: underline;
                }
            `}</style>
            <ul className='top-nav'>
                <li>{layout.selectedTopMenu === 'Earth' ? 'Earth' : <a href='/planets/earth'>Earth</a>}</li>
                <li>{layout.selectedTopMenu === 'Mars' ? 'Mars' : <a href='/planets/mars'>Mars</a>}</li>
            </ul>
        </div>
    );
};
