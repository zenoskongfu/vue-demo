const httpFetch = async (url: string, options: RequestInit = {}) => {
    const response = await fetch(url, options);
    return response.json();
};

const getFetch = async (url: string, options: RequestInit) => {
    return httpFetch(url, {
        method: "GET",
        ...options,
    });
}

const postFetch = async (url: string, options: RequestInit) => {
    return httpFetch(url, {
        method: "POST",
        ...options,
    });
}

export  {httpFetch, getFetch, postFetch};