import React from 'react';

const WitnessingSignature = () => {
    return (
        <div>
            <h2>Witnessing or Attesting a Signature</h2>
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
                    Signed or attested before me on <input type="date" name="date" />
                </label>
                <br />
                <label>
                    by <input type="text" name="individuals" />
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

export default WitnessingSignature;