import { useState } from "react";

export const useParams = () => {
    const [params, setParams] = useState({});

    const postParams = async (url, body) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();

            if (data.ok) {
                setParams(data);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const handleChangeParams = (event) => {
        const { name, value } = event.target;
        setParams((prevParams) => ({ ...prevParams, [name]: value }));
    };

    return { params, postParams , handleChangeParams };
}

