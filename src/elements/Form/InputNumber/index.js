import React from 'react';
import propsTypes from "prop-types";


export default function Number(props) {

    const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlurar } = props;

    const onChange = (e) => {
        let value = String(e.target.value);

        if (+value <= max && +value >= min) {
            props.onChange({
                target: {
                    name: name,
                    value: +value
                }
            });
        }
    };

    const minus = () => {
        value > min &&
            onChange({
                target: {
                    name: name,
                    value: +value - 1,
                },
            });
    };

    const plus = () => {
        value < max &&
            onChange({
                target: {
                    name: name,
                    value: +value + 1,
                },
            });
    };

    return (
        <div className={["input-number mb-3", props.outerClassName].join(" ")}>
            <div className="relative flex items-stretch w-full">
                <div className="input-group-pepend">
                    <span className="input-group-text minus" onClick={minus}>
                        -
                    </span>
                </div>
                <input
                    min={min}
                    max={max}
                    name={name}
                    readOnly
                    className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded'
                    placeholder={placeholder ? placeholder : "0"}
                    value={`${prefix}${value}${suffix}${isSuffixPlurar && value > 1 ? "s" : ""}`}
                    onChange={onChange}
                />
                <div className="input-group-append">
                    <span className="input-group-text plus" onClick={plus}>
                        +
                    </span>
                </div>
            </div>
        </div>
    );
}

Number.defaultProps = {
    min: 1,
    max: 1,
    prefix: "",
    suffix: "",
};

Number.propsTypes = {
    value: propsTypes.oneOfType([propsTypes.string, propsTypes.number]),
    onChange: propsTypes.func,
    placeholder: propsTypes.string,
    outerClassName: propsTypes.string,
    isSuffixPlurar: propsTypes.bool,
};