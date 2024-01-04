import React from 'react';
import Counter from "../component/counter/counter";

const CouneterPage = () => {
    return (
        <div>
            <div className="row d-flex justify-content-center">
                <div className="col col-md-6">
                    <Counter />
                </div>

            </div>

        </div>
    );
};

export default CouneterPage;