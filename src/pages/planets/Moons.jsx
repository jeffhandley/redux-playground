import React from 'react';

export default ({ moons }) => (
    <div>
        { moons && moons.length && (
            <div>
                Moons:
                <ul>
                    { moons.map((moon) => (
                        <li key={moon}>{moon}</li>
                    )) }
                </ul>
            </div>
        ) }
    </div>
);
