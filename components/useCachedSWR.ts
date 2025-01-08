import useSWR from "swr";

const fetchDataAndCache = async (url: string): Promise<any> => {
    const cachedData = localStorage.getItem(url);
    if (cachedData) {
        return JSON.parse(cachedData);
    }

    const response = await fetch(url);
    const data = await response.json();
    localStorage.setItem(url, JSON.stringify(data));

    return data;
};

const useCachedSWR = (url: string) => {
    return useSWR(url, fetchDataAndCache);
};

export default useCachedSWR;
