export const authenticateUser = async (userData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.digitalSignature === "VALID_SIGNATURE") {
          resolve({ success: true, message: "Login Successful!" });
        } else {
          reject(new Error("Invalid digital signature"));
        }
      }, 1000);
    });
  };
  