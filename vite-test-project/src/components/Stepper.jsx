import { useState } from "react";

const Stepper = ({content}) =>{
    const [currentStep, setCurrentStep] = useState(0);


    const handleGoBack = () => {
        if(currentStep>=1){
            setCurrentStep(currentStep-1);
        }
    }

    const handleGoNext = () => {
        if(currentStep<content.length-1){
            setCurrentStep(currentStep+1);
        }
    }

    return (
        <div className="page">
            <div>
                <h1>{content[currentStep].title}</h1>
                <p>{content[currentStep].content}</p>
            </div>
            <div className="stepper">
                <button 
                    onClick={()=>handleGoBack()}
                    disabled={currentStep===0}
                >
                    {`<`}
                </button>
                <p className="stepper-text">{currentStep}</p>
                <button
                    onClick={()=>handleGoNext()}
                    disabled={currentStep===content.length-1}>
                    {`>`}
                </button>
            </div>
        </div>
    )
}

export default Stepper;