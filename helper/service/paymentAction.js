import axios from "axios";
export const getPaymentInfoService = async (checkoutPAth) => {
  try {
    let uri = `${process.env.REACT_HYPERPAY_PAYMENT_URL}${checkoutPAth}`;

    const { data, status } = await axios.get(uri, {
      headers: {
        Authorization: "Token",
      },
    });
    if (status === 200) {
      return {
        data,
        status,
      };
    }
  } catch (error) {
    if (error.response && error.response.data) {
      return {
        data: error.response.data,
        status: error.response.status,
      };
    }
    return {
      data: null,
      status: 404,
    };
  }
 
};

