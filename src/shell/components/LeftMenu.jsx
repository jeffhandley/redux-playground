import React from 'react';

export default (props) => {
    const { layout } = props;

    return (
        <div>
            <style>{`
                UL.left-nav {
                    float: left;
                    background-color: silver;
                    width: 100px;
                    height: 90%;
                    margin-right: 30px;
                    margin-top: 0;
                    margin-bottom: 0;
                }

                UL.left-nav A, UL.left-nav A.visited, UL.left-nav A.active {
                    color: blue;
                }

                UL.left-nav A.hover {
                    text-decoration: underline;
                }
            `}</style>
            <ul className='left-nav'>
                { layout.leftMenu && layout.leftMenu.length && layout.leftMenu.map((item, i) =>
                    <li key={i}><a href={item.href} title={item.title}>{item.text}</a></li>
                )}
            </ul>
        </div>
    );
};
