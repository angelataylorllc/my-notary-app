import React from 'react';

const CertifyingEvent = () => {
    return (
        <div>
            <h2>Certifying the Occurrence of an Event or the Performance of an Act</h2>
            <form>
                <label>
                    State of <input type="text" name="state" />
                </label>
                <br />
                <label>
                    County of <input type="text" name="county" />
                </label>
                <br />
                <label>
                    I certify that the event described in this document has occurred or been performed.
                </label>
                <br />
                <label>
                    Dated: <input type="date" name="date" />
                </label>
                <br />
                <br />
                ________________________________
                <br />
                (Signature of notary public)
                <br />
                <br />
                <label>
                    Title of office <input type="text" name="title" />
                </label>
                <br />
                <label>
                    My commission expires: <input type="date" name="expiry_date" />
                </label>
                <br />
            </form>
        </div>
    );
};

export default CertifyingEvent;
