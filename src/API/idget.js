export const Idget = async () => {
  
    const response = await fetch('http://localhost:3000/api/auth/idget', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // ✅ Allows cookies to be sent and
        });
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // console.log("dsc",data);
    return data;
    }
