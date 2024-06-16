import React, { useState } from 'react'


const FileBar = ({ onFilter }) => {

    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const handleFilter = () => {
        console.log("fromDate: ", fromDate);
        console.log("toDate: ", toDate);
        onFilter(fromDate, toDate);
        setFromDate(null);
        setToDate(null);

    };


    return (
        <div className="container my-4 p-0"> 
            <div className="row my-2">
                <h1 className="h4">Joined Twitter between</h1>
                <div className="col d-flex gap-2 gap-md-3 flex-column flex-sm-row">
                    <div className='col col-md-3'>
                        <label
                            htmlFor='startDate'>
                            Start Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id='startDate'
                            placeholder="Start Date"
                            value={fromDate? fromDate : ""}
                            onChange={e => setFromDate(e.target.value)} />
                    </div>
                    <div className='col col-md-3'>
                        <label
                            htmlFor='endDate'>
                            End Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id='endDate'
                            placeholder="End Date"
                            value={toDate? toDate : ""}
                            onChange={e => setToDate(e.target.value)} />
                    </div>
                    <div className='align-self-end'>
                        <button
                            className="btn btn-primary"
                            disabled={!fromDate || !toDate}
                            onClick={handleFilter}>
                            Filter</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FileBar