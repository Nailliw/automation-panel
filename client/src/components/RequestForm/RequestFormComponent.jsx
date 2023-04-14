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
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "./index.css";
import ButtonFormComponent from "../Button/ButtonFormComponent";
import { useAddNewSolicitacaoMutation } from "../../helpers/api";
import sizeConfigs from "../../configs/sizeConfigs";

const steps = ["Selecione a(s) camada(s) e ações", "Revisão", "Resumo da task"];

function RequestFormComponent() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [addSolicitacao, { isLoading }] = useAddNewSolicitacaoMutation();

  const [step = 0, setStep] = useState();

  const onSubmit = async (data) => {
    console.log(data);
    await addSolicitacao(data);
  };

  return (
    <Box>
      <Box sx={{ width: "100%", margin: "0", padding: "0" }}>
        <Stepper sx={{ marginLeft: "-3vw" }} activeStep={step} alternativeLabel>
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
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl
            sx={{ m: 1, width: "100%" }}
            variant="standard"
            margin="dense"
          >
            <Box
              sx={{ minHeight: "60vh", maxHeight: "40vh", marginTop: "1vh" }}
            >
              {step == 0 ? (
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
                    <div className="label-form">JBOSS</div>

                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        control={
                          <Controller
                            control={control}
                            name="jboss_stop"
                            defaultValue={"False"}
                            inputRef={register("jboss_stop")}
                            render={({ field: { onChange } }) => (
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
                            sx={{ fontSize: "1.5vh" }}
                          >
                            STOP
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Controller
                            control={control}
                            name="jboss_start"
                            defaultValue={"False"}
                            inputRef={register("jboss_start")}
                            render={({ field: { onChange } }) => (
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
                            sx={{ fontSize: "1.5vh" }}
                          >
                            START
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Controller
                            control={control}
                            name="jboss_restart"
                            defaultValue={"False"}
                            inputRef={register("jboss_restart")}
                            render={({ field: { onChange } }) => (
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
                            sx={{ fontSize: "1.5vh" }}
                          >
                            RESTART
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Controller
                            control={control}
                            name="jboss_reciclagem"
                            defaultValue={"False"}
                            inputRef={register("jboss_reciclagem")}
                            render={({ field: { onChange } }) => (
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
                            sx={{ fontSize: "1.5vh" }}
                          >
                            RECICLAGEM
                          </Typography>
                        }
                      />
                    </FormGroup>

                    <div className="label-form">NGINX</div>
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        control={
                          <Controller
                            control={control}
                            name="nginx_stop"
                            defaultValue={"False"}
                            inputRef={register("nginx_stop")}
                            render={({ field: { onChange } }) => (
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
                            sx={{ fontSize: "1.5vh" }}
                          >
                            STOP
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Controller
                            control={control}
                            name="nginx_start"
                            defaultValue={"False"}
                            inputRef={register("nginx_start")}
                            render={({ field: { onChange } }) => (
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
                            sx={{ fontSize: "1.5vh" }}
                          >
                            START
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Controller
                            control={control}
                            name="nginx_restart"
                            defaultValue={"False"}
                            inputRef={register("nginx_restart")}
                            render={({ field: { onChange } }) => (
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
                            sx={{ fontSize: "1.5vh" }}
                          >
                            RESTART
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Controller
                            control={control}
                            name="nginx_reciclagem"
                            defaultValue={"False"}
                            inputRef={register("nginx_reciclagem")}
                            render={({ field: { onChange } }) => (
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
                            sx={{ fontSize: "1.5vh" }}
                          >
                            RECICLAGEM
                          </Typography>
                        }
                      />
                    </FormGroup>
                  </div>
                </>
              ) : step == 1 ? (
                <>
                  <Box
                    style={{
                      fontSize: sizeConfigs.title_text.font_size,
                    }}
                  >
                    {" "}
                    <Typography>Revisão da solicitação</Typography>
                    <br />
                    <div>Usuário: Willian R dos Santos</div>
                    <div>Nome: P686199</div>
                    <div>Data de abertura: 14/04/2023</div>
                    <br />
                    <Typography>Sistema: SINEP</Typography>
                    <Typography>Camadas e ações</Typography>
                    <br />
                    <div>
                      JBOSS:
                      <ul>STOP, START, RECICLAGEM</ul>
                    </div>
                    <div>
                      NGINX:
                      <ul>RESTART</ul>
                    </div>
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    style={{
                      fontSize: sizeConfigs.title_text.font_size,
                    }}
                  >
                    <Typography>Resumo da Solicitação</Typography>
                    <br />
                    <div>ID DA TASK: #123</div>
                    <div>Status TASK: Em andamento</div>
                    <div>Usuário: Willian R dos Santos</div>
                    <div>Nome: P686199</div>
                    <div>Data de abertura: 14/04/2023</div>
                    <br />
                    <Typography>Sistema: SINEP</Typography>
                    <Typography>Camadas e ações</Typography>
                    <br />
                    <div>
                      JBOSS:
                      <ul>STOP, START, RECICLAGEM</ul>
                    </div>
                    <div>
                      NGINX:
                      <ul>RESTART</ul>
                    </div>
                  </Box>
                </>
              )}
            </Box>

            <Box>
              {step != 0 ? (
                <>
                  <ButtonFormComponent
                    text="Voltar"
                    color="secondary"
                    onClick={() => setStep(step <= 0 ? step : step - 1)}
                  />
                </>
              ) : null}
              {step == 2 ? (
                <ButtonFormComponent
                  type="submit"
                  text="Finalizar"
                  color="success"
                />
              ) : (
                <ButtonFormComponent
                  text="Próximo passo"
                  color="primary"
                  onClick={() => {
                    setStep(step >= 2 ? step : step + 1);
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
