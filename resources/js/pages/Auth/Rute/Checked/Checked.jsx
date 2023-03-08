import { Checkbox } from "primereact/checkbox";
import { useEffect, useState } from "react";

const Checked = ({ data, index, setID }) => {
    const [checked, setChecked] = useState(null);

    useEffect(() => {
        if (checked !== null) {
            setID(index);
            console.log('aquii')
        }
    }, [checked]);

    return (
        <div className="radioOption">
            <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.checked)}
            />
            <p>{data}</p>
        </div>
    );
};

export default Checked;
