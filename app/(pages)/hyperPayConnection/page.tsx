"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function CheckoutId({}) {
  const [checkoutId, setCheckoutId] = useState<any>(0);
  const searchParams = useSearchParams();
  const Card = searchParams.get("card");

  useEffect(() => {
    checkoutData();
  }, []);

  const checkoutData = async () => {
    let payload: any = {};
    payload.currency = "SAR";
    payload.amount = 1;
    payload.entityId =
      Card === "mada" || Card === "MADA"
        ? process.env.REACT_APP_GOEJAR_HYPERPAY_MADA_ENTITYID
        : process.env.REACT_APP_GOEJAR_HYPERPAY_VISA_MASTER_ENTITYID;
    payload.merchantId = new Date().getTime();
    payload.givenName = "Ankesh";
    payload.surname = "Kumar";

    // from here we pass all data like entity id, currency type, amount merchant id to genrate
    // checkout id for add visa or mada type card and do payment from that card
    //  now when we get checkout id there is render a Card widget where we enter the
    //  card details like cardHolder name, card number, cvv number and the expiry date
    //  and when we click on pay now button in widget then from hyperPay redirect the
    //   "payment/checkout" url.
    //  from that we get Resource Id and resouce path
    //  now visit payment checkout page in page folder
  };

  const renderPaymentform = () => {
    const script = document.createElement("script");
    script.src = `${process.env.REACT_APP_GOEJAR_HYPERPAY_PAYMENT_WIDGET}?checkoutId=${checkoutId}`;

    script.async = true;
    document.body.appendChild(script);
  };

  return (
    <div>
      <div>
        <h2>Payment</h2>
        <p></p>
      </div>
      {checkoutId && renderPaymentform()}

      <div>
        <form
          action="/#/addCard/payment/checkout/"
          className="paymentWidgets wpwl-form wpwl-clearfix"
          data-brands="MADA VISA MASTER "
        ></form>
      </div>
    </div>
  );
}
