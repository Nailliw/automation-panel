import {useAddNewSolicitacaoMutation} from "./api.js";

export async function AddNewSolicitacao(url, form_data) {
    const [currentData, {data, isFetching, isError, isSuccess}] = useAddNewSolicitacaoMutation(name = url);
    await currentData(form_data);

    console.log(data)
    return data
}