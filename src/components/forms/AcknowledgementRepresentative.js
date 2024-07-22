import React from 'react';

const AcknowledgmentRepresentative = () => {
    return (
        <div>
            <h2>Acknowledgment in Representative Capacity</h2>
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
                    This record was acknowledged before me on <input type="date" name="date" />
                </label>
                <br />
                <label>
                    by <input type="text" name="individuals" />
                </label>
                <br />
                <label>
                    as <input type="text" name="authority" placeholder="type of authority" />
                </label>
                <br />
                <label>
                    of <input type="text" name="party" placeholder="name of party" />
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

export default AcknowledgmentRepresentative;
