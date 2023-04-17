import React from 'react';
import {Box, Snackbar, Typography} from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import sizeConfigs from "../../configs/sizeConfigs.js";
import ErrorComponent from "../ErrorComponent.jsx";
import LoadingComponent from "../LoadingComponent.jsx";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const RevisaoComponent = ({response, error, isLoading, system, watchAllFields}) => {
    const task = JSON.parse(localStorage.getItem("newSolicitation"))
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <Box
                style={{
                    fontSize: sizeConfigs.title_text.font_size,
                }}
            >
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                        Solicitação #{task['data']['task_id']} foi criada!
                    </Alert>
                </Snackbar>
                <Typography>Revisão da solicitação</Typography>
                <br/>
                <div>Usuário: Willian R dos Santos</div>
                <div>Nome: P686199</div>
                <div>Data de abertura: 14/04/2023</div>
                <br/>
                <Typography>Sistema: {system}</Typography>
                <Typography>Camadas e ações</Typography>
                <br/>
                {error ? (
                    <ErrorComponent/>
                ) : isLoading ? (
                    <LoadingComponent/>
                ) : response ? (
                    response.map((item, key) => (
                        <div key={key}>
                            {item["camada"]}:
                            {item["actions"].map((action) => (
                                <>
                                    {watchAllFields[`${item['camada']}_${action}`] ?
                                        <ul>{item['camada']}_{action}</ul> : null
                                    }
                                </>

                            ))}

                        </div>
                    ))
                ) : null}

            </Box>
        </>
    );
};

export default RevisaoComponent;