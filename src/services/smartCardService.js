export const readSmartCard = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldFail = Math.random() > 0.8; 
        if (shouldFail) {
          reject(new Error("Failed to read smart card"));
        } else {
          resolve({
            userId: "12345",
            name: "John Doe",
            digitalSignature: "VALID_SIGNATURE",
          });
        }
      }, 1000);
    });
  };
  