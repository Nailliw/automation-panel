import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import "./index.css";
import ButtonFormComponent from "../Button/ButtonFormComponent";
import {useAddNewSolicitacaoMutation, useGetSystemsActionsQuery} from "../../helpers/api";
import sizeConfigs from "../../configs/sizeConfigs";
import {useParams} from "react-router-dom";
import ErrorComponent from "../ErrorComponent.jsx";
import LoadingComponent from "../LoadingComponent.jsx";
import RevisaoComponent from "./revisaoComponent.jsx";

const steps = ["Selecione a(s) camada(s) e ações", "Revisão"];

function RequestFormComponent() {
    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();
    const watchAllFields = watch();
    const {system} = useParams();

    const {data, error, isLoading} = useGetSystemsActionsQuery(name = system);
    const [setNewSolicitation, {
        currentData,
        isFetching,
        isError,
        isSuccess
    }] = useAddNewSolicitacaoMutation(name = system);

    const [step = 0, setStep] = useState();

    const onSubmit = async (data) => {
        console.log("aa")
        // if (step < 1) {
        //     await setNewSolicitation(data);
        // }
    };

    return (
        <Box>
            <Box sx={{width: "100%", margin: "0", padding: "0"}}>
                <Stepper sx={{marginLeft: "-3vw"}} activeStep={step} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            <Box>
                <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": {m: 1, width: "25ch"},
                        "marginLeft": "4vw"
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <FormControl
                        sx={{m: 1, width: "100%"}}
                        variant="standard"
                        margin="dense"
                    >
                        <Box
                            sx={{minHeight: "60vh", maxHeight: "40vh", marginTop: "1vh"}}
                        >

                            {step === 0 ? (
                                <>
                                    <div
                                        style={{
                                            fontSize: sizeConfigs.title_text.font_size,
                                        }}
                                    >
                                        Informe as camadas e ações que devem ser tomadas para o
                                        sistema selecionado:
                                    </div>
                                    <div
                                        style={{
                                            fontSize: sizeConfigs.title_text.font_size,
                                        }}
                                        className="form-container"
                                    >
                                        {error ? (
                                            <ErrorComponent/>
                                        ) : isLoading ? (
                                            <LoadingComponent/>
                                        ) : data ? (
                                            data.map((item, key) => (
                                                <Box sx={{
                                                    display: "flex",
                                                    flexWrap: "no-wrap",


                                                }}>
                                                    <div className="label-form">{item["camada"]}</div>

                                                    <FormGroup key={key} aria-label="position" row>
                                                        {item["actions"].map((action, key) => (
                                                            <div key={key}>
                                                                <FormControlLabel
                                                                    control={
                                                                        <Controller
                                                                            control={control}
                                                                            name={`${item["camada"]}_${action}`}
                                                                            inputRef={register(`${item["camada"]}_${action}`)}
                                                                            render={({field: {onChange}}) => (
                                                                                <Checkbox
                                                                                    color="primary"
                                                                                    onChange={(e) => onChange(e.target.checked)}
                                                                                />
                                                                            )}
                                                                        />
                                                                    }
                                                                    label={
                                                                        <Typography
                                                                            color={errors.jboss_stop ? "error" : "inherit"}
                                                                            sx={{fontSize: "1.5vh"}}
                                                                        >
                                                                            {action}
                                                                        </Typography>
                                                                    }
                                                                />
                                                            </div>
                                                        ))}
                                                    </FormGroup>
                                                </Box>

                                            ))
                                        ) : null}


                                    </div>
                                </>
                            ) : step === 1 ? (
                                <RevisaoComponent response={data} error={error} isLoading={isLoading} system={system}
                                                  watchAllFields={watchAllFields}/>
                            ) : null}
                        </Box>

                        <Box>

                            <ButtonFormComponent
                                text="Voltar"
                                color="secondary"
                                onClick={() => setStep(step <= 0 ? step : step - 1)}
                            />

                            {step === 1 ? (
                                <ButtonFormComponent
                                    type="submit"
                                    text="Finalizar"
                                    color="success"
                                />
                            ) : (
                                <ButtonFormComponent
                                    type="None"
                                    text="Próximo passo"
                                    color="primary"
                                    onClick={() => {
                                        setStep(step >= 1 ? step : step + 1);
                                    }}
                                />
                            )}
                        </Box>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    );
}

export default RequestFormComponent;
