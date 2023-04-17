import React from 'react';
import {Box, Typography} from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs.js";

function ResumoComponent(props) {
    return (
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
            </Box>
        </>
    );
}

export default ResumoComponent;