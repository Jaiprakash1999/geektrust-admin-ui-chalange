import axios from "axios";
import { useEffect, useState } from "react";

const useGetUserData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUserData = async () => {
        try {
            const response = await axios.get(
                `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
            );
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error || "Oops somthing went wrong");
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return {
        data,
        loading,
    };
};
export default useGetUserData;
