import { useRef, useState } from "react";

export const Otp = ({ number }) => {
    const ref = useRef(Array(number).fill(""));


    return <div className="flex justify-center">
        {Array(number).fill(1).map((x, index) => <SubOtpBox reference={e => ref.current[index] = e} key={index} onDone={() => {
            if (index + 1 >= number) return;
            ref.current[index + 1].focus();
        }} goBack={() => {
            if (index == 0) return;
            ref.current[index - 1].focus();
        }}
        />)}
    </div>;
};

const SubOtpBox = ({ reference, onDone, goBack }) => {
    const [inputBoxVal, setInputBoxVal] = useState("");

    return (
        <div>
            <input value={inputBoxVal}
                ref={reference}
                onKeyDown={(e) => {
                    if (e.key === "Backspace" && inputBoxVal === "") {
                        goBack();
                    }
                }}
                onChange={(e) => {
                    const val = e.target.value

                    if (/^[0-9]$/.test(val)) {
                        setInputBoxVal(val);
                        onDone();
                    }else {
                        setInputBoxVal("");
                    }
                }}
                type="text"
                maxLength={1}
                className="m-1 p-4 w-[40px] h-[50px] bg-[#19406a] text-white rounded-xl outline-none"
            />
        </div>
    );
};
