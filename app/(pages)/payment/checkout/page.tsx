import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { getPaymentInfoService } from "@/helper/service/paymentAction";
function RedirectDemo() {
  const search: any = usePathname().search;
  const resourcePath = new URLSearchParams(search).get("resourcePath");
  const resourceId = new URLSearchParams(search).get("id");

  const { replace } = useRouter();

  useEffect(() => {
    // here we get resourcePath and resourceId from query parameters
    // from resourceId we call haperpay api 'https://test.oppwa.com' to
    //  append the resource id
    // ex- https://test.oppwa.com${resourceId}
    if (resourceId) {
      handlePayment();
    }
  }, []);

  const handlePayment = async () => {
    let checkoutPAth: any = {};
    checkoutPAth.id = resourceId;

    let response: any = await getPaymentInfoService(checkoutPAth);
    // from this api response we get success code and may be some time error code
    // if get succeess code from these below codes that means hyper pay verify the pament
    //  from that card which is you entered
    // otherwise we get other code except one of these below codes then may the card
    // is invalid or card is expired.
    let parseData = JSON.parse(response.data.result);
    let payload: any = {};
    payload.resourcePath = resourcePath;
    if (
      parseData.result.code == "000.100.112" ||
      parseData.result.code == "000.100.110" ||
      parseData.result.code == "000.000.000" ||
      parseData.result.code == "000.000.100" ||
      parseData.result.code == "000.100.105" ||
      parseData.result.code == "000.300.000"
    ) {
      if (resourcePath) {
        console.log("Add Card And Payment Done ");
      }
      if (response.status === 400) {
        alert("Please try again payment failed");
      }
    } else if (parseData.result.code == "100.100.303") {
      console.log("CARD EXPIRED");
    } else {
      replace("/");
    }
  };
  return (
    <>
      <div>
        <form className="paymentWidgets" data-brands="MADA VISA MASTER "></form>
      </div>
    </>
  );
}

export default RedirectDemo;
