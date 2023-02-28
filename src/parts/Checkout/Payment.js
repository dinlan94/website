import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "elements/Form";

import logoBca from "assets/images/logo-bca.jpg";
import logoMandiri from "assets/images/logo-mandiri.jpg";

export default function Payment(props) {
    const { data, ItemDetails, checkout } = props;

    const tax = 10;
    const subTotal = ItemDetails.price * checkout.duration;
    const grandTotal = (subTotal * tax) / 100 + subTotal;

    return (
        <Fade>
            <div className="container mx-auto sm:px-4" style={{ marginBottom: 30 }}>
                <div className="flex flex-wrap  justify-center items-center">
                    <div className="w-2/5 border-r py-5" style={{ paddingRight: 80 }}>
                        <Fade delay={300}>
                            <p className="mb-4">Transfer Pembayaran:</p>
                            <p>Tax: {tax}%</p>
                            <p>Sub total: ${subTotal} USD</p>
                            <p>Total: ${grandTotal} USD</p>
                            <div className="flex flex-wrap  mt-4">
                                <div className="w-1/4 text-right">
                                    <img src={logoBca} alt="bank central asia" width="60" />
                                </div>
                                <div className="relative flex-grow max-w-full flex-1 px-4">
                                    <dl>
                                        <dd>Bank Central Asia</dd>
                                        <dd>9542 3365</dd>
                                        <dd>Fajarudin</dd>
                                    </dl>
                                </div>
                            </div>

                            <div className="flex flex-wrap ">
                                <div className="w-1/4 text-right">
                                    <img src={logoMandiri} alt="mandiri" width="60" />
                                </div>
                                <div className="relative flex-grow max-w-full flex-1 px-4">
                                    <dl>
                                        <dd>Bank Mandiri</dd>
                                        <dd>9542 3365</dd>
                                        <dd>Fajarudin</dd>
                                    </dl>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="w-2/5 py-5" style={{ paddingLeft: 80 }}>
                        <Fade delay={600}>
                            <label htmlFor="proofPayment">Upload Bukti Transfer</label>
                            <InputFile
                                accept="image/*"
                                id="proofPayment"
                                name="proofPayment"
                                value={data.proofPayment}
                                onChange={props.onChange}
                            />

                            <label htmlFor="bankName">Asal Bank</label>
                            <InputText
                                id="bankName"
                                name="bankName"
                                type="text"
                                value={data.bankName}
                                onChange={props.onChange}
                            />

                            <label htmlFor="bankHolder">Nama Pengirim</label>
                            <InputText
                                id="bankHolder"
                                name="bankHolder"
                                type="text"
                                value={data.bankHolder}
                                onChange={props.onChange}
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
