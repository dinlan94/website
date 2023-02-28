import React, { Component } from 'react';
import Header from 'parts/Header';
import Fade from 'react-reveal';
import { connect } from 'react-redux';


import Button from 'elements/Button';
import Stepper, {
    Numbering,
    Meta,
    MainContent,
    Controller,
} from "elements/Stepper";

import BookingInformation from 'parts/Checkout/BookingInformation';
import Payment from 'parts/Checkout/Payment';
import Completed from 'parts/Checkout/Completed';

import { submitBooking } from 'store/actions/checkout';

class Checkout extends Component {

    state = {
        data: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            proofPayment: "",
            bankName: "",
            bankHolder: "",
        },
    };

    onChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value,
            },
        });
    };

    componentDidMount() {
        window.scroll(0, 0);
        document.title = "Staycation | Checkout";
    }

    _Submit = (nextStep) => {
        const { data } = this.state;
        const { checkout } = this.props;

        const payload = new FormData();
        payload.append("firstName", data.firstName);
        payload.append("lastName", data.lastName);
        payload.append("email", data.email);
        payload.append("phoneNumber", data.phone);
        payload.append("idItem", checkout._id);
        payload.append("duration", checkout.duration);
        payload.append("bookingStartDate", checkout.date.startDate);
        payload.append("bookingEndDate", checkout.date.endDate);
        payload.append("accountHolder", data.bankHolder);
        payload.append("bankFrom", data.bankName);
        payload.append("image", data.proofPayment[0]);
        // payload.append("bankId", checkout.bankId);

        this.props.submitBooking(payload).then(() => {
            nextStep();
        });
    };

    render() {

        const { data } = this.state;
        const { checkout, page } = this.props;
        console.log(page, data);

        if (!checkout)
            return (
                <div className="container mx-auto sm:px-4">
                    <div
                        className="flex flex-wrap  items-center justify-center text-center"
                        style={{ height: "100vh" }}
                    >
                        <div className="w-1/4">
                            Pilih kamar dulu
                            <div>
                                <Button
                                    className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline mt-5"
                                    type="button"
                                    onClick={() => this.props.history.goBack()}
                                    isLight
                                >
                                    Back
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            );

        const steps = {
            bookingInformation: {
                title: "Booking Information",
                description: "Pleasi fill up the bank fields below",
                content: (
                    <BookingInformation
                        data={data}
                        checkout={checkout}
                        ItemDetails={page[checkout._id]}
                        onChange={this.onChange}
                    />
                ),
            },

            payment: {
                title: "Payment",
                description: "Kindly follow the instruction below",
                content: (
                    <Payment
                        data={data}
                        checkout={checkout}
                        ItemDetails={page[checkout._id]}
                        onChange={this.onChange}
                    />
                ),
            },

            completed: {
                title: "Yay! Completed",
                description: null,
                content: <Completed />
            },
        }

        return (
            <>
                <Header isCentered />

                <Stepper steps={steps}>
                    {
                        (prevStep, nextStep, CurrentStep, steps) => (
                            <>
                                <Numbering
                                    data={steps}
                                    current={CurrentStep}
                                    style={{ marginBottom: 50 }}
                                />
                                <Meta data={steps} current={CurrentStep} />

                                <MainContent data={steps} current={CurrentStep} />

                                {CurrentStep === "bookingInformation" && (
                                    <Controller>
                                        {data.firstName !== "" &&
                                            data.lastName !== "" &&
                                            data.email !== "" &&
                                            data.phone !== "" && (
                                                <Fade>
                                                    <Button
                                                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline mb-4"
                                                        type="button"
                                                        isBlock
                                                        isPrimary
                                                        hasShadow
                                                        onClick={nextStep}
                                                    >
                                                        Continue to Book
                                                    </Button>
                                                </Fade>
                                            )}
                                        <Button
                                            className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                                            type="link"
                                            isBlock
                                            isLight
                                            href={`/properties/${checkout._id}`}
                                        >
                                            Cancel
                                        </Button>
                                    </Controller>
                                )}

                                {CurrentStep === "payment" && (
                                    <Controller>
                                        {data.proofPayment !== "" &&
                                            data.bankName !== "" &&
                                            data.bankHolder !== "" && (
                                                <Fade>
                                                    <Button
                                                        className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline mb-4'
                                                        type="button"
                                                        isBlock
                                                        isPrimary
                                                        hasShadow
                                                        onClick={() => this._Submit(nextStep)}
                                                    >
                                                        Continue to Book
                                                    </Button>
                                                </Fade>
                                            )
                                        }
                                        <Button
                                            className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline"
                                            type='button'
                                            isBlock
                                            isLight
                                            href={prevStep}
                                        >
                                            Cancel
                                        </Button>
                                    </Controller>
                                )}

                                {CurrentStep === "completed" && (
                                    <Controller>
                                        <Button
                                            className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline'
                                            type='link'
                                            isBlock
                                            isPrimary
                                            hasShadow
                                            href=""
                                        >
                                            Back to Home
                                        </Button>
                                    </Controller>
                                )}
                            </>
                        )
                    }
                </Stepper>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    checkout: state.checkout,
    page: state.page,
});

export default connect(mapStateToProps, { submitBooking })(Checkout);