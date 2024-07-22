import React from 'react';

const CertifyingCopy = () => {
    return (
        <div>
            <h2>Certifying or Attesting a Copy of a Record</h2>
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
                    I certify that this is a true and correct copy of a record in the possession of <input type="text" name="possession" />
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

export default CertifyingCopy;
